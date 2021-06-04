// efek smooth scroll menggunakan vanilla
const pageScroll = (value) => {
    const elemenTujuan = document.getElementById(`${value}`);
    elemenTujuan.scrollIntoView({ behavior: 'smooth' });
};
// akhir efek scroll

// button click menggunakan DOM
const tombol = document.querySelector('.btn');

tombol.addEventListener('click', function () {
    alert('Terima kasih telah menghubungi kami!');
});
// akhir button click
