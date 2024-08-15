const catResult = document.getElementById("cat-result");
const catButton = document.getElementById("catButton");
const multiCatsButton = document.getElementById("multiCatsButton");
const catQty = document.getElementById("number");

catButton.addEventListener("click", getRandomCat);
multiCatsButton.addEventListener("click", getNumberOfCats);

function getRandomCat() {
  fetch("https://cataas.com/cat?json=true")
    .then((res) => res.json())
    .then((data) => {
      catResult.innerHTML = `<img src="https://cataas.com/cat?${data.url}"/>`;
    });
}

function getNumberOfCats() {
   fetch(`https://cataas.com/cat?json=true`)
   .then((res) => res.json())
   .then((data) => {
    let images = data.map(cat => `<img src="https://cataas.com/cat?${cat.id}"/>`);

     catResult.innerHTML = images;
   })};

function getRandomCat() {
    fetch("https://cataas.com/cat?json=true")
        .then((res) => res.json())
        .then((data) => {
            catResult.innerHTML = `<img src="https://cataas.com/cat?${data.url}"/>`;
        });
    }
