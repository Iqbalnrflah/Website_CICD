function ubahTampilan() {
    const judul = document.getElementById("judul");

    judul.innerHTML = "Tampilan Berubah 😎";

    // ubah background random
    const warna = ["#ff9a9e", "#a18cd1", "#fbc2eb", "#fad0c4"];
    const random = warna[Math.floor(Math.random() * warna.length)];

    document.body.style.backgroundColor = random;
}