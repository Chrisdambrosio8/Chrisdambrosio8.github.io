const quotes = [
    "If you set your goals ridiculously high and its a failure, you will fail above everyone elses success. -James Cameron",
    "Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau",
    "Things work out best for those who make the best of how things work out. -John Wooden",
    "If you are not willing to risk the usual, you will have to settle for the ordinary. -Jim Rohn",
    "Stop chasing the money and start chasing the passion. -Tony Hsieh"
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");

function displayNextQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

displayNextQuote();

setInterval(displayNextQuote, 2000);


const rainbowButton = document.getElementById('rainbow-button');
const rainbow = document.getElementById('rainbow');
const potOfGold = document.getElementById('potOfGold');

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
rainbowButton.addEventListener('click', createRainbow);


function createRainbow() {
    rainbow.innerHTML = '';

    colors.forEach((color, index) => {
        setTimeout(() => {
            const stripe = document.createElement("div");
            stripe.className = 'stripe';
            stripe.style.backgroundColor = color;
            rainbow.appendChild(stripe);


            if (index === colors.length - 1) {
                setTimeout(() => {
                    potOfGold.style.display = 'block';
                }, 500); // Show the pot of gold after all strips are added
            }
        }, 500 * index);
    });

    document.body.appendChild(rainbowContainer);
}

rainbowButton.addEventListener("click", createRainbow);

