const cards = [
    { name: "The Fool", meaning: "Sự khởi đầu mới, tự do, ngây thơ.", image: "images/fool.png" },
    { name: "The Magician", meaning: "Sức mạnh ý chí, khả năng, hành động.", image: "images/magician.png" },
    // Thêm danh sách 78 lá bài của bạn vào đây
];

function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    // Hiệu ứng lật bài đơn giản
    const cardImg = document.getElementById('tarot-card');
    cardImg.style.transform = "rotateY(180deg)";

    setTimeout(() => {
        cardImg.src = selectedCard.image;
        cardImg.style.transform = "rotateY(0deg)";
        
        document.getElementById('result').style.display = "block";
        document.getElementById('card-name').innerText = selectedCard.name;
        document.getElementById('card-meaning').innerText = selectedCard.meaning;
    }, 300);
}
