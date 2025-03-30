document.addEventListener('DOMContentLoaded', () => {
    // Logika untuk thr.html
    const form = document.getElementById('thrForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const method = document.getElementById('method').value;
            console.log('Method selected:', method); // Debug 1: cek metode dipilih
            localStorage.setItem('thrMethod', method);
            console.log('Stored in localStorage:', localStorage.getItem('thrMethod')); // Debug 2: cek tersimpan
            window.location.href = 'success.html';
        });
    }

    // Logika untuk success.html
    const paymentDesc = document.getElementById('paymentDesc');
    if (paymentDesc) {
        console.log('success.html loaded'); // Debug 3: cek halaman terbuka
        displayPaymentInfo();
    }
});

function displayPaymentInfo() {
    const method = localStorage.getItem('thrMethod');
    console.log('Retrieved method:', method); // Debug 4: cek metode terambil
    const paymentDesc = document.getElementById('paymentDesc');
    const paymentQr = document.getElementById('paymentQr');
    const paymentNumber = document.getElementById('paymentNumber');

    if (method) {
        switch (method) {
            case 'qris':
                paymentDesc.textContent = 'Langsung transfer saja broo🤑!!!';
                paymentQr.src = 'qris.jpg'; // Ganti dengan QRIS asli
                paymentNumber.textContent = '';
                break;
            case 'dana':
                paymentDesc.textContent = 'Langsung transfer saja broo🤑!!!';
                paymentQr.src = 'dana.jpg'; // Ganti dengan QR Dana asli
                paymentNumber.textContent = '0882-1098-2908'; // Ganti dengan nomor Dana kamu
                break;
            case 'gopay':
                paymentDesc.textContent = 'Langsung transfer saja broo🤑!!!';
                paymentQr.src = 'gopay.jpg'; // Ganti dengan QR GoPay asli
                paymentNumber.textContent = '0882-1098-2908'; // Ganti dengan nomor GoPay kamu
                break;
        }
    } else {
        paymentDesc.textContent = 'Metode pembayaran tidak ditemukan.';
    }
}