const sneaksAPI = require('sneaks-api')
let sneaks = new sneaksAPI()

function searchShoes() {
    const searchInput = document.getElementById('searchInput').value;

    fetch(`/search?keyword=${searchInput}`)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error('Error:', error));
}

function displayResults(shoes) {
    const shoeResults = document.getElementById('shoeResults');
    shoeResults.innerHTML = '';

    shoes.forEach(shoe => {
        const shoeDiv = document.createElement('div');
        shoeDiv.classList.add('shoe');

        const img = document.createElement('img');
        img.src = shoe.image;
        shoeDiv.appendChild(img);

        const title = document.createElement('p');
        title.textContent = shoe.title;
        shoeDiv.appendChild(title);

        shoeResults.appendChild(shoeDiv);
    });
} 

document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const theme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Check user's theme preference and apply it
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}