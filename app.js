// HTML'den gerekli öğeleri seçiyoruz
const search = document.querySelector('.search'); // Arama kutusu
const input = document.querySelector('.input'); // Giriş kutusu
const btn = document.querySelector('.btn'); // Buton

// Butona tıklandığında çalışacak olay dinleyicisi
btn.addEventListener('click', () => {
    // Arama kutusunun "active" sınıfını açıp kapatıyoruz (değiştiriyoruz)
    search.classList.toggle("active");

    // Giriş kutusuna odaklanıyoruz, yani kullanıcıya metin girmesi için giriş kutusuna imleci yerleştiriyoruz
    input.focus();
})