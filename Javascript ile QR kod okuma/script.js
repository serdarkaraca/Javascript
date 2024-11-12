const qrReader = new Html5Qrcode("reader");

function onScanSuccess(decodedText, decodedResult) {
    document.getElementById("result").innerText = `Tarama sonucu: ${decodedText}`;
    qrReader.stop().catch(err => console.error("Durdurma hatası:", err));
}

qrReader.start(
    { facingMode: "environment" },
    {
        fps: 10,
        qrbox: { width: 250, height: 250 }
    },
    onScanSuccess,
    errorMessage => {
        console.warn("Hata:", errorMessage);
    }
).catch(err => {
    console.error("QR okuyucu başlatma hatası:", err);
});
