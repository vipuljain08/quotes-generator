const quoteContainer = document.getElementById('quote--container')
      quoteText = document.getElementById('quote')
      quoteAuthor = document.getElementById('author')
      tweetBtn = document.getElementById('tweet')
      newQuote = document.getElementById('new-quote')

const getRandomNum = () => Math.floor(Math.random() * 20)

async function getQuote() {
    const url = 'https://gist.githubusercontent.com/AbhishekChd/ab9949b618fcbf58ac84f9c8e88d6688/raw/90916f0d09a295eb5b2eea6c29a648e8c60b0e6f/5769a491e4b01190df7a9a70.json'

    try {
        const response = await fetch(url)
        const data = await response.json()
        const index = getRandomNum()
        quoteText.innerText = data[index].content
        quoteAuthor.innerText = data[index].author
    }
    catch(error) {
        console.log('Something error on this page.')
    }
}

function tweetCode() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank')
}

tweetBtn.addEventListener('click', tweetCode)
newQuote.addEventListener('click', getQuote)

getQuote()