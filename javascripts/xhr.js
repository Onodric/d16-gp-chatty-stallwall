"use strict"

function showData(returnedData){
	console.log(returnedData);
	for (var i = 0; i < returnedData.length; i++){
		document.getElementById("output").innerHTML += "<p class='msg'>" + returnedData[i] + "</p>";
	}

};

Writings.loadData(showData);