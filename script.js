// Danh sách 78 lá bài với ID tương ứng kho ảnh trực tuyến
const tarotDeck = [
    const tarotDeck = [
    { id: 0, name: 'The Fool', vi: 'Chàng Khờ', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m00.jpg' },
    { id: 1, name: 'The Magician', vi: 'Nhà Ảo Thuật', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m01.jpg' },
    { id: 2, name: 'The High Priestess', vi: 'Nữ Tư Tế', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m02.jpg' },
    { id: 3, name: 'The Empress', vi: 'Nữ Hoàng', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m03.jpg' },
    { id: 4, name: 'The Emperor', vi: 'Hoàng Đế', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m04.jpg' },
    { id: 5, name: 'The Hierophant', vi: 'Thầy Tư Tế', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m05.jpg' },
    { id: 6, name: 'The Lovers', vi: 'Tình Nhân', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m06.jpg' },
    { id: 7, name: 'The Chariot', vi: 'Chiến Xe', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m07.jpg' },
    { id: 8, name: 'Strength', vi: 'Sức Mạnh', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m08.jpg' },
    { id: 9, name: 'The Hermit', vi: 'Ẩn Sĩ', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m09.jpg' },
    { id: 10, name: 'Wheel of Fortune', vi: 'Vòng Quay May Mắn', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m10.jpg' },
    { id: 11, name: 'Justice', vi: 'Công Lý', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m11.jpg' },
    { id: 12, name: 'The Hanged Man', vi: 'Kẻ Treo', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m12.jpg' },
    { id: 13, name: 'Death', vi: 'Cái Chết', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m13.jpg' },
    { id: 14, name: 'Temperance', vi: 'Tiết Độ', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m14.jpg' },
    { id: 15, name: 'The Devil', vi: 'Ác Quỷ', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m15.jpg' },
    { id: 16, name: 'The Tower', vi: 'Tòa Tháp', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m16.jpg' },
    { id: 17, name: 'The Star', vi: 'Ngôi Sao', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m17.jpg' },
    { id: 18, name: 'The Moon', vi: 'Mặt Trăng', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m18.jpg' },
    { id: 19, name: 'The Sun', vi: 'Mặt Trời', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m19.jpg' },
    { id: 20, name: 'Judgement', vi: 'Phán Xét', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m20.jpg' },
    { id: 21, name: 'The World', vi: 'Thế Giới', image: 'https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/m21.jpg' }
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
