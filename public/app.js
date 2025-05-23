const btnMenu = document.querySelector(".logo__menu");
const menu = document.querySelector(".list__nav");

btnMenu.addEventListener("click", () => {
	menu.classList.toggle("active");
});

const allLinks = document.querySelectorAll(".item__nav");

for (const item of allLinks) {
	item.addEventListener("click", () => {
		menu.classList.toggle("active");
	});
}

const afficherBtn = document.querySelector(".btn__Afficher--plus");
const cards = [...document.querySelectorAll(".card__cafe")];

if (afficherBtn && cards.length > 0) {
	let currentItem = 4;

	for (let i = currentItem; i < cards.length; i++) {
		cards[i].style.display = "none";
	}

	afficherBtn.onclick = () => {
		for (let i = currentItem; i < currentItem + 4; i++) {
			if (cards[i]) {
				cards[i].style.display = "inline-block";
			}
		}
		currentItem += 4;

		if (currentItem >= cards.length) {
			afficherBtn.style.display = "none";
		}
	};
}
