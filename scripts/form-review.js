const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©<span>${today.getFullYear()}</span>`;
let lastModif = document.querySelector('#lastModified');
lastModif.innerHTML = `${new Date(document.lastModified)}`;

const reviewsCounter = document.querySelector("#reviewsCompleted");

let numReviews = Number(window.localStorage.getItem("numReviews")) || 0;

numReviews++;

if (numReviews !== 1) {
    reviewsCounter.innerHTML = `${numReviews} reviews`;
} else {
    reviewsCounter.innerHTML = `${numReviews} review`;
}

localStorage.setItem("numReviews", numReviews);