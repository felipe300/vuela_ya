function getInfo () {
	let from = document.getElementById("from").value
	let fromDate = document.getElementById("fromDate").value
	let to = document.getElementById("to").value
	let toDate = document.getElementById("toDate").value
	let origin = document.getElementById("origin")
	let originDate = document.getElementById("originDate")
	let dest = document.getElementById("dest")
	let destDate = document.getElementById("destDate")
	let trans = document.getElementById("trans")

	origin.innerHTML = from
	originDate.innerHTML = fromDate
	dest.innerHTML = to
	// Es importante poner un punto y coma antes de operador ternario
	destDate.innerHTML = toDate;

	((from === "Chicago" && to === "Venice")
		|| (from === "Boston" && to === "Paris"))
		? trans.innerHTML = "¡Ojo, tu vuelo tiene una escala!"
		: trans.innerHTML = "¡Ojo, tu vuelo no tiene una escala!"
}