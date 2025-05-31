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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	templeName: "San Diego California",
	location: "San Diego, California, United States",
	dedicated: "1993, April, 25",
	area: 72000,
	imageUrl: "https://www.churchofjesuschrist.org/imgs/24900200dc5b6e08ffc846163558983bbee24b30/full/1920%2C/0/default",
  },
  {
	templeName: "Paris France",
	location: "Paris, France",
	dedicated: "2017, May, 21",
	area: 44175,
	imageUrl: "https://www.churchofjesuschrist.org/imgs/bc89f1767a767ab8490d5c6a33cabf651d577b47/full/1920%2C/0/default",
  },
  {
	templeName: "Newport Beach California",
	location: "Newport Beach, California, United States",
	dedicated: "2005, August, 28",
	area: 17800,
	imageUrl: "https://www.churchofjesuschrist.org/imgs/8f096f54905b6ce2dc54bd50aaafe6f0905ad970/full/1920%2C/0/default"
  }

];

function createTempleCard(filteredTemples) {
  document.querySelector("main div").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("figure");
		let img = document.createElement("img");
		let data = document.createElement("figcaption");

		data.innerHTML = `<h3>${temple.templeName}</h3>
		<p><span class="label">Location:</span> ${temple.location}</p>
		<p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
		<p><span class="label">Area:</span> ${temple.area} sq ft</p>`;

		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

		card.appendChild(img);
		card.appendChild(data);
		document.querySelector("main div").appendChild(card);
		
	})
}

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
  createTempleCard(temples);
})
oldLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900));
})
newLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000));
})
largeLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
})
smallLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
})