# -*- coding: utf-8 -*-
"""
Build js/data.js truc tiep tu tarot_cards_jung.json do nguoi dung cung cap.
Khong chinh sua noi dung/nghia cua bat ky la bai nao - chi chuan hoa gach
ngang dai thanh gach ngang ngan (yeu cau van phong cua toan bo website)
va chuan hoa lai duong dan anh cho dung cau truc thu muc cua trang.
"""
import json

SRC = "/home/claude/oni-tarot-update/tarot_cards_jung.json"
OUT = "/home/claude/oni-tarot/js/data.js"


def fix_dash(value):
    if isinstance(value, str):
        return value.replace("\u2014", "-").replace("\u2013", "-")
    if isinstance(value, list):
        return [fix_dash(v) for v in value]
    if isinstance(value, dict):
        return {k: fix_dash(v) for k, v in value.items()}
    return value


with open(SRC, encoding="utf-8") as f:
    raw = json.load(f)

cards = raw["cards"]

for c in cards:
    for key, val in list(c.items()):
        c[key] = fix_dash(val)
    if c.get("image"):
        c["image"] = "assets/images/" + c["image"].split("/")[-1]

with open(OUT, "w", encoding="utf-8") as f:
    f.write("// Du lieu 78 la bai Oni Ethereal Tarot\n")
    f.write("// Nguon: tarot_cards_jung.json do nguoi dung cung cap - noi dung nghia\n")
    f.write("// (bao gom meaning_jung) duoc giu nguyen, chi chuan hoa ky tu gach ngang.\n")
    f.write("const TAROT_CARDS = ")
    f.write(json.dumps(cards, ensure_ascii=False, indent=2))
    f.write(";\n")

print("OK, wrote", OUT, "with", len(cards), "cards")
