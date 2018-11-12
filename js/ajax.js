
// setInterval(

function loadDoc(){

	var showReturn = document.querySelector('.return');
// function show() {
    // var test = showReturn.innerHTML = presentation;

    // showReturn.classList.add("elementToAnimate");

    showReturn.style.visibility = "visible";

    // return test;

// }


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
		</br>
		<li>Quote:  ${test.quote}</li>
		</br>
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


