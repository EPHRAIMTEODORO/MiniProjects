const quotes = [
  "Be yourself; everyone else is already taken.",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "So many books, so little time.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "A room without books is like a body without a soul."
]
const usedIndex = new Set()
const quoteTag = document.getElementById("quote")
function generateQuote(){
    if(usedIndex.size > quotes.length){
        usedIndex.clear
    }
    while(true){
        const randomIndex = Math.floor(Math.random()* quotes.length)
        if(usedIndex.has(randomIndex))continue

        const quote = quotes[randomIndex]
        quoteTag.innerHTML = quote;

        usedIndex.add(randomIndex)
        break
    }
    }
    