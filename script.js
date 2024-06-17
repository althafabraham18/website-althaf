function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function contactWhatsApp() {
    var phoneNumber = ''; // Ganti dengan nomor telepon yang diinginkan
    var message = 'Halo, saya tertarik untuk menyewa jasa Anda.'; // Pesan yang ingin dikirim
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function contactUsViaWhatsApp() {
    var phoneNumber = ''; // Ganti dengan nomor telepon yang diinginkan
    var message = 'Halo, saya ingin menghubungi anda dan menanyakan Sesuatu.'; // Pesan yang ingin dikirim
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderFilterScript() {
    var phoneNumber = ''; // Ganti dengan nomor telepon yang diinginkan
    var message = 'Halo, saya tertarik untuk memesan jasa pasang Filter-Script. Mohon informasi lebih lanjut.'; // Pesan yang ingin dikirim
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderFixBugs() {
    var phoneNumber = ''; // Ganti dengan nomor telepon yang diinginkan
    var message = 'Halo, saya tertarik untuk menggunakan jasa Anda dalam memperbaiki bug. Mohon informasi lebih lanjut.'; // Pesan yang ingin dikirim
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderTextDraw() {
    var phoneNumber = ''; // Ganti dengan nomor telepon yang diinginkan
    var message = 'Halo, saya tertarik untuk memesan jasa pemasangan TextDraw Samp. Mohon informasi lebih lanjut.'; // Pesan yang ingin dikirim
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderMapping() {
    var phoneNumber = ''; // Ganti dengan nomor telepon yang diinginkan
    var message = 'Halo, saya tertarik untuk memesan jasa Pasang Mapping. Mohon informasi lebih lanjut.'; // Pesan yang ingin dikirim
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderFilterScript() {
    var phoneNumber = ''; // Ganti dengan nomor telepon yang diinginkan
    var message = 'Halo, saya tertarik untuk memesan Filter Script Anda. Mohon informasi lebih lanjut.'; // Pesan yang ingin dikirim
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderTextdraw() {
    var phoneNumber = ''; // Ganti dengan nomor telepon yang diinginkan
    var message = 'Halo, saya tertarik untuk memesan Textdraw Anda. Mohon informasi lebih lanjut.'; // Pesan yang ingin dikirim
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderGamemode() {
    var phoneNumber = ''; // Ganti dengan nomor telepon yang diinginkan
    var message = 'Halo, saya tertarik untuk memesan Gamemode Anda. Mohon informasi lebih lanjut.'; // Pesan yang ingin dikirim
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function removeHash() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    removeHash();
}

// Menghapus 'index.html' dari URL jika ada
if (window.location.pathname.endsWith('index.html')) {
    const newPath = window.location.pathname.replace('index.html', '');
    window.history.replaceState({}, '', newPath);
}
