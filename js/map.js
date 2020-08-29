var svgMap = function () {};
var svgMapCountries = new svgMap();

const path = document.querySelectorAll("path");

let dataBase = [];
$.get(`https://disease.sh/v3/covid-19/countries`, function (data) {
  for (let i = 0; i < data.length; i++) {
    dataBase.push({
      id: data[i].countryInfo.iso2,
      flag: data[i].countryInfo.flag,
      country: data[i].country,
      cases: data[i].cases,
      deaths: data[i].deaths,
      recovered: data[i].recovered,
      active: data[i].active
    });
  }
});

const worldMapCovid = document.querySelector(".world-map-covid");
const el = document.createElement("div");
el.className = "statistic-country";

path.forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    event.preventDefault();
    const target = event.target;
    item.style.fill = "#167C51";
    let countryID = dataBase.find((item) => item.id === target.id);
    el.classList.add("show");
    el.style.position = "absolute";
    el.insertAdjacentHTML(
      "afterbegin",
      `<img src="${countryID.flag}" alt="${
        countryID.country
      }" class="statistic-country__flag">
    <span class="statistic-country__name">${countryID.country}</span>
    <span class="statistic-country__count count-cases">Cases: ${countryID.cases.toLocaleString()}</span>
    <span class="statistic-country__count count-deaths">Deaths: ${countryID.deaths.toLocaleString()}</span>
    <span class="statistic-country__count count-recovered">Recovered: ${countryID.recovered.toLocaleString()}</span>
    <span class="statistic-country__count count-active">Active: ${countryID.active.toLocaleString()}</span>`
    );
    worldMapCovid.append(el);
  });
  item.addEventListener(
    "touchstart",
    (event) => {
      path.forEach((item) => (item.style.fill = "f44a45"));
      el.innerHTML = "";
      el.remove();
      const target = event.target;
      item.style.fill = "#167C51";
      let countryID = dataBase.find((item) => item.id === target.id);
      el.classList.add("show");
      el.style.position = "absolute";
      el.insertAdjacentHTML(
        "afterbegin",
        `<img src="${countryID.flag}" alt="${
          countryID.country
        }" class="statistic-country__flag">
    <span class="statistic-country__name">${countryID.country}</span>
    <span class="statistic-country__count count-cases">Cases: ${countryID.cases.toLocaleString()}</span>
    <span class="statistic-country__count count-deaths">Deaths: ${countryID.deaths.toLocaleString()}</span>
    <span class="statistic-country__count count-recovered">Recovered: ${countryID.recovered.toLocaleString()}</span>
    <span class="statistic-country__count count-active">Active: ${countryID.active.toLocaleString()}</span>`
      );
      worldMapCovid.append(el);
    },
    { passive: false }
  );

  item.addEventListener("mouseleave", () => {
    item.style.fill = "";
    el.innerHTML = "";
    el.remove();
  });
  item.addEventListener("touchend", (event) => {
    item.style.fill = "#f44a45";
  });
});

// gsap.registerPlugin(Draggable, InertiaPlugin);
// Draggable.create("#map", {
//   type: "x,y",
//   bounds: { minX: -250, maxX: 150, minY: -150, maxY: 250 },
//   autoScroll: false,
//   overshootTolerance: 0,
//   inertia: true,
//   zIndexBoost: 10,
//   cursor: "pointer"
//   // dragResistance: 0,
//   // edgeResistance: 0
// });

var examples = $(".map-svg").svgPanZoom();

const controls = document.querySelector(".controls");

controls.addEventListener("click", (event) => {
  const target = event.target;
  if (target.closest(".controls__plus")) {
    examples.zoomIn();
  }
  if (target.closest(".controls__minus")) {
    examples.zoomOut();
  }
  if (target.closest(".controls__reset")) {
    examples.reset();
  }
});
