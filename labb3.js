'use strict';

var menu = {
	"Pizzor klass 1": [
		{"name": "Margherita", "contents": ["Tomatsås", "Ost"], "price": 65 },
		{"name": "Vesuvio", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 65 },
		{"name": "Altono", "contents": ["Tomatsås", "Ost", "Tonfisk"], "price": 65 }
	],
	"Pizzor klass 2": [
		{"name": "Calzone", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 80 },
		{"name": "Capricciosa", "contents": ["Tomatsås", "Ost", "Skinka", "Champinjoner" ], "price": 70 },
		{"name": "Tomaso", "contents": ["Tomatsås", "Ost", "Skinka", "ALLERGI:Räkor" ], "price": 70 },
		{"name": "Hawaii", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas" ], "price": 70 },
		{"name": "Oriental", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs" ], "price": 70 },
		{"name": "Venezia", "contents": ["Tomatsås", "Ost", "Skinka", "Tonfisk" ], "price": 70 },
		{"name": "Bolognese", "contents": ["Tomatsås", "Ost", "Köttfärs", "Lök" ], "price": 70 },
		{"name": "Napoli", "contents": ["Tomatsås", "Ost", "Räkor", "Champinjoner" ], "price": 70 }
	],
	"Pizzor klass 3": [
		{"name": "Bravo", "contents": ["Tomatsås", "Ost", "Skinka", "Bacon", "Lök", "ALLERGI:Ägg"], "price": 75 },
		{"name": "Princessa", "contents": ["Tomatsås", "Ost", "Skinka", "ALLERGI:Räkor", "Champinjoner" ], "price": 75 },
		{"name": "Kroppkärr", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "Champinjoner" ], "price": 75 },
		{"name": "Afrikano", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas", "Curry", "Banan" ], "price": 75 },
		{"name": "Önska", "contents": ["Tomatsås", "Ost", "Skinka", "ALLERGO:Räkor", "Champinjoner" ], "price": 85 },
		{"name": "Lambada", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "ALLERGI:Räkor" ], "price": 75 },
		{"name": "Alsterdalen", "contents": ["Tomatsås", "Ost", "Skinka", "ALLERGI:Crabfish", "ALLERGI:Räkor" ], "price": 75 },
		{"name": "Paradis", "contents": ["Tomatsås", "Ost", "Skinka", "ALLERGI:Räkor", "Ananas" ], "price": 75 },
		{"name": "Roma", "contents": ["Tomatsås", "Ost", "Skinka", "Kantareller", "Tomater (färska)" ], "price": 75 },
		{"name": "Banjogatan", "contents": ["Tomatsås", "Ost", "Skinka", "Salami", "Paprika" ], "price": 75 },
		{"name": "Rimini", "contents": ["Tomatsås", "Ost", "Köttfärs", "Gorgonzolaost", "Lök" ], "price": 75 },
		{"name": "Opera", "contents": ["Tomatsås", "Ost", "Köttfärs", "Ananas", "Curry", "Banan" ], "price": 75 },
		{"name": "Mesopotamia", "contents": ["Tomatsås", "Ost", "Salami", "Köttfärs", "ALLERGI:Nötter"], "price": 75 }
	],
	"Såser": [
		{"name": "Bearnaisesås 10 cl ", "price":  10 },
		{"name": "Kebabsås mild 10 cl ", "price":  10 },
		{"name": "Kebabsås stark 10 cl ", "price":  10 },
		{"name": "Kebabsås blandad 10 cl ", "price":  10 },
		{"name": "Tzatzikisås 10 cl ", "price":  10 },
		{"name": "Vitlökssås 10 cl ", "price": 10}
	],
	"Dryck": [
		{"name": "Coca-Cola 33 cl ", "price":  15 },
		{"name": "Coca-Cola light 33 cl ", "price":  15 },
		{"name": "Fanta 33 cl ", "price":  15  },
		{"name": "Sprite 33 cl ", "price":  15 },
		{"name": "Mineralvatten 33 cl ", "price":  15 },
		{"name": "Lättöl 33 cl ", "price":  15 },
		{"name": "Coca-Cola 50 cl ", "price":  20 },
		{"name": "Fanta 50 cl ", "price":  20 }
	]
}

menu["Pizzor klass 1"].forEach(function(pizza){
	let listItem = document.createElement("li");
	listItem.className = "lista";

	let name = document.createElement("span");
	name.className = "sort";
	name.textContent = pizza.name + ":" + " ";

	let content = document.createElement("span");
	content.className = "inneholl";
	content.textContent = pizza.contents + " ";

	let price = document.createElement("span");
	price.className = "pris";
	price.textContent = pizza.price + " kr";

  


	listItem.appendChild(name);
	listItem.appendChild(content);
	listItem.appendChild(price);
	

	document.querySelector("#pizza1").appendChild(listItem);
    
    listItem.addEventListener('click', function() {
        addToOrder(pizza);
    });
});

menu["Pizzor klass 2"].forEach(function(pizza){
	let listItem = document.createElement("li");
	listItem.className = "lista";

	let name = document.createElement("span");
	name.className = "sort";
	name.textContent = pizza.name + ":" + " ";

	let content = document.createElement("span");
	content.className = "inneholl"
	content.textContent = pizza.contents + " ";

	let price = document.createElement("span");
	price.className = "pris";
	price.textContent = pizza.price + " kr";

    

	listItem.appendChild(name);
	listItem.appendChild(content);
	listItem.appendChild(price);
	

	document.querySelector("#pizza2").appendChild(listItem);
    
    listItem.addEventListener('click', function() {
        addToOrder(pizza);
      });
});

menu["Pizzor klass 3"].forEach(function(pizza){
	let listItem = document.createElement("li");
	listItem.className = "lista";

	let name = document.createElement("span");
	name.className = "sort";
	name.textContent = pizza.name + ":" + " ";

	let content = document.createElement("span");
	content.className = "inneholl";
	content.textContent = pizza.contents + " ";

	let price = document.createElement("span");
	price.className = "pris";
	price.textContent = pizza.price + " kr";

    

	listItem.appendChild(name);
	listItem.appendChild(content);
	listItem.appendChild(price);
	

	document.querySelector("#pizza3").appendChild(listItem);
    
    listItem.addEventListener('click', function() {
            addToOrder(pizza);
        });
});

menu["Såser"].forEach(function(sauce){
	let listItem = document.createElement("li");
	listItem.className = "lista";

	let name = document.createElement("span");
	name.className = "sort";
	name.textContent = sauce.name;

	let price = document.createElement("span");
	price.className = "pris";
	price.textContent = sauce.price + " kr";

    listItem.appendChild(name);
	listItem.appendChild(price);


	document.querySelector("#sas").appendChild(listItem);
    
    listItem.addEventListener('click', function() {
        addToOrder(sauce);
      });
});

menu["Dryck"].forEach(function(drink){
	let listItem = document.createElement("li");
	listItem.className = "lista";

	let name = document.createElement("span");
	name.className = "sort";
	name.textContent = drink.name;

	let price = document.createElement("span");
	price.className = "pris";
	price.textContent = drink.price + " kr";

    

	listItem.appendChild(name);
	listItem.appendChild(price);

	document.querySelector("#drink").appendChild(listItem);
    
    listItem.addEventListener('click', function() {
        addToOrder(drink);
      });
});

function addToOrder(item) {
	let listItem = document.createElement("li");
	listItem.textContent = item.name + item.contents + item.price;
  	listItem.setAttribute("data-name", item.name); 
	listItem.setAttribute("data-price", item.price);
	if (item.contents && item.price) {
	  listItem.textContent = item.name + ": " + item.contents.join(", ") + " " + item.price + " kr";
	} else {
	  listItem.textContent = item.name + " " + item.price + " kr";
	}

	listItem.addEventListener('click', function() {
		listItem.remove();
	  });
  
	document.querySelector("#order-list").appendChild(listItem);
  }

  const kvittoKnapp = document.querySelector("#kvitto");

  kvittoKnapp.addEventListener('click', function(){

	const orderItems = document.querySelectorAll("#order-list li");

	if(orderItems.length === 0) {
		alert('Det ligger inga varor i beställningen!');
	} else{
	const notes = prompt("Noteringar på beställningen:");
	
	generateReceipt(notes);
	clearOrder();
	}
  });
  
  function generateReceipt(notes) {
	const orderItems = document.querySelectorAll("#order-list li");

  	
	let totalSumma = 0;
	let receiptText = "Kvitto:\n";

	
  
	orderItems.forEach(function(item) {
	  const name = item.getAttribute("data-name");
	  const priceText = item.getAttribute("data-price");
	  const price = parseInt(priceText);
  
	  totalSumma += price;
  
	  receiptText += name + " - " + price + " kr\n";
	});
  
	receiptText += "Total summa: " + totalSumma + " kr";

	if (notes) {
        receiptText += "\nNoteringar:\n" + notes;
    }

	let receiptList = document.createElement('li');
	receiptList.textContent = receiptText;
	let kvittoLista = document.querySelector('#kvittolista');
	kvittoLista.appendChild(receiptList);
	
 
	
	alert(receiptText);
  }

  function clearOrder() {
	document.querySelector("#order-list").innerHTML = "";
  }



const knapp1 = document.querySelector("#p1");
const item1 = document.querySelector("#pizza1");
knapp1.addEventListener('click', function(){
	if(item1.style.display === 'block') {
		item1.style.display = 'none';
	} else{
		item1.style.display = 'block';
	}


});

const knapp2 = document.querySelector("#p2");
const item2 = document.querySelector("#pizza2");

knapp2.addEventListener('click', function(){
	if(item2.style.display === 'block') {
		item2.style.display = 'none';
	} else{
		item2.style.display = 'block';
	}


});

const knapp3 = document.querySelector("#p3");
const item3 = document.querySelector("#pizza3");

knapp3.addEventListener('click', function(){
	if(item3.style.display === 'block') {
		item3.style.display = 'none';
	} else{
		item3.style.display = 'block';
	}


});

const knapp4 = document.querySelector("#p4");
const item4 = document.querySelector("#sas");

knapp4.addEventListener('click', function(){
	if(item4.style.display === 'block') {
		item4.style.display = 'none';
	} else{
		item4.style.display = 'block';
	}


});

const knapp5 = document.querySelector("#p5");
const item5 = document.querySelector("#drink");

knapp5.addEventListener('click', function(){
	if(item5.style.display === 'block') {
		item5.style.display = 'none';
	} else{
		item5.style.display = 'block';
	}


});

const kvittoknapp = document.querySelector("#store");
const kvitton = document.querySelector("#kvittolista");
kvittoknapp.addEventListener('click', function(){
	if(kvitton.style.display === 'block') {
		kvitton.style.display = 'none';
	} else{
		kvitton.style.display = 'block';
	}


});
