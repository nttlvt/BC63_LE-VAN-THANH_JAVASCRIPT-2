document.getElementById("btnResult").onclick = function () {
  var nhapDiemChuan = document.getElementById("nhapDiemChuan").value;
  var khuVuc = document.getElementById("khuVuc").value * 1;
  var doiTuong = document.getElementById("doiTuong").value * 1;
  var nhapDiemMon1 = document.getElementById("nhapDiemMon1").value * 1;
  var nhapDiemMon2 = document.getElementById("nhapDiemMon2").value * 1;
  var nhapDiemMon3 = document.getElementById("nhapDiemMon3").value * 1;
  var kqRot = true;

  kqRot &=
    kiemTraDiem(nhapDiemMon1) &&
    kiemTraDiem(nhapDiemMon2) &&
    kiemTraDiem(nhapDiemMon3);

  if (kqRot) {
    var diemTong =
      nhapDiemMon1 + nhapDiemMon2 + nhapDiemMon3 + (khuVuc + doiTuong);
    var resultMessage =
      diemTong >= nhapDiemChuan
        ? "Bạn đã đậu. Tổng điểm: " + diemTong
        : "Bạn đã rớt. Tổng điểm: " + diemTong;
    document.getElementById("txtResult").innerHTML = resultMessage;
  } else {
    document.getElementById("txtResult").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  }
};

function kiemTraDiem(diem) {
  return !(diem <= 0);
}

document.getElementById("btnTinhTien").onclick = function () {
  var nhapTen = document.getElementById("nhapTen").value;
  var kw = document.getElementById("nhapKW").value * 1;
  var kw_1 = 500,
    kw_2 = 650,
    kw_3 = 850,
    kw_4 = 1100,
    kw_5 = 1300;
  var tinhTien = 0;

  if (kw > 0 && kw <= 50) {
    tinhTien = kw * kw_1;
  } else if (kw > 50 && kw <= 100) {
    tinhTien = 50 * kw_1 + (kw - 50) * kw_2;
  } else if (kw > 100 && kw <= 200) {
    tinhTien = 50 * kw_1 + 50 * kw_2 + (kw - 100) * kw_3;
  } else if (kw > 200 && kw <= 350) {
    tinhTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (kw - 200) * kw_4;
  } else if (kw > 350) {
    tinhTien =
      50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (kw - 350) * kw_5;
  } else {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
    return;
  }

  tinhTien = new Intl.NumberFormat("vn-VN").format(tinhTien);
  document.getElementById("txtTienDien").innerHTML =
    "Họ tên: " + nhapTen + "; Tiền điện: " + tinhTien;
};

document.getElementById("btnThue").onclick = function () {
  var nhapHoTen = document.getElementById("nhapHoTen").value;
  var luong =
    document.getElementById("nhapLuong").value * 1 -
    4e6 -
    16e5 * document.getElementById("soNguoiPhuThuoc").value * 1;
  var tinhThue = 0;
  if (luong > 0 && luong <= 6e7) {
    tinhThue = 0.05 * luong;
  } else if (luong > 6e7 && luong <= 12e7) {
    tinhThue = 0.1 * luong;
  } else if (luong > 12e7 && luong <= 21e7) {
    tinhThue = 0.15 * luong;
  } else if (luong > 21e7 && luong <= 384e6) {
    tinhThue = 0.2 * luong;
  } else if (luong > 384e6 && luong <= 624e6) {
    tinhThue = 0.25 * luong;
  } else if (luong > 624e6 && luong <= 96e7) {
    tinhThue = 0.3 * luong;
  } else if (luong > 96e7) {
    tinhThue = 0.35 * luong;
  } else {
    alert("Số tiền thu nhập không hợp lệ");
    return;
  }

  tinhThue = new Intl.NumberFormat("vn-VN").format(tinhThue);
  document.getElementById("txtThue").innerHTML =
    "Họ tên: " +
    nhapHoTen +
    "; Tiền thuế thu nhập cá nhân: " +
    tinhThue +
    " VND";
};

function disableInput() {
  var khachHang = document.getElementById("khachHang").value;
  document.getElementById("soKetNoi").style.display =
    khachHang === "doanhNghiep" ? "block" : "none";
}

document.getElementById("btnTinhTienCap").onclick = function () {
  var khachHang = document.getElementById("khachHang").value;
  var maKhachHang = document.getElementById("maKhachHang").value;
  var SoKenh = document.getElementById("nhapSoKenh").value;
  var soKetNoi = document.getElementById("soKetNoi").value;
  var soTienThanhToan = 0;

  if (khachHang === "doanhNghiep") {
    soTienThanhToan = calculateTotal(15, 75, 50, SoKenh, soKetNoi, 5);
  } else if (khachHang === "nhaDan") {
    soTienThanhToan = calculateTotal(4.5, 20.5, 7.5, SoKenh, 0, 0);
  } else {
    alert("Hãy chọn loại khách hàng");
    return;
  }

  document.getElementById("txtTienCap").innerHTML =
    "Mã khách hàng: " +
    maKhachHang +
    "; Tiền cáp: " +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(soTienThanhToan);
};
function calculateTotal(a, b, c, u, d, l) {
    var total = a + b + c * u;
  
    if (d > 10) {
      total += (d - 10) * l;
    }
  
    return total;
  }
