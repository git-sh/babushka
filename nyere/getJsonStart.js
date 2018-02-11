let retter;
let forretter = retter.filter(ret => ret.kategori == "forretter");
let hovedretter = retter.filter(ret => ret.kategori == "hovedretter");
let desserter = retter.filter(ret => ret.kategori == "desserter");
let drikkevarer = retter.filter(ret => ret.kategori == "drikkevarer");

async function hentJson() {
	//hent json
	let jsonData = await fetch("json/menu.json");
	retter = await jsonData.json();
	console.log(retter);
	//kald visretter med de nye arrays
	document.querySelector('#filter-alle').addEventListener("click", () => {
	visRetter(retter) });
	document.querySelector('#filter-forretter').addEventListener("click", () => {
	visRetter(forretter) });
	document.querySelector('#filter-hovedretter').addEventListener("click", () => {
	visRetter(hovedretter) });
	document.querySelector('#filter-desserter').addEventListener("click", () => {
	visRetter(desserter) });
	document.querySelector('#filter-drikkevarer').addEventListener("click", () => {
	visRetter(drikkevarer) });
}

function visRetter(retter) {
	let menuTemplate = document.querySelector("[data-container]");
	let templateModtager = document.querySelector("[data-container]");
	templateModtager.innerHTML = "";
	//for hver ret vis dem i DOM
	retter.forEach(hverRet => {
		//klon template og indsæt ret properties
		let klon = menuTemplate.cloneNode(true).content;
		klon.querySelektor("[data-navn]").textContent = hverRet.navn;
		klon.querySelektor("[data-kortbeskrivelse]").textContent = hverRet.kortbeskrivelse;
		klon.querySelektor("[data-pris]").textContent = hverRet.pris;
		klon.querySelektor("[data-billede]").setAttribute("src", "img/small/" + hverRet.billede + "-sm.jpg") templateModtager.appendChild(klon);
	})
}

document.addEventListener("DOMContentLoaded", hentJson);
