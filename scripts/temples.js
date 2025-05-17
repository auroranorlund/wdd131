const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©<span>${today.getFullYear()}</span>`;
let lastModif = document.querySelector('#lastModified');
lastModif.innerHTML = `${new Date(document.lastModified)}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});