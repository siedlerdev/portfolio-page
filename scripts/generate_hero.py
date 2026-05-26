from __future__ import annotations

import math
import struct
import zlib
from pathlib import Path


WIDTH = 1400
HEIGHT = 1000
OUT = Path(__file__).resolve().parents[1] / "public" / "andreas-portfolio-field.png"


pixels = bytearray(WIDTH * HEIGHT * 4)


def clamp(value: float) -> int:
    return max(0, min(255, round(value)))


def blend_pixel(x: float, y: float, color: tuple[int, int, int], alpha: float = 1.0) -> None:
    xi = int(x)
    yi = int(y)
    if xi < 0 or yi < 0 or xi >= WIDTH or yi >= HEIGHT:
        return
    index = (yi * WIDTH + xi) * 4
    inv = 1 - alpha
    pixels[index] = clamp(pixels[index] * inv + color[0] * alpha)
    pixels[index + 1] = clamp(pixels[index + 1] * inv + color[1] * alpha)
    pixels[index + 2] = clamp(pixels[index + 2] * inv + color[2] * alpha)
    pixels[index + 3] = 255


def fill_circle(cx: float, cy: float, radius: float, color: tuple[int, int, int], alpha: float) -> None:
    radius_sq = radius * radius
    for y in range(int(cy - radius), int(cy + radius) + 1):
        for x in range(int(cx - radius), int(cx + radius) + 1):
            distance_sq = (x - cx) ** 2 + (y - cy) ** 2
            if distance_sq <= radius_sq:
                falloff = 1 - math.sqrt(distance_sq) / (radius * 1.18)
                blend_pixel(x, y, color, alpha * max(0, falloff))


def line(
    x0: float,
    y0: float,
    x1: float,
    y1: float,
    color: tuple[int, int, int],
    alpha: float,
    width_px: int = 1,
) -> None:
    steps = max(abs(x1 - x0), abs(y1 - y0), 1)
    for step in range(int(steps) + 1):
        t = step / steps
        x = x0 + (x1 - x0) * t
        y = y0 + (y1 - y0) * t
        for oy in range(-width_px, width_px + 1):
            for ox in range(-width_px, width_px + 1):
                falloff = 1 - min(1, math.hypot(ox, oy) / (width_px + 1))
                blend_pixel(x + ox, y + oy, color, alpha * falloff)


def curve(points: list[tuple[float, float]], color: tuple[int, int, int], alpha: float, width_px: int) -> None:
    for index in range(len(points) - 1):
        line(*points[index], *points[index + 1], color, alpha, width_px)


def block_text(text: str, x: int, y: int, scale: int, color: tuple[int, int, int], alpha: float) -> None:
    glyphs = {
        "A": [14, 17, 31, 17, 17],
        "B": [30, 17, 30, 17, 30],
        "C": [15, 16, 16, 16, 15],
        "D": [30, 17, 17, 17, 30],
        "E": [31, 16, 30, 16, 31],
        "F": [31, 16, 30, 16, 16],
        "I": [31, 4, 4, 4, 31],
        "K": [17, 18, 28, 18, 17],
        "L": [16, 16, 16, 16, 31],
        "M": [17, 27, 21, 17, 17],
        "O": [14, 17, 17, 17, 14],
        "P": [30, 17, 30, 16, 16],
        "R": [30, 17, 30, 18, 17],
        "S": [15, 16, 14, 1, 30],
        "T": [31, 4, 4, 4, 4],
        "W": [17, 17, 21, 27, 17],
        "Y": [17, 10, 4, 4, 4],
        "-": [0, 0, 31, 0, 0],
        " ": [0, 0, 0, 0, 0],
    }
    cursor_x = x
    for char in text:
        rows = glyphs.get(char, glyphs[" "])
        for row, bits in enumerate(rows):
            for column in range(5):
                if bits & (1 << (4 - column)):
                    for yy in range(scale):
                        for xx in range(scale):
                            blend_pixel(
                                cursor_x + column * scale + xx,
                                y + row * scale + yy,
                                color,
                                alpha,
                            )
        cursor_x += 6 * scale


