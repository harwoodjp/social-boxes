const aboutBtn = document.querySelector(".fa-id-card-o"),
	contentArea = document.querySelector(".content-area"),
	aboutBox = document.querySelector(".about-box")
	blogBtn = document.querySelector(".fa-rss");

aboutBtn.addEventListener("click", function() {
	contentArea.classList.add("hidden");
	aboutBox.classList.remove("hidden");
	document.location.hash = "#about";	
})
blogBtn.addEventListener("click", function() {
	contentArea.classList.remove("hidden");
	aboutBox.classList.add("hidden");
	document.location.hash = "";		
})

if (document.location.hash == "#about") {
	console.log("hash = about");
	contentArea.classList.add("hidden");
	aboutBox.classList.remove("hidden");
}