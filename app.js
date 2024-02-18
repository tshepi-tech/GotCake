const companies = [
	{
		id: 0,
		name: "Playbake",
		city: "Malmö",
		quote: "Highly recommend this place",
		image: "./images/playbake.jpg",
		contact: "https://playbake.se/",
	},
	{
		id: 1,
		name: "Liptha's cake butik ",
		city: "Lund",
		quote: "Tasty and delicious with perfect sugar",
		image: "./images/Liptha.jpeg",
		contact: "https://www.facebook.com/lipthascakebutik",
	},
	{
		id: 2,
		name: "CocoDrip",
		city: "Malmö",
		quote: "Love! Always buy from there",
		image: "./images/Cocodrip.jpeg",
		contact: "https://cocodrip.se",
	},
	{
		id: 3,
		name: "The cakery",
		city: "Malmö",
		quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "./images/cakery.jpeg",
		contact: "https://www.instagram.com/thecakery1?igsh=ODA1NTc5OTg5Nw==",
	},
	{
		id: 4,
		name: "Patisserie.elfie",
		city: "Arlöv",
		quote: "Jess creations are amazing",
		image: "./images/Elfie.jpeg",
		contact: "https://www.instagram.com/patisserie.elfie?igsh=ODA1NTc5OTg5Nw==",
	},
	{
		id: 5,
		name: "Beans & Tales café Malmö",
		city: "Malmö",
		quote: "vegan and gluten-free options",
		image: "./images/Beanstales.jpeg",
		contact: "https://www.instagram.com/beansandtales?igsh=ODA1NTc5OTg5Nw==",
	},
	{
		id: 6,
		name: "Bomm Bolo Konfektyr",
		city: "Svedala",
		quote: "Cakes are from heaven",
		image: "./images/BommBolo.jpeg",
		contact: "https://www.instagram.com/bommbolo?igsh=ODA1NTc5OTg5Nw==",
	},
	{
		id: 7,
		name: "dinTårta",
		city: "Everywhere",
		quote: "So nice",
		image: "./images/DinTarta.jpeg",
		contact: "https://dintarta.se",
	},
	{
		id: 8,
		name: "Sweet box & smash cake",
		city: "Malmö",
		quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "./images/Sweetbox.jpeg",
		contact:
			"https://www.instagram.com/sweet_surprise_malmo?igsh=ODA1NTc5OTg5Nw==",
	},
	{
		id: 9,
		name: "Baked by Ammna",
		city: "Malmö",
		quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "./images/Ammna.jpeg",
		contact: "https://bakedbyammna.com",
	},
	{
		id: 10,
		name: "Cake to take",
		city: "Arlöv",
		quote: "Really tasty and beautiful cake ",
		image: "./images/Caketotake.jpeg",
		contact: "https://www.instagram.com/caketotakesweden?igsh=ODA1NTc5OTg5Nw==",
	},
	{
		id: 11,
		name: "Delights",
		city: "Lund",
		quote: "makes amazing cakes",
		image: "./images/delights.jpeg",
		contact: "https://www.instagram.com/delightslund?igsh=ODA1NTc5OTg5Nw==",
	},
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
	let displayCompanies = companies
		.map(function (item) {
			return `<article class="menu-item">
					<img src=${item.image} alt=${item.name} class="photo" width="200" height="200"/>
					<div class="item-info">
						<header>
							<h4>${item.name}</h4>
							<h4>${item.city}</h4>
						</header>
						<p class="item-text">
							${item.quote}
						</p>
						<br />
						<a href=${item.contact}>Contact</a>
					</div>
				</article>`;
		})
		.join("");
	sectionCenter.innerHTML = displayCompanies;
});
