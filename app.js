const content = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');
const nextBtn = document.querySelector('.button-container');

// Function to fetch and display a random quote
const fetchAndDisplayQuote = async () => {
    const response = await fetch('https://type.fit/api/quotes');
    const quotes = await response.json();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    content.innerText = randomQuote.text;
    author.innerText = randomQuote.author || 'Unknown';
    console.log(quotes)
};

// Add event listener to the button
nextBtn.addEventListener('click', fetchAndDisplayQuote);

// Display a random quote initially
fetchAndDisplayQuote();
