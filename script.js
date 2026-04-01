// Danh sách 78 lá bài (Bạn có thể thêm đầy đủ vào đây)
const tarotDeck = [
    { id: 'the-fool', name: 'Chàng Khờ' },
    { id: 'the-magician', name: 'Nhà Ảo Thuật' },
    { id: 'the-high-priestess', name: 'Nữ Tư Tế' },
    { id: 'the-empress', name: 'Nữ Hoàng' },
    { id: 'the-emperor', name: 'Hoàng Đế' },
    // ... Thêm tiếp cho đủ 78 lá
];

// Logic chuyển trang SPA
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    document.getElementById('nav-' + sectionId).classList.add('active');
    window.scrollTo(0,0);
}

// Rút 1 lá nhanh tại trang chủ
function drawQuickCard() {
    const resultDiv = document.getElementById('quick-result');
    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    
    // Đường dẫn ảnh: images/tên-id.jpg
    const imgPath = `images/${randomCard.id}.jpg`;
    
    resultDiv.innerHTML = `
        <div class="card-item">
            <img src="${imgPath}" class="card-img" alt="${randomCard.name}" onerror="this.src='https://www.nghethuatbep.com/y-nghia-78-la-bai-tarot'">
            <p><strong>${randomCard.name}</strong></p>
        </div>
    `;
}

// Rút trải bài 3 lá
function drawSpread(topic) {
    const spreadDiv = document.getElementById('spread-result');
    spreadDiv.innerHTML = "Đang kết nối năng lượng...";
    
    setTimeout(() => {
        let shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 3);
        
        spreadDiv.innerHTML = `<h3>Chủ đề: ${topic}</h3><div class="result-display"></div>`;
        const innerDiv = spreadDiv.querySelector('.result-display');
        
        selected.forEach((card, i) => {
            innerDiv.innerHTML += `
                <div class="card-item">
                    <p><small>Lá ${i+1}</small></p>
                    <img src="images/${card.id}.jpg" class="card-img" onerror="this.src='https://placehold.co/200x350?text=Card+Image'">
                    <p><strong>${card.name}</strong></p>
                </div>
            `;
        });
    }, 500);
}
