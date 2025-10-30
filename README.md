# Hướng dẫn làm bài

- Thời gian làm bài: 120 phút.
- Download [Repository](https://github.com/hoangnm-ndm/Midtest-Module-C-02) về máy của học viên và thực hiện code trực tiếp trong thư mục này.
- Sau khi làm bài xong, học viên được chấm bài tại chỗ.
- Trong quá trình làm bài, gỡ bỏ và không sử dụng các extensions có sử dụng AI như Tabnine, Github copilot, Codeium, v.v.
- Không mở nhiều cửa sổ VS Code hoặc các phần mềm không liên quan trong quá trình làm bài.
- Được phép mở các trang web lấy giao diện hoặc icons như tailwindCSS, bootstrap, boxicon, fontawesome, .v.v trong quá trình làm bài.

---

## Yêu cầu

- Xây dựng **hệ thống quản trị sản phẩm System Administration Products** sử dụng ReactJS, React Router, json-server bao gồm các tính năng sau:

## 1. Giao diện và routing (1 điểm)

- Xây dựng hệ thống định tuyến để dễ dàng điều hướng cho những tác vụ phía dưới.
- Xử lý route không tồn tại (404).
- Giao diện thân thiện và dễ sử dụng, có thể sử dụng CSS hoặc thư viện UI đơn giản.

## 2. Auth (3 điểm)

- Đăng ký vào hệ thống (bao gồm email, password, fullname). (1 điểm)
  - Role mặc định là `member` (student).
  - Đăng ký thành công chuyển sang trang đăng nhập.
  - Đăng ký thất bại, reset form và hiển thị lỗi.
- Đăng nhập vào hệ thống (bao gồm email, password). (1 điểm)
  - Đăng nhập thành công:
    - Nếu role là `admin`, chuyển vào trang quản lý khoá học của admin,
    - Nếu role là `member`, chuyển vào home **(lưu ý, không cần xây dựng nội dung cho trang home).**
  - Đăng nhập thất bại reset form và hiển thị lỗi.
  - Lưu trạng thái đăng nhập (token) và thông tin người dùng trong localStorage.
- Protected Route (xây dựng các tuyến đường được bảo vệ) (1 điểm):
  - Nếu role là `admin`, có thể thực hiện các tác vụ quản lý phía dưới đây.
  - Nếu role là `member`, chỉ hiện thị trang home sau khi đăng nhập.

**Validation:**

- `email`: phải đúng định dạng email.
- `password`: phải có ít nhất 6 ký tự.
- `fullname`: không được để trống và tối thiểu 6 ký tự.
- Trừ 0.5 điểm nếu không validation

---

## 3. Trang quản lý sản phẩm. (2đ)

- Danh sách sản phẩm dạng bảng, hiện thị các thông tin sau:
  - Tên sản phẩm
  - Giá
  - Hành động: Sửa, Xoá
- Xoá sản phẩm (0.5đ):
  - Hiển thị hộp thoại xác nhận xoá.
  - Xoá thành công, cập nhật lại danh sách sản phẩm.
- Nút thêm sản phẩm chuyển đến trang thêm sản phẩm:
  - Thêm thành công, quay lại trang danh sách.
- Nút sửa sản phẩm chuyển đến trang cập nhật sản phẩm:
  - Cập nhật thành công, quay lại trang danh sách.

**Validation:**

- `title`: không được để trống và tối thiểu 3 ký tự.
- `price`: phải là số lớn hơn hoặc bằng 0.
- `category`: phải chọn danh mục, danh mục được lấy từ `/categories`, nếu không có danh mục, không thể thêm/sửa sản phẩm. Khi thêm được danh mục, lưu `categoryId` vào trường `categoryId` của sản phẩm.
- `description`: Mô tả sản phẩm, không bắt buộc nhập.
- `thumbnail`: URL hình ảnh sản phẩm, không bắt buộc nhập.
- `stock`: số lượng trong kho, phải là số nguyên dương hoặc bằng 0.
- Trừ 0.5 điểm nếu không validation.

---

## 4. Trang quản lý danh mục (2đ)

- Danh sách danh mục dạng bảng, hiện thị các thông tin sau:
  - Tên danh mục
  - Mô tả
  - Hành động: Sửa, Xoá
- Xoá danh mục (0.5đ):
  - Hiển thị hộp thoại xác nhận xoá.
  - Nếu danh mục có sản phẩm, không cho xoá và hiển thị thông báo lỗi.
  - Gợi ý: cần gọi `/products?categoryId=` để kiểm tra danh mục có sản phẩm hay không.
  - Xoá thành công, cập nhật lại danh sách danh mục.
- Thêm danh mục (0.5đ):
  - Nút thêm danh mục chuyển đến trang thêm danh mục.
  - Thêm thành công, quay lại trang danh sách.
- Sửa danh mục (0.5đ):
  - Nút sửa danh mục chuyển đến trang cập nhật danh mục.
  - Cập nhật thành công, quay lại trang danh sách.

**Validation:**

- `title`: không được để trống và tối thiểu 3 ký tự.
- `slug`: không để trống và không chứa khoảng trắng.

---

## 5. Tính năng nâng cao (2 điểm)

- Có thể tìm sản phẩm theo tên sản phẩm (1đ).
- Có thể lọc sản phẩm theo danh mục (1đ).

---

## Quy ước tính điểm

- Tổng điểm: 10đ.
  - Giao diện và routing: 1đ
  - Auth: 3đ
  - Trang quản lý sản phẩm: 2đ
  - Trang quản lý danh mục: 2đ
  - Tính năng nâng cao: 2đ

---Hết---
