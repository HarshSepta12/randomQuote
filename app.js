const text = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');
const nextBtn = document.querySelector('.button-container');
const searchInput = document.querySelector('.search');
const searcBtn = document.querySelector('.search-btn');

// nextBtn.addEventListener('click', () =>{
//     // text.innerText = "The greatest glory in living lies not in never falling, but in rising every time we fall."
//     // author.innerText = "-Nelson Mandela"
// })
const fetchQuote =  async() =>{
    nextBtn.addEventListener('click', async ()=>{

    const api = await fetch(`https://api.quotable.io/random`);
    
    const randomQuote = await api.json()
    
    text.innerText = randomQuote.content
    author.innerText = randomQuote.author
})
}
fetchQuote()