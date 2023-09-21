// tạo array dssv chứa các object sv
var dssv = [];

// tách biến const
const DSSV_LOCAL = "DSSV_LOCAL";

// render lại data từ localStorage khi user reload
var dataJSON = localStorage.getItem(DSSV_LOCAL);

//convert từ JSON sang array
// kiểm tra storage có dữ liệu k trước khi render
if (dataJSON != null) {
  dssv = JSON.parse(dataJSON).map(function (sv) {
    return new SinhVien();
  });
  renderDSSV(dssv);
}
// Thêm sv
function themSV() {
  var sv = thongTinTuForm();

  // validate dữ liệu trước khi thêm
  // && chỉ 1 trong 2 được hiện
  var isValidate =
    ktraRong(sv.ma, "spanMaSV", "Vui lòng nhập") &&
    ktraTrung(sv.ma, "spanMaSV", dssv, "Mã sinh viên đã tồn tại", "ma");
  // &&ktraMa(sv.ma, "spanMaSV", "Mã sinh viên có 4-6 số")

  isValidate &=
    ktraRong(sv.email, "spanEmailSV", "Vui lòng nhập") &&
    ktraTrung(sv.email, "spanEmailSV", dssv, "Email đã tồn tại", "email");

  isValidate &=
    ktraRong(sv.ten, "spanTenSV", "Vui lòng nhập") &
    ktraRong(sv.matKhau, "spanMatKhau", "Vui lòng nhập") &
    ktraRong(sv.toan, "spanToan", "Vui lòng nhập") &
    ktraRong(sv.ly, "spanLy", "Vui lòng nhập") &
    ktraRong(sv.hoa, "spanHoa", "Vui lòng nhập");

  if (!isValidate) {
    return;
  }

  dssv.push(sv);

  renderDSSV(dssv);

  // localStorage: chỉ lưu được dữ liệu là JSON
  // json stringtify: biến đổi array thành JSON
  // json parse:đưa JSON vào local(array->JSON), rồi lấy dữ liệu ra(JSON->aray)

  // convert array thành json để lưu xuống Local
  var dataJson = JSON.stringify(dssv);

  // lưu json vào localStorage-> user load trangg bị mất dữ liệu
  localStorage.setItem(DSSV_LOCAL, dataJson);
}
