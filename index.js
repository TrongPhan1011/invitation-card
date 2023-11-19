var urlParams = new URLSearchParams(window.location.search);

// Đặt giá trị mới cho tham số 'param'
const name = urlParams.get("name");
const xungHo = urlParams.get("xungHo");

document.getElementById("nameParam").innerText = name;

document.getElementById("xungHoParam").innerText = xungHo;
