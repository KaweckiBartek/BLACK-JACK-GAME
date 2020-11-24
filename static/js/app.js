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
    cards: [
        '2C', '2D', '2H', '2S',
        '3C', '3D', '3H', '3S',
        '4C', '4D', '4H', '4S',
        '5C', '5D', '5H', '5S',
        '6C', '6D', '6H', '6S',
        '7C', '7D', '7H', '7S',
        '8C', '8D', '8H', '8S',
        '9C', '9D', '9H', '9S',
        '10C', '10D', '10H', '10S',
        '10JC', '10JD', '10JH', '10JS',
        '10QC', '10QD', '10QH', '10QS',
        '10KC', '10KD', '10KH', '10KS',
        'AC', 'AD', 'AH', 'AS'
    ],
    cardsMap: {
        '2C': 2, '2D': 2, '2H': 2, '2S': 2,
        '3C': 3, '3D': 3, '3H': 3, '3S': 3,
        '4C': 4, '4D': 4, '4H': 4, '4S': 4,
        '5C': 5, '5D': 5, '5H': 5, '5S': 5,
        '6C': 6, '6D': 6, '6H': 6, '6S': 6,
        '7C': 7, '7D': 7, '7H': 7, '7S': 7,
        '8C': 8, '8D': 8, '8H': 8, '8S': 8,
        '9C': 9, '9D': 9, '9H': 9, '9S': 9,
        '10C': 10, '10D': 10, '10H': 10, '10S': 10,
        '10JC': 10, '10JD': 10, '10JH': 10, '10JS': 10,
        '10QC': 10, '10QD': 10, '10QH': 10, '10QS': 10,
        '10KC': 10, '10KD': 10, '10KH': 10, '10KS': 10,
        'AC': [1, 11], 'AD': [1, 11], 'AH': [1, 11], 'AS': [1, 11]
    }
}


let {you, dealer, cards, cardsMap} = blackjackGame;

const hitSound = new Audio('static/blackjack_assets/sounds/swish.m4a')

document.querySelector("#blackjack-hit-button").addEventListener("click", blackjackHit);
document.querySelector("#blackjack-deal-button").addEventListener("click", blackjackDeal);

function blackjackHit() {
    let card = randomCard()
    console.log(card)
    showCard(card, you)
    updateScore(card, you)
    showScore(you)
    console.log(you.score)
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * cards.length)
    return cards[randomIndex]
}

function showCard(card, activePlayer) {
    if (activePlayer.score <=21){
    let cardImage = document.createElement("img");
    cardImage.src = `static/blackjack_assets/images/52 Cards PNG/${card}.png`;
    cardImage.style.width = "23%"
    cardImage.style.padding = "7px"
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }else {

    }
}

function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    yourImages.forEach((card) => card.remove());
    dealerImages.forEach((card) => card.remove());
    you.score = 0;
    dealer.score = 0;
    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color = 'white';
    document.querySelector('#dealer-blackjack-result').style.color = 'white';
}
function updateScore(card, activePlayer){
    // debugger
    if (card === 'AC' || card === 'AD' || card ==='AH' || card ==='AS') {
        if (activePlayer.score + cardsMap[card][1] <= 21) {
            activePlayer.score += cardsMap[card][1];
        } else {
            activePlayer.score += cardsMap[card][0];
        }
    } else {
        activePlayer.score += cardsMap[card];
    }
}

function showScore(activePlayer){
    if (activePlayer.score > 21){
        document.querySelector(activePlayer.scoreSpan).textContent = "BUST!";
        document.querySelector(activePlayer.scoreSpan).style.color = 'red';
    }else {
    document.querySelector(activePlayer.scoreSpan).textContent = activePlayer.score
    }
}

