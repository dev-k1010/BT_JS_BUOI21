// Khung object Sinh viên
function SinhVien(maSV, tenSV, matKhauSV, emailSV, toan, ly, hoa) {
  this.ma = maSV;
  this.ten = tenSV;
  this.matKhau = matKhauSV;
  this.email = emailSV;
  this.toan = toan;
  this.ly = ly;
  this.hoa = hoa;
  this.tinhDTB = function () {
    var dtb = (this.toan + this.ly + this.hoa) / 3;
    return dtb;
  };
}
