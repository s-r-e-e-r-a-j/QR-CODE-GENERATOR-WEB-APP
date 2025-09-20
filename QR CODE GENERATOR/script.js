// coded by Sreeraj

const downloadLink = document.querySelector(".download-link");
const qrImage = document.querySelector(".qr-image");
const generateBtn = document.querySelector(".generate-btn");
const input = document.querySelector(".input");

generateBtn.addEventListener("click", () => {
  const content = input.value.trim();
  if (!content) {
    alert("Please enter some text or URL.");
    return;
  }

  // Show QR image
  qrImage.style.display = "block";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(content)}`;

  // Fetch blob for download
  const api = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(content)}`;
  fetch(api)
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = "QR_Code.png";
    })
    .catch(err => {
      console.error("Error generating QR:", err);
      alert("Failed to generate QR code. Try again.");
    });
});
