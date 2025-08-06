"use strict";

// Navigation Variables
const navigation = document.getElementById("nav");
const navigationList = document.querySelectorAll("nav li a");
const menu = document.getElementById("menu");

window.scroll({
	top: 0,
	left: 0,
	behavior: "smooth",
});

// Nav Hamburger
menu.addEventListener("click", () => {
	navigation.style.setProperty("--childrenNumber", navigation.children.length);

	navigation.classList.toggle("active");
	menu.classList.toggle("active");
});

// console.log(navigationList);

navigationList.forEach((i) => {
	i.addEventListener("click", () => {
		navigation.classList.toggle("active");
		menu.classList.toggle("active");
	});
});

// Gallery Section
const model = document.createElement("div");
model.id = "click-view-gallery";
document.body.appendChild(model);

const images = document.querySelectorAll(".gallery-img");

// Load all images and click to gallery-img-active
images.forEach((image) => {
	image.addEventListener("click", () => {
		model.classList.add("gallery-img-active");
		const img = document.createElement("img");
		// console.log(img);
		const imgSource = image.src;
		img.src = imgSource;
		img.className = "model-img";

		// Remove pervious images repeating
		while (model.firstChild) {
			model.removeChild(model.firstChild);
		}
		model.appendChild(img);
		const closeBtn = document.createElement("div");
		closeBtn.className = "gallery-img-close-btn";
		model.appendChild(closeBtn);
	});
});

model.addEventListener("click", () => {
	model.classList.remove("gallery-img-active");
});