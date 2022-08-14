const quote= document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote')

async function getQuotes() {
    const quotes = 'js/quotes.json'
    const res = await fetch (quotes)
    const data = await res.json();
    const rundomNum = getRundomNum(0,7);
    quote.textContent = data[`${rundomNum}`].ruText;
    author.textContent = data[`${rundomNum}`].ruAuthor
}


async function getQuotes1() {
    const quotes = 'js/quotes.json'
    const res = await fetch (quotes)
    const data = await res.json();
    const rundomNum = getRundomNum(0,7);
    quote.textContent = data[`${rundomNum}`].enText;
    author.textContent = data[`${rundomNum}`].enAuthor
}

if(leng.value=='ru'){
    getQuotes();
}
else if (leng.value=='en'){
    getQuotes1()
}

changeQuote.addEventListener('click',()=>{
    if(leng.value=='ru'){
    getQuotes();
    }
    else if (leng.value=='en'){
    getQuotes1()
    }
})
