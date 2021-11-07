/*============================== VARIABLES ==============================*/
// Texts Displayed
const submitBtn = document.getElementById("submit");

/*=================================== DARK MODE ===================================*/
const darkModeBtn = document.getElementById("darkModeBtn");

// Sets New Dark Mode Background colour
function darkModeBackground() {
	const darkM = document.getElementById("main");
	const darkMHeroImage = document.getElementById("heroBackgroundImage");

	// Toggle ON/OFF the dark Mode theme
	$("#darkModeON").fadeIn(1000);
	darkM.classList.toggle("darkModeON");

	darkMHeroImage.style.transition = "all 2s";
	darkMHeroImage.body.style.backgroundImage =
		"url('https://image05.realme.net/general/20210715/1626338409118.jpg')";

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

// Resume Section
function isActiveDarkMode() {
	// Checks to verity if the dark mode is currently active
	if (darkM.classList.contains("darkModeON")) {
		// Load the Resume page in Dark mode
	} else {
		// Load the resume page
	}
}

/*============================== HERO BACKGROUND IMAGE ==============================*/
// Sets New Hero Background Image
function heroBackgroundTwo() {
	const secondHeroBackground = document.getElementById("heroBackgroundImage");

	// Changing Hero section
	secondHeroBackground.body.style.backgroundImage =
		"url('https://image05.realme.net/general/20210715/1626338409118.jpg')";
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
const featuredProjectsBtn = document.getElementById("featuredProjectsBtn");

/*===== FEATURED SECTION DISPLAY =====*/
function featuredProjectsDisplay() {
	// Reveal Featured Projects section Animation
	$("#info_containerN").slideToggle(350, fPButtonStyleHide());
}

function fPButtonStyleShow() {
	featuredProjectsBtn.style.border = "none";
	featuredProjectsBtn.style.cursor = "pointer";
	featuredProjectsBtn.style.padding = "0.5rem";
	featuredProjectsBtn.style.borderRadius = "7.5px";
	featuredProjectsBtn.style.fontSize = " 0.9rem";
	featuredProjectsBtn.style.position = "relative";
	featuredProjectsBtn.style.backgroundColor = "#7a42fc";
	featuredProjectsBtn.innerHTML = `<i class="bi bi-plus-lg"></i>`;

	featuredProjectsBtn.addEventListener("click", () => {
		fPButtonStyleHide();
	});
}

function fPButtonStyleHide() {
	featuredProjectsBtn.style.position = "relative";
	featuredProjectsBtn.innerHTML = `<i class="bi bi-dash-lg"></i>`;
	featuredProjectsBtn.style.backgroundColor = "transparent";

	featuredProjectsBtn.addEventListener("click", () => {
		fPButtonStyleShow();
	});
}

featuredProjectsBtn.addEventListener("click", () => {
	featuredProjectsDisplay();
});

/*===== MORE INFO BUTTON DISPLAY =====*/
// More info section
function showProjectInfo() {}

/*============================== CREATIVE & COMMON SOFTWARE SECTION ==============================*/
const creativeAppsBtn = document.getElementById("creativeAppsBtn");

/*===== CREATIVE SOFTWARE SECTION DISPLAY =====*/
function creativeSoftwareDisplay() {
	// Reveal Featured Projects section Animation
	$("#softwareContent").slideToggle(350, cSButtonStyleHide());
}

function cSButtonStyleShow() {
	creativeAppsBtn.innerHTML = `<i class="bi bi-plus-lg"></i>`;
	creativeAppsBtn.style.backgroundColor = "#7a42fc";

	featuredProjectsBtn.addEventListener("click", () => {
		cSButtonStyleHide();
	});
}

function cSButtonStyleHide() {
	// creativeAppsBtn.style.position = "relative";
	// creativeAppsBtn.innerHTML = `<i class="bi bi-dash-lg"></i>`;
	// creativeAppsBtn.style.backgroundColor = "transparent";

	featuredProjectsBtn.addEventListener("click", () => {
		cSButtonStyleShow();
	});
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
});
