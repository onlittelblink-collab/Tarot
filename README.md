# Oni Ethereal Tarot — Website

Website đơn trang (SPA) gồm 2 phần chính: **Học Tarot** (flashcard 78 lá theo
lăng kính tâm lý học Carl Jung) và **Trải Bài Thông Điệp** (bốc bài 1 hoặc 3 lá).

## Cách mở / triển khai

- **Xem nhanh:** mở trực tiếp `index.html` bằng trình duyệt (double-click).
  Toàn bộ dữ liệu bài được nạp sẵn trong `js/data.js` (không dùng `fetch`),
  nên chạy được ngay cả khi mở file trực tiếp, không cần server.
- **Triển khai thật:** upload nguyên thư mục này lên bất kỳ static hosting
  nào (Netlify, Vercel, GitHub Pages, hoặc hosting thường) — không cần backend.

## Cấu trúc thư mục

```
index.html            Toàn bộ cấu trúc trang (nav, hero, academy, reader, contact)
css/style.css          Design system (màu, font, hiệu ứng, responsive)
js/data.js             Dữ liệu 78 lá bài + lớp nghĩa Jungian (đã build sẵn)
js/app.js               Toàn bộ logic tương tác (flashcard, tìm kiếm, bốc bài)
assets/images/*.jpg     78 ảnh lá bài (bộ Rider-Waite-Smith cổ điển, public domain)
build_data.py           Script đã dùng để tạo js/data.js (tham khảo, không cần chạy lại)
```

## Ghi chú thiết kế quan trọng

- **Tên thương hiệu:** "Oni Ethereal Tarot" (theo lựa chọn của bạn).
- **Bảng màu:** void-navy `#050C1A` / frost-white `#E2E8F0` / ether-lilac
  `#F8F0FF` / slate-mist `#8A9EB8` — theo `design_tokens.json` bạn gửi.
- **Logo:** ảnh logo bạn gửi được dùng làm hình nền chìm (watermark) cố
  định, phủ xuyên suốt toàn trang (`css/style.css` → `.site-watermark`).
  Ở độ mờ 50% + blend "screen", chữ gốc trên logo không còn đọc được, chỉ
  còn hoạ tiết kim loại tribal — không xung đột với tên thương hiệu chính
  thức hiển thị bằng chữ trong nội dung.
- **Nghĩa 78 lá bài:** lấy 100% từ file `tarot_cards_jung.json` bạn cung
  cấp (bao gồm trường `meaning_jung`), không chỉnh sửa nội dung — chỉ
  chuẩn hoá ký tự gạch ngang dài "—" thành gạch ngang ngắn "-" cho đồng
  nhất với văn phong toàn trang. Xem `build_data.py` để biết chi tiết.
- **Văn phong trang:** tiêu đề, lời dẫn, 2 trích dẫn triết học (Carl Jung
  ở Academy, Friedrich Nietzsche ở Reader) và footer được viết lại đúng
  theo bản gốc bạn gửi. Riêng câu tiếng Đức của Nietzsche mình đã khôi
  phục lại đúng nguyên văn gốc ("Je mehr er hinauf in die Höhe und ins
  Helle will...") vì bản bạn dán có một vài từ bị lỗi gõ/dịch lẫn tiếng
  Việt vào; bản dịch tiếng Việt bạn gửi giữ nguyên không đổi.
- **Luồng 2 màn hình:** cả Academy và Reader giờ có màn hình dẫn nhập
  (tiêu đề + trích dẫn + nút "Kế Tiếp") hiện trước, bấm mới lộ ra nội
  dung học/trải bài chính — đúng yêu cầu.
- **Trải 3 lá** đổi tên thành "Trải 3 lá - Thông điệp cho hiện tại" với
  3 vị trí trung lập "Lá 1 / Lá 2 / Lá 3" (bỏ khung Quá khứ-Hiện tại-
  Định hướng nội tâm trước đó).
- **Font "Aldrich"** đang thay thế tạm cho **SVN Space Age**: font này
  không có trên Google Fonts, chỉ tải được từ các trang Việt hoá và ghi rõ
  "chỉ dùng cho mục đích cá nhân, dùng thương mại phải mua bản quyền gốc từ
  tác giả" - nên mình không tự tải về nhúng vào một website thương mại.
  Nếu bạn mua/sở hữu file font (.ttf/.otf/.woff2) hợp lệ, gửi file đó cho
  mình, mình sẽ nhúng bằng `@font-face` để thay Aldrich bằng đúng font gốc.
- **Chọn lá bằng con trỏ/chạm:** phần Trải Bài giờ hiển thị cả 78 lá úp
  (dùng ảnh `assets/cardback/card-back.jpg`) dàn thành một dải có thể kéo
  bằng chuột (desktop) hoặc vuốt bằng ngón tay (di động, dùng cuộn ngang
  gốc của trình duyệt). Chạm/nhấp vào lá nào sẽ chọn lá đó vào vị trí tiếp
  theo của kiểu trải đã chọn, đúng cơ chế "chọn theo trực giác" của tarot
  thật thay vì máy tự random hộ. Về "hiệu ứng real-time collaborative
  animation": mình hiểu đây là hiệu ứng chọn bài mượt, sống động, phản hồi
  tức thời - không phải tính năng nhiều người chơi cùng lúc qua mạng
  (multiplayer thật cần thêm backend/server, ngoài phạm vi một site tĩnh).
  Nếu ý bạn thực sự là multiplayer, nói mình biết để bàn phương án riêng.

## Nội dung dữ liệu

- **22 lá Bộ Tộc Ẩn Chính (Major Arcana):** viết riêng phần "archetype",
  "lớp nghĩa Jungian" và "câu hỏi phản chiếu" cho từng lá — theo đúng tinh
  thần chữa lành Jungian + hiện sinh trong yêu cầu ban đầu.
- **56 lá Bộ Tộc Ẩn Phụ (Minor Arcana):** giữ nguyên nghĩa xuôi/ngược,
  từ khoá, tình yêu/sự nghiệp/lời khuyên từ bộ dữ liệu bạn cung cấp, có
  thêm một dòng "lăng kính hiện sinh" theo từng nguyên tố (Gậy/Ly/Kiếm/Tiền).
- **Trải bài** chỉ dùng 2 kiểu (1 lá / 3 lá Quá khứ–Hiện tại–Định hướng nội
  tâm) đúng theo yêu cầu, có thể mở rộng thêm các kiểu trải khác nếu cần
  (dữ liệu 5 lá, Celtic Cross, trải quan hệ... đã có sẵn trong file gốc
  `tarot_spreads.json`, chưa được đưa vào giao diện).

## Việc có thể làm tiếp

- Thêm nội dung tĩnh về triết lý Jungian/hiện sinh (trang "Giới thiệu").
- Thêm form đặt lịch thật (hiện tại chỉ có nút liên kết Instagram/Facebook).
- Thêm các kiểu trải bài mở rộng (5 lá, Celtic Cross, trải quan hệ).
