let blackjackGame = {
    you: {
        scoreSpan: '#your-blackjack-result',
        div: '#your-box',
        score: 0,
    },
    dealer: {
        scoreSpan: '#dealer-blackjack-result',
        div: '#dealer-box',
        score: 0,
    },
    cards: ['2C', '2D', '2H', '2S',
        '3C', '3D', '3H', '3S',
        '4C', '4D', '4H', '4S',
        '5C', '5D', '5H', '5S',
        '6C', '6D', '6H', '6S',
        '7C', '7D', '7H', '7S',
        '8C', '8D', '8H', '8S',
        '9C', '9D', '9H', '9S',
        '10C', '10D', '10H', '10S',
        'JC', 'JD', 'JH', 'JS',
        'QC', 'QD', 'QH', 'QS',
        'KC', 'KD', 'KH', 'KS',
        'AC', 'AD', 'AH', 'AS']
}

let {you, dealer, cards} = blackjackGame;

const hitSound = new Audio('static/blackjack_assets/sounds/swish.m4a')

document.querySelector("#blackjack-hit-button").addEventListener("click", blackjackHit);
document.querySelector("#blackjack-deal-button").addEventListener("click", blackjackDeal);

function blackjackHit() {
    let card = randomCard()
    console.log(card)
    showCard(you)
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * cards.length)
    return cards[randomIndex]
}

function showCard(activePlayer) {
    let cardImage = document.createElement("img");
    cardImage.src = `static/blackjack_assets/images/52 Cards PNG/${randomCard()}.png`;
    cardImage.style.width = "23%"
    cardImage.style.padding = "7px"
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    yourImages.forEach((card) => card.remove());
    dealerImages.forEach((card) => card.remove());
}