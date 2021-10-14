/*===== WEBSITE SCROLL REVEAL =====*/
// 	AOS CDN.js Reveal Animation
AOS.init();

/*==================== DARK LIGHT THEME ====================*/
const darkModeBtn = document.getElementById("darkModeBtn");

/*===== GRADIENT BACKGROUND COLOUR  =====*/
// Sets New Dark Mode Background colour
function darkModeBackground() {
	const darkM = document.getElementById("darkMode");

	// Toggle ON/OFF the dark Mode theme
	darkM.classList.toggle("darkModeON");

	// Chicks to see if the website dark theme Mode is active
	if (darkM.classList.contains("darkModeON")) {
		// Remove the dark theme button
		darkModeBtn.innerHTML = `
	            <i class="bi bi-toggle-on"></i>
	        `;
	} else {
		// Remove the dark theme button
		darkModeBtn.innerHTML = `
	            <i class="bi bi-toggle-off"></i>
	        `;
	}
}

/*===== HERO BACKGROUND IMAGE  =====*/
// Sets New Hero Background Image
function heroBackgroundTwo() {
	const secondHeroBackground = document.getElementById("heroBackgroundImage");

	// Changing Hero section
	secondHeroBackground.style.backgroundImage =
		"url('/src/img/HeroBackground3.png')";
	secondHeroBackground.style.backgroundSize = "cover";
	secondHeroBackground.style.backgroundPosition = "center";
	secondHeroBackground.style.backgroundRepeat = "no-repeat";
}
