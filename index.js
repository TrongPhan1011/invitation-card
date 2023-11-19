var urlParams = new URLSearchParams(window.location.search);

// Đặt giá trị mới cho tham số 'param'
const name = urlParams.get("name");

document.getElementById("nameParam").innerText = name;
