
// setInterval(

function loadDoc(){

//Create the XHR Object
var xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://thatsthespir.it/api', true)
//call the onload 
xhr.onload = function() {
	//check if the status is 200(means everything is okay)
	if (this.status === 200) {
		//return server response as an object with JSON.parse
		console.log(JSON.parse(this.responseText));
		// document.getElementById("quote").innerHTML =
		let test = JSON.parse(this.responseText); 
		this.responseText;
		var bla = document.querySelector("#quote");
		bla.innerHTML = `
		<ul> 
			
			<li>Quote:  ${test.quote}</li> 
			<li> Author:  ${test.author}</li> 
		</ul>`
		}
	 } 

	 // <img src="${test.photo}">
// call send
xhr.send();

xhr.onerror = function(){
	console.log('error somewhere');
}

}

// , 5000);


// let xhr = new XMLHttpRequest; 
// xhr.open('GET', 'https://thatsthespir.it/api', true); 
// xhr.onload = function() { 
// 	if(this.status === 200) { 
// 		let test = JSON.parse(this.responseText); 
// 		let someThing = document.querySelector('#quote'); 
// 		someThing.innerHTML = 
// 		<ul> 
// 			<li>Quote: ${test.quote}</li> 
// 			<li> Author:${test.author}</li> 
// 		</ul> 
// 	} } 
// xhr.onerror = function(){ 
// 	let someThing = document.querySelector('#quote'); 
// 	someThing.innerHTML = "Error stupid get off" } xhr.send();


// function myFunction(xml) {
//   var i;
//   var xmlDoc = xml.responseXML;
//   var table="<tr><th>Title</th><th>Artist</th></tr>";
//   var x = xmlDoc.getElementsByTagName("CD");
//   for (i = 0; i <x.length; i++) { 
//     table += "<tr><td>" +
//     x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
//     "</td><td>" +
//     x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
//     "</td></tr>";
//   }
//   document.getElementById("demo").innerHTML = table;
// }


//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN

//Call the fetch fonction
// fetch('https://thatsthespir.it/api')
// .then(res => res.json()) //response type
// .then(data => console.log(data)); //log the data

// async function getData() {
	
// 	var response = await fetch('https://thatsthespir.it/api');

// 	var data = await response.json()

// 	return data;
// }

// getData()
// .then(data => console.log(data));