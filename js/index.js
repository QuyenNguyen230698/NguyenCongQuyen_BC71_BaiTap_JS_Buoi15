//Bài tập quản lý tuyển sinh

function hienThiKetQua(number) {
  document.getElementById("trungBinh").innerHTML = number + " Điểm";
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
  var sum =
    avg * 1 +
    khuVucA * 1 +
    khuVucB * 1 +
    khuVucC * 1 +
    khuVucX * 1 +
    doiTuong1 * 1 +
    doiTuong2 * 1 +
    doiTuong3 * 1 +
    doiTuong0 * 1;
  var ketQua = sum * 1;
  console.log("🚀 ~ ketQua:", ketQua);
  hienThiKetQua(ketQua);
}
//Bài tập tính tiền điện

function tinhTienDien() {
  var nhapKwDien = document.getElementById("kw").value * 1;
  console.log("🚀 ~ tinhTienDien ~ nhapKwDien:", nhapKwDien);
  var kwPriceOne = null;
  var kwPriceTwo = null;
  var kwPriceThree = null;
  var kwPriceFour = null;
  var kwPriceFive = null;
  var total = null;
  if (nhapKwDien > 0 && nhapKwDien <= 50) {
    var kwPriceOne = 500;
    var total = nhapKwDien * kwPriceOne;
    console.log("🚀 ~ tinhTienDien ~ total:", total);
  } else if (nhapKwDien > 50 && nhapKwDien <= 100) {
    var kwPriceOne = 500;
    var kwPriceTwo = 650;
    var total = 50 * kwPriceOne + (nhapKwDien - 50) * kwPriceTwo;
    console.log("🚀 ~ tinhTienDien ~ total:", total);
  } else if (nhapKwDien > 100 && nhapKwDien <= 200) {
    var kwPriceOne = 500;
    var kwPriceTwo = 650;
    var kwPriceThree = 850;
    var total =
      50 * kwPriceOne + 50 * kwPriceTwo + (nhapKwDien - 100) * kwPriceThree;
    console.log("🚀 ~ tinhTienDien ~ total:", total);
  } else if (nhapKwDien > 200 && nhapKwDien <= 350) {
    var kwPriceOne = 500;
    var kwPriceTwo = 650;
    var kwPriceThree = 850;
    var kwPriceFour = 1100;
    var total =
      50 * kwPriceOne +
      50 * kwPriceTwo +
      100 * kwPriceThree +
      (nhapKwDien - 200) * kwPriceFour;
    console.log("🚀 ~ tinhTienDien ~ total:", total);
  } else {
    var kwPriceOne = 500;
    var kwPriceTwo = 650;
    var kwPriceThree = 850;
    var kwPriceFour = 1100;
    var kwPriceFive = 1300;
    var total =
      50 * kwPriceOne +
      50 * kwPriceTwo +
      100 * kwPriceThree +
      150 * kwPriceFour +
      (nhapKwDien - 350) * kwPriceFive;
    console.log("🚀 ~ tinhTienDien ~ total:", total);
  }
  document.getElementById("kqTienDien").style.display = 'block';
  document.getElementById("kqTienDien").innerHTML =
    total + " VND / " + nhapKwDien + " Kw";
}
//Bài tập tính thuế thu nhập cá nhân

function tinhTienThue() {
  var tongThuNhapNam = document.getElementById("thue").value * 1;
  console.log("🚀 ~ tinhTienThue ~ tongThuNhapNam:", tongThuNhapNam)
  var ngPhuThuoc = document.getElementById("phuThuoc").value * 1;
  console.log("🚀 ~ tinhTienThue ~ ngPhuThuoc:", ngPhuThuoc)
  var luongCoBan = 4;
  var thueNgPhuThuoc = 1.6;
  var thueSuat = null;
  if (tongThuNhapNam > 1 && tongThuNhapNam <= 60) {
    var thueSuat = 0.05;
  } else if (tongThuNhapNam > 60 && tongThuNhapNam <= 120){
    var thueSuat = 0.1;
  } else if (tongThuNhapNam > 120 && tongThuNhapNam <= 210){
    var thueSuat = 0.15;
  } else if (tongThuNhapNam > 210 && tongThuNhapNam <= 384){
    var thueSuat = 0.2;
  } else if (tongThuNhapNam > 384 && tongThuNhapNam <= 624){
    var thueSuat = 0.25;
  } else if (tongThuNhapNam > 624 && tongThuNhapNam <= 960){
    var thueSuat = 0.3;
  } else {
    var thueSuat = 0.35;
  }
var thuNhapChiuThue = ((tongThuNhapNam - luongCoBan - (ngPhuThuoc*thueNgPhuThuoc)) * thueSuat) * 1000000;
  console.log("🚀 ~ tinhTienThue ~ thuNhapChiuThue:", thuNhapChiuThue)
  
  //xuat KQ
  document.getElementById("kqTienThue").style.display = 'block';
  document.getElementById("kqTienThue").innerHTML = thuNhapChiuThue.toLocaleString()+ " VNĐ";
}

//Bài tập tính tiền cáp


function khachHang() {
    var moHinh = document.querySelector('input[name="cabel"]:checked').value;
    
    if (moHinh == "tuNhan") {
        document.getElementById("tienCapNhaDan").style.display = 'block';
        document.getElementById("tienCapDoanhNghiep").style.display = 'none';
    } else {
        document.getElementById("tienCapDoanhNghiep").style.display = 'block';
        document.getElementById("tienCapNhaDan").style.display = 'none';
    }
}

function tinhTienCap() {
    var moHinh = document.querySelector('input[name="cabel"]:checked').value;
    var soKetNoiDoanhNghiep = document.getElementById("soKetNoi").value * 1;
    var ketNoiDau = 0;
    var ketNoiHai = 0;

    if (moHinh == "tuNhan") {
        var tienThueTuNhan = 32.5;
        document.getElementById("kqTienCap").innerHTML = tienThueTuNhan.toLocaleString() + " $";
    } else if (soKetNoiDoanhNghiep <= 10) {
        var ketNoiDau = 7.5;
        var ketNoiHai = 5;
        var tienThueDoanhNghiep = ketNoiDau * soKetNoiDoanhNghiep;
        document.getElementById("kqTienCap").innerHTML = tienThueDoanhNghiep.toLocaleString() + " $";
    } else {
        var ketNoiDau = 7.5;
        var ketNoiHai = 5;
        var tienThueDoanhNghiep = ketNoiDau * 10 + (soKetNoiDoanhNghiep - 10) * ketNoiHai;
        document.getElementById("kqTienCap").innerHTML = tienThueDoanhNghiep.toLocaleString() + " $";
    }
    document.getElementById("kqTienCap").style.display = 'block';
}