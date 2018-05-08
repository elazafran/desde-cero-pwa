//cc7baf6c7a0b44d4814e926312bc07df
//https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc7baf6c7a0b44d4814e926312bc07df
const apikey = "cc7baf6c7a0b44d4814e926312bc07df"
const main = document.querySelector('main');
window.addEventListener('load', e => {
    updateNews();
});

async function updateNews() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc7baf6c7a0b44d4814e926312bc07df');
    const json = await res.json();
    main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article) {
    return `
    <div class="article">
    <a href="${article.url}">
      <h2>${article.title}</h2>
      <img src="${article.urlToImage}" alt="${article.title}">
      <p>${article.description}</p>
    </a>
  </div>
    `;
}//cc7baf6c7a0b44d4814e926312bc07df
//https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc7baf6c7a0b44d4814e926312bc07df
