(() => {
	//this is a self invoking anonymous function
	console.log('fired!');
	// this is the same as print in python

	//these are the elements that you want to reference//
 var badge = document.querySelector("svg");

 var Heart = document.querySelectorAll('#Heart1');
 var Ballon = document.querySelectorAll('#Ballon2');
 var Wine = document.querySelectorAll('#Wine3');
 var Calendar = document.querySelectorAll('#Calendar4');
 var Candy = document.querySelectorAll('#Candy5');
 var Cloud = document.querySelectorAll('#Cloud6');
 var Flower = document.querySelectorAll('#Flower7');
 var Gift = document.querySelectorAll('#Gift8');
 var Kiss = document.querySelectorAll('#Kiss9');
 var Letter = document.querySelectorAll('#Letter10');


 function logBadgeId() {
 	console.log(this.id);
 	debugger;
 }

badge.addEventListener("click", logBadgeId);


Heart.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
Ballon.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
Wine.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
Calendar.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
Candy.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
Cloud.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
Flower.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
Gift.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
Kiss.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
Letter.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));

//debugger; 
})();