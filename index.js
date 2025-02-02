const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const request = input.value.trim();
  if (!request) {
    alert('enter key word');
    return;
  }
  fetch(
    `https://gnews.io/api/v4/search?q=${request}&lang=en&max=10&apikey=159ab06003a9adc30bd8aa2ea46eeba7`,
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const field = document.getElementById('field');
      field.innerHTML = '';
      console.log(data);
      data.articles.forEach((article) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.innerHTML = `
            <img src="${article.image}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}">Read more</a>
        `;
        field.appendChild(articleDiv);
      });
    })
    .catch((error) => {
      console.log(error);
      field.innerHTML = `
        <p>Error</p>
      `;
    });
  input.value = '';
});
