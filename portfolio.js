function PosNavWorks() {
	let activeNavWorks = document.getElementsByClassName("clicked")[0];
	let navWorks = document.getElementsByClassName("works-nav")[0];
	let navWorksPos = navWorks.getBoundingClientRect();
	let activePos = activeNavWorks.getBoundingClientRect();
	let posLeft = activePos.left - navWorksPos.left;
	let posRight = navWorksPos.right - activePos.right;
	let bgNav = document.getElementById("bg-menu-works");
	bgNav.style.right = posRight + "px";
	bgNav.style.left = posLeft + "px";
}

if (window.history.replaceState) {
	window.history.replaceState(null, null, "https://agathe-plunian.com/");
}
window.addEventListener("load", (event) => {
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty("--vh", `${vh}px`);

	let messageForm = document.getElementsByClassName("message-form");

	if (messageForm.length > 0) {
		let contact = document.getElementById("contact");
		contact.scrollIntoView({ behavior: "smooth" }, true);
	}

	PosNavWorks();

	// Masonry modals
	let modals = document.getElementsByClassName("modal");
	let modalDesign = document.getElementsByClassName("modal-design");
	var msnry;

	for (let i = 0; i < modalDesign.length; i++) {
		modalDesign[i].addEventListener("shown.bs.modal", function () {
			if (modalDesign[i].getElementsByClassName("grid").length != 0) {
				msnry = new Masonry(`.grid-${i}`, {
					itemSelector: ".grid-item",
					columnWidth: ".grid-sizer",
					gutter: 20,
				});
			}
		});
	}

	let modalDev = document.getElementsByClassName("modal-dev");
	var msnry;

	for (let i = 0; i < modalDev.length; i++) {
		modalDev[i].addEventListener("shown.bs.modal", function () {
			if (modalDev[i].getElementsByClassName("grid").length != 0) {
				msnry = new Masonry(`.grid-dev-${i}`, {
					itemSelector: ".grid-item",
					columnWidth: ".grid-sizer",
					gutter: 20,
				});
			}
		});
	}

	let modalIllu = document.getElementsByClassName("modal-illu");
	var msnry;

	for (let i = 0; i < modalIllu.length; i++) {
		modalIllu[i].addEventListener("shown.bs.modal", function () {
			if (modalIllu[i].getElementsByClassName("grid").length != 0) {
				msnry = new Masonry(`.grid-illu-${i}`, {
					itemSelector: ".grid-item",
					columnWidth: ".grid-sizer",
					gutter: 20,
				});
			}
		});
	}

	for (let i = 0; i < modals.length; i++) {
		modals[i].addEventListener("hidden.bs.modal", function (event) {
			msnry = null;
			document.body.classList.remove("overflow");
		});

		modals[i].addEventListener("shown.bs.modal", function () {
			document.body.classList.add("overflow");
		});
	}

	// ARROW BANNER SCOLL DOWN
	let arrowDown = document.getElementById("arrow-down");
	arrowDown.addEventListener("click", scrollDown);
	function scrollDown() {
		let offsetsAPropos = document
			.getElementsByClassName("works")[0]
			.getBoundingClientRect();
		var topAPropos =
			offsetsAPropos.top + document.documentElement.scrollTop - 65;

		window.scrollTo({
			top: topAPropos,
			behavior: "smooth",
		});
	}

	//ANIMATION BURGER MENU
	let menuToggle = document.getElementById("toggle-menu");
	let burgerMenu = document.getElementById("burger-menu");

	burgerMenu.addEventListener("click", function () {
		if (this.classList.contains("open")) {
			this.classList.remove("open");
			menuToggle.classList.add("display-none-menu");
		} else {
			this.classList.add("open");
			menuToggle.classList.remove("display-none-menu");
		}
	});

	// ANIMATION TEXT BANNER
	let title = document.getElementById("text-banner");
	let i = 0;
	let dataText = [
		"Bonjour !",
		"Je suis Jawed Ouraou",
		"dÃ©veloppeure front-end,",
	];

	function typeWriter(currentText, line, j, finish) {
		if (j < currentText.length) {
			line.innerHTML += currentText[j];

			// wait for a while and call this function again for next character
			setTimeout(function () {
				typeWriter(currentText, line, j + 1);
			}, 40);
		}
		if (j == currentText.length) {
			let lineText = document.getElementsByClassName("h1-content")[i];
			lineText.classList.add("no-after");
			i++;
			setTimeout(function () {
				StartTextAnimation(i);
			}, 100);
		}
	}

	function StartTextAnimation(i) {
		if (i < dataText.length) {
			let line = document.createElement("h1");
			line.classList.add("h1-content");
			title.appendChild(line);
			let currentText = dataText[i];
			let j = 0;
			typeWriter(currentText, line, j);
		}
	}

	StartTextAnimation(i);
});

// NAV LINK ET FLECHE BANNER
const logo = document.getElementsByClassName("logo-container");
for (let i = 0; i < logo.length; i++) {
	logo[i].addEventListener("click", scroolToTop);
}

const navLinks = document.getElementsByClassName("nav-link");
for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", function (e) {
		e.preventDefault();
		let data = e.target.getAttribute("data-parent");
		let bodyRect = document.body.getBoundingClientRect();
		let elemRect = document
			.getElementsByClassName(data)[0]
			.getBoundingClientRect();
		let offset = elemRect.top - bodyRect.top;

		window.scrollTo({
			top: offset,
			behavior: "smooth",
		});

		document.getElementsByClassName("burger-menu")[0].classList.remove("open");
		document
			.getElementsByClassName("small-menu-list")[0]
			.classList.add("display-none-menu");
		PosNavWorks();
	});
}

function scroolToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

