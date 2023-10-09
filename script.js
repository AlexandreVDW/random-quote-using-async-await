async function fetchQuote() {
    try {
        const response = await fetch('https://thatsthespir.it/api');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

function updateQuote() {
    fetchQuote().then(data => {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <p class="quote">${data.quote}</p>
            <img class="picture" src="${data.photo}">
            <div class="author">
            <h2 class="Name">${data.author}</h2>
            <p class="total">${data.total_quotes} quotes</p>
            </div>
            <a class="link" href="${data.permalink}">Link of the api</a>
        `;
    });
}

const button = document.querySelector('button');
button.addEventListener('click', updateQuote);

// Initial quote
updateQuote();
