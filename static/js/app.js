const aboutBtn = document.querySelector(".fa-id-card-o"),
	contentArea = document.querySelector(".content-area"),
	aboutBox = document.querySelector(".about-box")
	blogBtn = document.querySelector(".fa-rss");

aboutBtn.addEventListener("click", function() {
	contentArea.classList.add("hidden");
	aboutBox.classList.remove("hidden");
})
blogBtn.addEventListener("click", function() {
	contentArea.classList.remove("hidden");
	aboutBox.classList.add("hidden");
})