const dmnBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");
const container = document.querySelector(".container");
let sideBar = document.querySelector('.sidebar');

let mainSlide = document.querySelector(".main-slide");
const slideS = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;
sideBar.style.top = `-${(slideS - 1) * 100}vh`

upBtn.addEventListener("click", () => {
	changeSlide("up");
});
dmnBtn.addEventListener("click", () => {
	changeSlide("down");
});

function changeSlide(direction) {
	if (direction === "up") {
		activeSlideIndex++;
		if (activeSlideIndex === slideS) {
			activeSlideIndex = 0;
		}
	} else if (direction === "down") {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slideS - 1;
		}
	}

	const height = container.clientHeight;
	
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
	sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
	
}
