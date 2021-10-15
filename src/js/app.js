/*=================================== WEBSITE SCROLL REVEAL ==============================*/
// 	AOS CDN.js Reveal Animation
AOS.init();

/*============================== VARIABLES ==============================*/
// Texts Displayed
const submitBtn = document.getElementById("submit");
const featuredProjectsBtn = document.getElementById("featuredProjectsBtn");

/*=================================== DARK MODE ===================================*/
const darkModeBtn = document.getElementById("darkModeBtn");

// Sets New Dark Mode Background colour
function darkModeBackground() {
	const darkM = document.getElementById("main");
	const darkMHeroImage = document.getElementById("heroBackgroundImage");

	// Toggle ON/OFF the dark Mode theme
	darkM.classList.toggle("darkModeON");
	darkMHeroImage.style.transition = "all 2s";
	darkMHeroImage.style.backgroundImage = "url('/src/img/HeroBackground2.png')";

	// Chicks to see if the website dark theme Mode is active
	if (darkM.classList.contains("darkModeON")) {
		// Remove the dark theme button
		darkModeBtn.style.transition = "all 2s";
		darkModeBtn.innerHTML = `
	            <i class="bi bi-toggle-on"></i>
	        `;
		// darkModeBody.style.backgroundColor = "#111";
	} else {
		// Remove the dark theme button
		darkModeBtn.style.transition = "all 2s";
		darkModeBtn.innerHTML = `
	            <i class="bi bi-toggle-off"></i>
	        `;
		// darkModeBody.style.backgroundColor = "#fff";
	}
}

/*============================== HERO BACKGROUND IMAGE ==============================*/
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

/*============================== TOP SECTION DISPLAY RESIZE SECTION ==============================*/
function resizeDiv() {
	const displayStyles = document.getElementById("outerSection");

	// Changing Div Element
	displayStyles.style.transition = "1.25s";
	displayStyles.style.color = "#fff";
	displayStyles.style.backgroundColor = "#ff0055";
	displayStyles.style.padding = "1.5rem";
}

/*===== NEXT PAGE NEW TEXT =====*/
// Page Display two
function pageTwo() {
	submitBtn.innerText = "Page 3";
	// document.getElementsByClassName("header1").style.transition = "5s";

	const cc = document.getElementById("cc").remove();

	const header1 = (document.getElementById("header1").innerHTML = `
                <h2><strong> Future features </strong></h2>
            `);
	const paraph1 = (document.getElementById("paraph1").innerHTML = `
                <p><br /> These are the features I want to implement.
							<br />
							<br />
							1. User can share the result of a quiz on social media.<br />
							2. Add multiple quizzes to the application. User can select which
							one to take.<br />
							3. User can create an account and have all the scores saved in his
							dashboard
							<br /> </p>
            `);

	//load's third page
	submitBtn.addEventListener("click", () => {
		pageThree();
	});
}

// Page Display three
function pageThree() {
	submitBtn.innerText = "Page 1";
	// const title1 = document.getElementById("questionnaire_title").remove();

	const header1 = (document.getElementById("header1").innerHTML = `
                <h2><strong> Real-World Applications </strong></h2>
            `);
	const paraph1 = (document.getElementById("paraph1").innerHTML = `
                <p><br /> 1. User Feedback<br />
							2. Targeted Surveys<br />
							3. Scalable questionnaire<br />
							4. Cost-Effective Data Collection </p>
            `);

	// Reload's the default page
	submitBtn.addEventListener("click", () => {
		window.location.reload();
	});
}

// Submit Button Listener
submitBtn.addEventListener("click", () => {
	resizeDiv();
	pageTwo();
});

/*============================== PROJECTS SECTION ==============================*/

/*===== NOTIFICATION DISPLAY =====*/
function featuredProjectsDisplay() {
	const showDisplay = document.getElementById("info_containerN");
	const displayStyles = document.getElementById("contentN");
	const plusBtn = document.getElementById("featuredProjectsBtn");

	// Changing Div styles
	if (showDisplay.style.display === "none") {
		showDisplay.style.display = "block";
		displayStyles.style.color = "#fff";
		displayStyles.style.minHeight = "5.5rem";
		plusBtn.style.backgroundColor = "#ff0055";

		// More Featured Projects Button
		plusBtn.innerHTML = `<i class="bi bi-dash-lg"></i>`;
	} else {
		showDisplay.style.display = "none";
		displayStyles.style.color = "#111";
		plusBtn.style.backgroundColor = "#9d73ff";
		// More Featured Projects Button
		plusBtn.innerHTML = `<i class="bi bi-plus-lg"></i>`;
	}
}

featuredProjectsBtn.addEventListener("click", () => {
	featuredProjectsDisplay();
});
