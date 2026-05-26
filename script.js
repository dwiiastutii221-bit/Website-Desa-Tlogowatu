// Popup otomatis saat website pertama kali dibuka
alert("Selamat datang di Website Desa Tlogowatu");

// Menampilkan pesan di console (buat debugging / cek error)
console.log("Website berjalan dengan baik");


// ================= DOWNLOAD FLYER =================
function downloadFlyer(){

    // Menampilkan notifikasi bahwa file flyer berhasil didownload
    alert("Flyer berhasil didownload");

}


// ================= DOWNLOAD PDF =================
function downloadPDF(){

    // Menampilkan notifikasi bahwa file PDF berhasil didownload
    alert("Dokumen PDF berhasil didownload");

}


/* ================= JAM DIGITAL ================= */

function updateJam(){

    const now = new Date(); // ambil waktu saat ini

    let jam = now.getHours();     // ambil jam
    let menit = now.getMinutes();  // ambil menit
    let detik = now.getSeconds();  // ambil detik

    // tambahkan angka 0 di depan jika < 10 (biar rapi: 01, 02, dst)
    jam = jam < 10 ? "0" + jam : jam;
    menit = menit < 10 ? "0" + menit : menit;
    detik = detik < 10 ? "0" + detik : detik;

    // tampilkan ke elemen HTML
    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = menit;
    document.getElementById("detik").innerHTML = detik;


    /* ================= TANGGAL ================= */

    // array nama hari
    const hari = [
        "Minggu","Senin","Selasa",
        "Rabu","Kamis","Jumat","Sabtu"
    ];

    // array nama bulan
    const bulan = [
        "Januari","Februari","Maret",
        "April","Mei","Juni",
        "Juli","Agustus","September",
        "Oktober","November","Desember"
    ];

    // gabungkan jadi format: Senin, 25 Mei 2026
    const tanggal =
        hari[now.getDay()] + ", " +
        now.getDate() + " " +
        bulan[now.getMonth()] + " " +
        now.getFullYear();

    // tampilkan ke HTML
    document.getElementById("tanggal").innerHTML = tanggal;
}

// jalankan fungsi jam setiap 1 detik (real-time update)
setInterval(updateJam,1000);

// panggil pertama kali supaya langsung muncul tanpa delay
updateJam();


/* ================= ANIMASI SCROLL (SEJARAH) ================= */

document.addEventListener("scroll", function () {

    const sejarah = document.querySelector(".sejarah");

    // kalau elemen tidak ada, hentikan fungsi
    if (!sejarah) return;

    // posisi elemen dari atas layar
    const posisi = sejarah.getBoundingClientRect().top;

    // tinggi layar user
    const tinggiLayar = window.innerHeight;

    // kalau elemen sudah mendekati layar
    if (posisi < tinggiLayar - 100) {
        sejarah.classList.add("active");
    }

});

function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}
