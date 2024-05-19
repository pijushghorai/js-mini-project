let qrInput = document.querySelector("#qr-input");
let qrCode = document.querySelector("#qr-code");

function qrGenaretor() {
  if (qrInput.value.length > 0) {
    qrCode.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrInput.value;
    qrCode.style.border = "1px solid #808080";
    document.querySelector(".download-qr").style.display = "block";
  } else {
    qrInput.classList.add("erorr");
    qrInput.style.border = "1px solid red";
    setTimeout(() => {
      qrInput.classList.remove("erorr");
      qrInput.style.border = "";
    }, 1000);
    document.querySelector(".download-qr").style.display = "none";
  }
}

const downloadLink = document.querySelectorAll("[data-download]");
downloadLink.forEach((button) => {
  const id = button.dataset.download;
  button.addEventListener("click", () => {
    const image = document.getElementById(id);
    if (image && image.src) {
      const a = document.createElement("a");
      a.href = image.src;
      a.download = "qrcode.png";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert("No QR code generated yet.");
    }
  });
});

document.querySelector("#generatebtn").addEventListener("click", qrGenaretor);
