//  Mục đích tệp: dùng để định nghĩa các chức năng và dễ quản lý cũng như update code

// Lấy thông tin từ form
function thongTinTuForm() {
  var maSV = document.getElementById("txtMaSV").value;
  var tenSV = document.getElementById("txtTenSV").value;
  var emailSV = document.getElementById("txtEmail").value;
  var matKhauSV = document.getElementById("txtPass").value;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var ly = document.getElementById("txtDiemLy").value * 1;
  var hoa = document.getElementById("txtDiemHoa").value * 1;
  // tạo object Sinh viên
  return new SinhVien(maSV, tenSV, matKhauSV, emailSV, toan, ly, hoa);
}
// render dữ liệu
function renderDSSV(dssv) {
  var contentHTML = "";
  // Duyệt mảng để update dữ liệu contentHTML
  for (var index = 0; index < dssv.length; index++) {
    var sv = dssv[index];
    // Tạo chuỗi
    var trString = `<tr>
      <td>${sv.ma}</td>
      <td>${sv.ten}</td>
      <td>${sv.email}</td>
      <td>${sv.tinhDTB()}</td>
      <td>
      <button class='btn btn-danger' onclick="xoaSv('${sv.ma}')">Xóa</button>
      <button class ='btn btn-warning' onclick="suaSv('${sv.ma}')">Sửa</button>
      </td>
      </tr>`;
    // Cộng dồn chuỗi tạo danh sách
    contentHTML += trString;
  }
  document.querySelector("#tbodySInhVien").innerHTML = contentHTML;
}

// xóa sv
function xoaSv(id) {
  // tìm vị trí index
  var index;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].ma == id) {
      index = i;
    }
  }
  //   xóa phần tử ở vi tri index
  dssv.splice(index, 1);
  renderDSSV(dssv);
}
// sửa sv
function suaSv(id) {
  var index = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  var sv = dssv[index];
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtPass").value = sv.matkhau;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;
}
