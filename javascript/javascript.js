
var spots = document.getElementById("places");

var areas = [
{
    name: "12th South",
    description: "College kids and Yuppies",
    price: "$3 Tacos",
    url:"#"
},
{
    name: "Lower Broadway",
    description: "Honky Tonks and Bachelorette Parties",
    price: "How much do you drink?",
    url:"#"
},
{
    name: "East Nashville",
    description: "Hipster",
    price: "Used to be cheap. $4 tacos",
    url:"#"
},
{
    name: "GermanTown",
    description: "Part of the Gentrified Urban Core",
    price: "$12 Hot Chicken",
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
    price: "Not bad during happy hour",
    url:"#"
},
{
    name: "SoBro",
    description: "This place is still developing it's own vibe",
    price: "$12 Cocktails",
    url:"#"
},
{
    name: "Franklin",
    description: "Quiet Respite from Nashville",
    price: "Moderate to Expensive",
    url:"#"
}];

for (element in areas) {
	var place = `<div class="spots">
				 	<p class="locale-name">${areas[element].name}</p>
                 	<img alt="Locale" class="spot-images" src="${areas[element].url}">
                    <p class="locale-description">${areas[element].description}</p>
                    <p class="locale-price">${areas[element].price}</p>
                </div>`;
    spots.innerHTML += place;
}


