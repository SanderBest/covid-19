const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu-mobile');

burger.addEventListener('click', () => {
	burger.classList.toggle('open');
	menuMobile.classList.toggle('open');
});

// модальное окно

const headerNavigationBtn = document.querySelector('.header-navigation__btn');
const modalHeaderWindow = document.querySelector('.modal-header-window');
// const modalClose = document.querySelector('.modal-close');
const feedbackSubmit = document.querySelectorAll('.feedback__submit');

headerNavigationBtn.addEventListener('click', () => {
	modalHeaderWindow.classList.add('show-flex');
	document.body.style.overflow = 'hidden';
	modalHeaderWindow.style.filter = 'blur(10px)';
	setTimeout(() => {
		modalHeaderWindow.style.filter = 'blur(0)';
	}, 100);
});
modalHeaderWindow.addEventListener('click', e => {
	const target = e.target;

	if (
		target.classList.contains('modal-close') ||
		target.classList.contains('modal-header-window')
	) {
		modalHeaderWindow.classList.remove('show-flex');
		document.body.style.overflow = 'scroll';
	}
});

//модалка о том, что сообщение отправлено
const feedbackSubmitAll = Array.from(feedbackSubmit);
feedbackSubmitAll.forEach(item => {
	item.addEventListener('click', e => {
		// e.preventDefault();
		console.log('сообщение отправлено');
	});
});

// cases
const countryFlagCases = document.querySelectorAll(
	'.map-data-item__flag-cases',
);
const countryCases = document.querySelectorAll('.cases .map-data-item__name');
const countryCasesCounter = document.querySelectorAll(
	'.cases .map-data-item__counter',
);
//deaths;
const countryDeaths = document.querySelectorAll('.deaths .map-data-item__name');
const countryDeathsCounter = document.querySelectorAll(
	'.deaths .map-data-item__counter',
);
const countryFlagDeaths = document.querySelectorAll(
	'.deaths .map-data-item__flag',
);
//recovered;
const countryRecovered = document.querySelectorAll(
	'.recovered .map-data-item__name',
);
const countryRecoveredCounter = document.querySelectorAll(
	'.recovered .map-data-item__counter',
);
const countryFlagRecovered = document.querySelectorAll(
	'.recovered .map-data-item__flag',
);

//active;
const countryActive = document.querySelectorAll('.active .map-data-item__name');
const countryActiveCounter = document.querySelectorAll(
	'.active .map-data-item__counter',
);
const countryFlagActive = document.querySelectorAll(
	'.active .map-data-item__flag',
);
const arr = [];
$.get(`https://disease.sh/v3/covid-19/countries`, function (data) {
	for (let i = 0; i < data.length; i++) {
		arr.push({
			flag: data[i].countryInfo.flag,
			country: data[i].country,
			cases: data[i].cases,
			deaths: data[i].deaths,
			recovered: data[i].recovered,
			active: data[i].active,
			id: data[i].countryInfo.iso2,
		});
	}

	const casesArr = arr.sort((a, b) => b.cases - a.cases);
	for (let i = 0; i < 6; i++) {
		countryFlagCases[i].src = casesArr[i].flag;
		countryCases[i].textContent = casesArr[i].country;
		countryCasesCounter[i].textContent = casesArr[i].cases.toLocaleString();
	}

	const deathsArr = arr.sort((a, b) => b.deaths - a.deaths);
	for (let i = 0; i < 6; i++) {
		countryFlagDeaths[i].src = deathsArr[i].flag;
		countryDeaths[i].textContent = deathsArr[i].country;
		countryDeathsCounter[i].textContent = deathsArr[i].deaths.toLocaleString();
	}

	const recoveredArr = arr.sort((a, b) => b.recovered - a.recovered);
	for (let i = 0; i < 6; i++) {
		countryFlagRecovered[i].src = recoveredArr[i].flag;
		countryRecovered[i].textContent = recoveredArr[i].country;
		countryRecoveredCounter[i].textContent = recoveredArr[
			i
		].recovered.toLocaleString();
	}
	const activeArr = arr.sort((a, b) => b.active - a.active);
	for (let i = 0; i < 6; i++) {
		countryFlagActive[i].src = activeArr[i].flag;
		countryActive[i].textContent = activeArr[i].country;
		countryActiveCounter[i].textContent = activeArr[i].active.toLocaleString();
	}
});

var mySwiper = new Swiper('.swiper-container', {
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: '.header-data__next',
		prevEl: '.header-data__prev',
	},
	setWrapperSize: true,
	initialSlide: 0,
	spaceBetween: 100,
	breakpoints: {
		// when window width is >= 320px
		320: {
			width: 300,
		},
		375: {
			width: 320,
		},
		380: {
			width: 370,
		},
		414: {
			width: 375,
			spaceBetween: 160,
		},
		// when window width is >= 480px
		480: {
			width: 420,
		},
		577: {
			width: 520,
		},
		// when window width is >= 640px
		600: {
			width: 520,
		},
		720: {
			width: 600,
		},
		1140: {
			width: 450,
		},
		1281: {
			width: 500,
		},
		1366: {
			width: 500,
		},
		1441: {
			width: 600,
		},
	},
});
