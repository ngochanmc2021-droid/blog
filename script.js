// Danh sách 22 lá bài Ẩn Chính (Major Arcana)
const tarotDeck = [
    { id: 0, name: 'The Fool', vi: 'Chàng Khờ' },
    { id: 1, name: 'The Magician', vi: 'Nhà Ảo Thuật' },
    { id: 2, name: 'The High Priestess', vi: 'Nữ Tư Tế' },
    { id: 3, name: 'The Empress', vi: 'Nữ Hoàng' },
    { id: 4, name: 'The Emperor', vi: 'Hoàng Đế' },
    { id: 5, name: 'The Hierophant', vi: 'Thầy Tư Tế' },
    { id: 6, name: 'The Lovers', vi: 'Tình Nhân' },
    { id: 7, name: 'The Chariot', vi: 'Chiến Xe' },
    { id: 8, name: 'Strength', vi: 'Sức Mạnh' },
    { id: 9, name: 'The Hermit', vi: 'Ẩn Sĩ' },
    { id: 10, name: 'Wheel of Fortune', vi: 'Vòng Quay May Mắn' },
    { id: 11, name: 'Justice', vi: 'Công Lý' },
    { id: 12, name: 'The Hanged Man', vi: 'Kẻ Treo' },
    { id: 13, name: 'Death', vi: 'Cái Chết' },
    { id: 14, name: 'Temperance', vi: 'Tiết Độ' },
    { id: 15, name: 'The Devil', vi: 'Ác Quỷ' },
    { id: 16, name: 'The Tower', vi: 'Tòa Tháp' },
    { id: 17, name: 'The Star', vi: 'Ngôi Sao' },
    { id: 18, name: 'The Moon', vi: 'Mặt Trăng' },
    { id: 19, name: 'The Sun', vi: 'Mặt Trời' },
    { id: 20, name: 'Judgement', vi: 'Phán Xét' },
    { id: 21, name: 'The World', vi: 'Thế Giới' }
];

// Link kho ảnh Tarot mới ổn định hơn
const IMG_BASE_URL = "https://raw.githubusercontent.com/ekelen/tarot-api/master/static/cards/";

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.getElementById('nav-' + sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function drawQuickCard() {
    const resultArea = document.getElementById('quick-result');
    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    const cardImgId = randomCard.id < 10 ? `m0${randomCard.id}` : `m${randomCard.id}`;
    const imgUrl = `${IMG_BASE_URL}${cardImgId}.jpg`;

    resultArea.innerHTML = `
        <div class="tarot-card">
            <img src="${imgUrl}" alt="${randomCard.name}">
            <p style="margin-top:10px; color:var(--gold); font-weight:bold;">${randomCard.vi}</p>
        </div>
    `;
}

function drawSpread(topic) {
    const resultArea = document.getElementById('spread-result');
    resultArea.innerHTML = "<p>Đang xào bài...</p>";

    setTimeout(() => {
        let shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 3);
        
        // Cấu trúc HTML mới giúp tiêu đề căn giữa
        resultArea.innerHTML = `
            <div class="result-header">
                <h3>Thông điệp về: ${topic}</h3>
            </div>
            <div class="result-grid"></div>
        `;
        
        const container = resultArea.querySelector('.result-grid');
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
