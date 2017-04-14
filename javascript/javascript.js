var places = [

{
	name: "12 South",
	description: "College kids and wasps",
	price: "Cheap",
	url:"#"
},
{
	name: "LowerBroad",
	description: "What you'd expect",
	price: "Cheap",
	url:"#"
},
{
	name: "East Nashville",
	description: "Hipster",
	price: "Not cheap",
	url:"#"
},
{
	name: "GermanTown",
	description: "German",
	price: "Moderate",
	url:"#"
},
{
	name: "The Gulch",
	description: "Rich people",
	price: "Expensive",
	url:"#"
},
{
	name: "Melrose",
	description: "Chill",
	price: "Not bad",
	url:"#"
},
{
	name: "SoBro",
	description: "Don't know",
	price: "Cheap",
	url:"#"
},
{
	name: "Franklin",
	description: "Far away from Nashville",
	price: "Pricey",
	url:"#"
}];

var placesDoc = document.getElementById("places");


for (var i = 0; places.length; i++){
	var placesDiv = `<div class="card">
						<p class="card-name">${places[i].name}</p>
						<img class="card-image" alt="locale" src="${places[i].url}">
						<p class="card-description">${places[i].description}</p>
						<p class="card-price">${places[i].price}</p>
					</div>`
}



for (prop in places) {
	var placesDiv = `<div class="card">
						<p class="card-name">${places[prop].name}</p>
						<img class="card-image" alt="locale" src="${places[prop].url}">
						<p class="card-description">${places[prop].description}</p>
						<p class="card-price">${places[prop].price}</p>
					</div>`

	placesDoc.innerHTML += placesDiv;
}
