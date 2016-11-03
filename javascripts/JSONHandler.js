"use strict";
var Chatty = (function(oldChatty){
	
	oldChatty.loadData = function(cBFunc){

		$.ajax({
			url: 'data/graffiti.json',
			})
		.done(cBFunc)
		.fail(function() {
			alert("error");
		})
		.always(function() {
			console.log("complete");
		});
	};

	return oldChatty;

})(Chatty || {});

// 1. One IIFE should load the JSON file and returns the array of objects.
