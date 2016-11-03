"use strict";
var Chatty = (function(oldChatty){
	let MSGARRAY = [];
	
	oldChatty.addMsg = function(elementId, msg){
		let tempStr = '<p class="msg" id="';
		tempStr += MSGARRAY.length;
		tempStr += '"><span>';
		tempStr += msg;
		tempStr += '</span><button class="btn">SCRUB</button></p>';
		elementId.append(tempStr);
	};

	oldChatty.storeMsg = function(msg){
			MSGARRAY.push(msg);
      Chatty.addMsg(ADDITIONPLACE, msg);
		},

	oldChatty.readMsg = function() {
			return MSGARRAY;
		},

	oldChatty.deleteMsg = function(msg, elementId){
		msg.remove();
		let tempArray1 = MSGARRAY.slice(0, parseInt(elementId));
    let tempArray2 = MSGARRAY.slice(parseInt(elementId) + 1);
    MSGARRAY = tempArray1.concat(tempArray2);
		for (let i = elementId; i < MSGARRAY.length; i++){
			$(".msg #"+i).id = i-1;
		}
	};
	
	return oldChatty;
})(Chatty || {});

// 1. One IIFE should contain a function that accepts an element `id`, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should also expose a function to read all messages, and delete a single message.