// Kiểm tra chuỗi rỗng
function ktraRong(value, idErr, message) {
  //   var index = dssv.findIndex(function (item) {
  //     return item[key] == value;
  //   });
  if (value != "") {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = message;
    return false;
  }
}
// Kiểm tra trùng lặp
function ktraTrung(value, idErr, dssv, message, key) {
  var index = dssv.findIndex(function (item) {
    return item[key] == value;
  });
  // -1: không tìm thấy
  if (index == -1) {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = message;
    return false;
  }
}
// Validation Mã
// function ktraMa(value, idErr, message) {
//   var validation = /^\d{4,6}$/;
//   if (value.match(validation)) {
//     document.getElementById(idErr).innerText = "";
//     return true;
//   } else {
//     document.getElementById(idErr).innerText = message;
//     return false;
//   }
// }
