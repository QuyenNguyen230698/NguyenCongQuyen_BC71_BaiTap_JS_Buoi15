//Bài tập quản lý tuyển sinh

function hienThiKetQua(number) {
  document.getElementById("trungBinh").innerHTML =
    number + " Điểm";
}

function tinhDiem() {
  var area = document.querySelector('input[name="selector"]:checked').value;
  var person = document.querySelector('input[name="doiTuong"]:checked').value;

  var math = document.getElementById("math").value * 1;
  var literature = document.getElementById("literature").value * 1;
  var english = document.getElementById("english").value * 1;

  var avg = (math + literature + english).toFixed(2);

  var khuVucA = 0;
  var khuVucB = 0;
  var khuVucC = 0;
  var khuVucX = 0;
  var doiTuong1 = 0;
  var doiTuong2 = 0;
  var doiTuong3 = 0;
  var doiTuong0 = 0;
  if (area == "areaA") {
    var khuVucA = 2;
  } else if (area == "areaB") {
    var khuVucB = 1;
  } else if (area == "areaC") {
    var khuVucC = 0.5;
  } else {
    var khuVucX = 0;
  }
  if (person == "perSon1") {
    var doiTuong1 = 2.5;
  } else if (area == "perSon2") {
    var doiTuong2 = 1.5;
  } else if (area == "perSon3") {
    var doiTuong3 = 1;
  } else {
    var doiTuong0 = 0;
  }
  var sum = avg*1 + khuVucA*1 + khuVucB*1 + khuVucC*1 + khuVucX*1 + doiTuong1*1 + doiTuong2*1 + doiTuong3*1 + doiTuong0*1;
  var ketQua = sum * 1;
  console.log("🚀 ~ ketQua:", ketQua)
  hienThiKetQua(ketQua)
}
//Bài tập tính tiền điện

//Bài tập tính thuế thu nhập cá nhân

//Bài tập tính tiền cáp
