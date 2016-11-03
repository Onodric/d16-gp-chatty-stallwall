"use strict";
const ADDITIONPLACE = $("#output");
const SHARPIE = $("#input");
const STALL = $(".cover");

function showData(returnedData){
	let tempArray = returnedData.graffiti;
	for (var i = 0; i < tempArray.length; i++){
		Chatty.storeMsg(tempArray[i]);
	}
}

SHARPIE.keydown(function(event) {
	if (event.which === 13) {
		// preventDefault();
		if (event.target.value === '') {
			alert('Please enter Stall note...');
		} else {
			Chatty.storeMsg(event.target.value);
			event.target.value = '';
		}
	}
});

ADDITIONPLACE.click(function(event) {
	let e = $(event.target);
	if (e.attr('class') === 'btn'){
		Chatty.deleteMsg(e.parent(), e.parent().id);
	}
});

$("#clear").click(function(event) {
	ADDITIONPLACE.children().remove();
	$("#clear").attr('disabled', true);
});

$("#dark").change(function(event) {
	$("#wrapper").toggleClass('dim');
});

$("#largify").change(function(event) {
	ADDITIONPLACE.toggleClass('largify');
});

$("#tag").change(function(event) {
	ADDITIONPLACE.toggleClass('tagIt');
});

$("#switchStalls").change(function(event) {
	let theme = $(this).children(':selected').attr('id');
	STALL.attr('id', theme+'Room');
	}
);


Chatty.loadData(showData);
