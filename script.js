// Danh sách 78 lá bài với ID tương ứng kho ảnh trực tuyến
const tarotDeck = [
    const tarotDeck = [
    { id: 0, name: 'The Fool', vi: 'Chàng Khờ', image: 'https://tuvicaimenh.com/uploads/images/2022/06/image_750x_62a6f46a70565.jpg' }
];
    // ... bạn có thể thêm các lá Ẩn phụ nếu muốn, logic vẫn tương tự
];

// Link gốc kho ảnh Tarot chuẩn (Rider-Waite)
const IMG_BASE_URL = "https://raw.githubusercontent.com/the-fortuna-project/tarot-api/master/static/cards/";

// Logic chuyển trang SPA
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    document.getElementById('nav-' + sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Rút 1 lá nhanh (Trang chủ)
function drawQuickCard() {
    const resultArea = document.getElementById('quick-result');
    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    
    // Tự động tạo link ảnh dựa trên ID (m00.jpg, m01.jpg...)
    const cardImgId = randomCard.id < 10 ? `m0${randomCard.id}` : `m${randomCard.id}`;
    const imgUrl = `${IMG_BASE_URL}${cardImgId}.jpg`;

    resultArea.innerHTML = `
        <div class="tarot-card">
            <img src="${imgUrl}" alt="${randomCard.name}">
            <p style="margin-top:10px; color:var(--gold); font-weight:bold;">${randomCard.vi}</p>
        </div>
    `;
}

// Rút trải bài 3 lá
function drawSpread(topic) {
    const resultArea = document.getElementById('spread-result');
    resultArea.innerHTML = "<p>Đang xào bài...</p>";

    setTimeout(() => {
        let shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 3);
        
        resultArea.innerHTML = `<h3>Thông điệp về: ${topic}</h3><div class="result-area"></div>`;
        const container = resultArea.querySelector('.result-area');

        selected.forEach((card, i) => {
            const cardImgId = card.id < 10 ? `m0${card.id}` : `m${card.id}`;
            const imgUrl = `${IMG_BASE_URL}${cardImgId}.jpg`;

            container.innerHTML += `
                <div class="tarot-card">
                    <p><small>Lá ${i+1}</small></p>
                    <img src="${imgUrl}" alt="${card.name}">
                    <p style="color:var(--gold); font-weight:bold;">${card.vi}</p>
                </div>
            `;
        });
    }, 600);
}