// ANIMATION NAV BAR + A PROPOS + SKILLS BARS
const navbar = document.getElementsByClassName("main-nav")[0];
const aProposBlock = document.getElementsByClassName("a-propos")[0];

window.onscroll = () => {
	// NavBar anim color
	let nav = document.getElementsByClassName("banner")[0];
	let offsetNav = nav.offsetHeight;

	if (window.scrollY > offsetNav) {
		navbar.classList.add("nav-active");
	} else {
		navbar.classList.remove("nav-active");
	}

	let aboutSection = document.getElementsByClassName("about")[0];
	let rectAbout = aboutSection.getBoundingClientRect();
	let sizeBanner = document.getElementsByClassName("banner")[0].offsetHeight;

	if (
		(window.innerHeight || document.documentElement.clientHeight) >
		sizeBanner + 30
	) {
		aboutSection.classList.add("anim-a-propos");
	}
};

//RENDER PORTFOLIO
let btnChoices = document.getElementsByClassName("btn-choice");
const worksArea = document.getElementById("works-area");
let porfolios = document.getElementsByClassName("portfolio-area");

for (let i = 0; i < btnChoices.length; i++) {
	btnChoices[i].addEventListener("click", function (event) {
		switchMenu(event);
		renderProjects(event);
	});
}

//RENDER PROJECTS FUNCTION
function renderProjects(event) {
	let areaTarget = event.target.id;
	for (let i = 0; i < porfolios.length; i++) {
		porfolios[i].classList.remove("active");
	}
	document.getElementsByClassName(areaTarget)[0].classList.add("active");

	if (areaTarget == "illustration") {
		let msnry = new Masonry(`.grid-illustration`, {
			itemSelector: ".grid-item",
			columnWidth: ".grid-sizer",
			gutter: 30,
		});
	}
}

//MENU SWITCH PORTFOLIO ANIMATION

function switchMenu(event) {
	let positionActualChosen = document.getElementsByClassName("clicked")[0];
	let btnChosen = event.target;
	positionActualChosen.classList.remove("clicked");
	btnChosen.classList.add("clicked");

	let activeNavWorks = btnChosen;
	let navWorks = document.getElementsByClassName("works-nav")[0];
	let navWorksPos = navWorks.getBoundingClientRect();
	let activePos = activeNavWorks.getBoundingClientRect();
	let posLeft = activePos.left - navWorksPos.left;
	let posRight = navWorksPos.right - activePos.right;

	let bgNav = document.getElementById("bg-menu-works");
	bgNav.style.right = posRight + "px";
	bgNav.style.left = posLeft + "px";
}

/* Form */
//ERROR MESSAGES
const errorMessages = {
	names: "Veuillez renseigner ce champ s'il vous plait",
	email: "Oups, l'adresse e-mail n'est pas valide",
	emailEmpty: "Veuillez renseigner votre adresse e-mail s'il vous plait",
	sujectEmpty: "Veuillez renseigner ce champ s'il vous plait",
	messageEmpty: "N'oubliez pas d'Ã©crire votre message :)",
};

//DOM ELEMENTS
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const subject = document.getElementById("subject");

//SET ERROR MESSAGE
function setError(el, error) {
	let target;
	if (NodeList.prototype.isPrototypeOf(el)) {
		target = el[0].parentNode;
	} else {
		target = el.parentNode;
	}
	target.setAttribute("data-error", error);
	target.setAttribute("data-error-visible", true);
}

//REMOVE ERROR MESSAGE
function removeError(el) {
	let target;
	if (NodeList.prototype.isPrototypeOf(el)) {
		target = el[0].parentNode;
	} else {
		target = el.parentNode;
	}
	target.removeAttribute("data-error");
	target.removeAttribute("data-error-visible");
}

//FIRSTNAME AND LASTNAME VALIDATION
function validateNames(el) {
	if (el.value == 0) {
		setError(el, errorMessages.names);
		return false;
	} else {
		removeError(el);
		return true;
	}
}

//EMAIL VALIDTION
function validateEmail(email) {
	let mailformat = /^\S+@\S+\.\S+$/;
	if (!email.value.match(mailformat) && email.value != 0) {
		setError(email, errorMessages.email);
		return false;
	} else if (email.value == 0) {
		setError(email, errorMessages.emailEmpty);
		return false;
	} else {
		removeError(email);
		return true;
	}
}

function validateMessage(el) {
	if (el.value == 0) {
		setError(el, errorMessages.messageEmpty);
		return false;
	} else {
		removeError(el);
		return true;
	}
}

function validateSubject(el) {
	if (el.value == 0) {
		setError(el, errorMessages.sujectEmpty);
		return false;
	} else {
		removeError(el);
		return true;
	}
}

let form = document.getElementsByClassName("formular")[0];

function validate(event) {
	//APPEL FONCTIONS
	validateNames(firstName);
	validateNames(lastName);
	validateEmail(email);
	validateMessage(message);
	validateSubject(subject);

	//CONDITION VALIDATION FORM
	if (
		validateNames(firstName) &&
		validateNames(lastName) &&
		validateEmail(email) &&
		validateMessage(message) &&
		validateSubject(subject)
	) {
		form.submit();
		let contact = document.getElementsByClassName("contact")[0];
		contact.scrollIntoView({ behavior: "smooth" }, true);
		return true;
	} else {
		event.preventDefault();
		return false;
	}
}

form.addEventListener("submit", validate);

// Resize
window.addEventListener("resize", function () {
	PosNavWorks();
});

let btnCloseMessage = document.getElementsByClassName("btn-message-close");

for (let i = 0; i < btnCloseMessage.length; i++) {
	btnCloseMessage[i].addEventListener("click", function () {
		let message = document.getElementsByClassName("message-form")[0];
		message.style.display = "none";
	});
}
