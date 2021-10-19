/*============================== VARIABLES ==============================*/
// Texts Displayed
const submitBtn = document.getElementById("submit");
const featuredProjectsBtn = document.getElementById("featuredProjectsBtn");
const creativeAppsBtn = document.getElementById("creativeAppsBtn");

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
	const titleChange = document.getElementById("topSectionTitle");

	// Changing Div Element
	displayStyles.style.transition = "1.25s";
	displayStyles.style.color = "#fff";
	displayStyles.style.backgroundColor = "#ff0055";
	displayStyles.style.padding = "1.5rem";
	titleChange.style.color = "rgba(255, 255, 255, 0.83)";
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
/*===== FEATURED SECTION DISPLAY =====*/
function featuredProjectsDisplay() {
	const showDisplay = document.getElementById("info_containerN");
	const displayStyles = document.getElementById("content");
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

function hideFeaturedApps() {
	// More Projects Section
	$("#moreApp1").hide();
	$("#moreApp2").hide();
	$("#moreApp3").hide();
	$("#moreApp4").hide();
}

function showFeaturedApps() {
	// More Projects Section
	$("#moreApp1").fadeIn(650);
	$("#moreApp2").fadeIn(700);
	$("#moreApp3").fadeIn(800);
	$("#moreApp4").fadeIn(850);
}

featuredProjectsBtn.addEventListener("click", () => {
	featuredProjectsDisplay();

	hideFeaturedApps();
	showFeaturedApps();
});

/*============================== CREATIVE & COMMON SOFTWARE SECTION ==============================*/
/*===== ADDITIONAL SECTION DISPLAY =====*/
function creativeSoftwareDisplay() {
	const showDisplay = document.getElementById("SoftwareContent");
	const displayStyles = document.getElementById("contentApps");
	const plusBtn = document.getElementById("creativeAppsBtn");

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

function hideFeaturedApps() {
	// More Projects Section
	$("#moreSoft1").hide();
	$("#moreSoft2").hide();
	$("#moreSoft3").hide();
	$("#moreSoft4").hide();
	$("#moreSoft5").hide();
	$("#moreSoft6").hide();
	$("#moreSoft7").hide();
	$("#moreSoft8").hide();
	$("#moreSoft9").hide();
	$("#moreSoft10").hide();
	$("#moreSoft11").hide();
	$("#moreSoft12").hide();
}

function showFeaturedApps() {
	// More Projects Section
	$("#moreSoft1").fadeIn(650);
	$("#moreSoft2").fadeIn(675);
	$("#moreSoft3").fadeIn(700);
	$("#moreSoft4").fadeIn(725);
	$("#moreSoft5").fadeIn(750);
	$("#moreSoft6").fadeIn(775);
	$("#moreSoft7").fadeIn(800);
	$("#moreSoft8").fadeIn(825);
	$("#moreSoft9").fadeIn(850);
	$("#moreSoft10").fadeIn(875);
	$("#moreSoft11").fadeIn(900);
	$("#moreSoft12").fadeIn(925);
}

creativeAppsBtn.addEventListener("click", () => {
	creativeSoftwareDisplay();

	hideFeaturedApps();
	showFeaturedApps();
});