for y in range(HEIGHT):
    for x in range(WIDTH):
        index = (y * WIDTH + x) * 4
        gx = x / WIDTH
        gy = y / HEIGHT
        pulse = max(0, 1 - math.hypot(gx - 0.74, gy - 0.36) / 0.64)
        lower = max(0, 1 - math.hypot(gx - 0.2, gy - 0.92) / 0.7)
        grain = ((x * 17 + y * 31 + ((x * y) % 97)) % 41) - 20
        pixels[index] = clamp(16 + gx * 10 + pulse * 90 + lower * 18 + grain * 0.22)
        pixels[index + 1] = clamp(22 + gy * 8 + pulse * 30 + lower * 10 + grain * 0.18)
        pixels[index + 2] = clamp(26 + (1 - gx) * 8 + pulse * 12 + lower * 4 + grain * 0.15)
        pixels[index + 3] = 255


for row in range(34):
    y = 35 + row * 29
    points = [
        (
            x,
            y + math.sin((x + row * 52) / 92) * 20 + math.cos(x / 177) * 11,
        )
        for x in range(-40, WIDTH + 41, 14)
    ]
    curve(points, (247, 244, 238), 0.035, 1)


nodes = [
    (130, 160, 10),
    (320, 230, 6),
    (520, 130, 9),
    (780, 260, 7),
    (1060, 170, 11),
    (1220, 360, 6),
    (180, 520, 7),
    (420, 680, 11),
    (660, 490, 6),
    (890, 620, 10),
    (1140, 760, 8),
    (1260, 610, 5),
    (260, 850, 6),
    (570, 850, 8),
    (810, 880, 5),
    (1010, 430, 6),
]

for index, node in enumerate(nodes):
    for other in nodes[index + 1 :]:
        distance = math.hypot(node[0] - other[0], node[1] - other[1])
        if distance <= 390:
            line(node[0], node[1], other[0], other[1], (247, 244, 238), max(0.06, 0.26 - distance / 1700), 1)

for index, (x, y, radius) in enumerate(nodes):
    fill_circle(x, y, radius + 20, (241, 90, 36), 0.22 if index % 3 == 0 else 0.12)
    fill_circle(x, y, radius, (241, 90, 36) if index % 4 == 0 else (247, 244, 238), 0.96)


wave_a = []
wave_b = []
for x in range(-80, WIDTH + 81, 8):
    y = 820 - 250 * math.sin((x + 110) / 480) + 62 * math.sin(x / 118)
    wave_a.append((x, y))
    wave_b.append((x, y + 35 + 24 * math.sin(x / 170)))

curve(wave_a, (241, 90, 36), 0.74, 8)
curve(wave_b, (247, 244, 238), 0.35, 1)

block_text("REACT", 88, 112, 5, (247, 244, 238), 0.36)
block_text("AI WORKFLOWS", 905, 112, 4, (247, 244, 238), 0.34)
block_text("MOBILE", 1120, 700, 4, (247, 244, 238), 0.32)
block_text("TYPE-SAFE", 260, 760, 4, (247, 244, 238), 0.3)


raw = bytearray()
for y in range(HEIGHT):
    raw.append(0)
    row_start = y * WIDTH * 4
    raw.extend(pixels[row_start : row_start + WIDTH * 4])


def png_chunk(chunk_type: bytes, data: bytes) -> bytes:
    return (
        struct.pack(">I", len(data))
        + chunk_type
        + data
        + struct.pack(">I", zlib.crc32(chunk_type + data) & 0xFFFFFFFF)
    )


payload = b"".join(
    [
        b"\x89PNG\r\n\x1a\n",
        png_chunk(b"IHDR", struct.pack(">IIBBBBB", WIDTH, HEIGHT, 8, 6, 0, 0, 0)),
        png_chunk(b"IDAT", zlib.compress(bytes(raw), 9)),
        png_chunk(b"IEND", b""),
    ]
)

OUT.write_bytes(payload)
print(f"Wrote {OUT} ({len(payload)} bytes)")
