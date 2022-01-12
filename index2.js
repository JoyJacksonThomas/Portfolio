function toggleMobileMenu() {
    //menu.classList.toggle('open');
	document.getElementById("hamburger-icon").classList.toggle('open');
	if(document.getElementById("hamburger-icon").classList.length != 0)
	{
		
		document.getElementById("aboutme").style.paddingTop = "170px";
	}
	else{
		document.getElementById("aboutme").style.paddingTop = "0px";
	}
	
}

const height = document.querySelector("#height span");
const width = document.querySelector("#width span");

var goatHeight = document.querySelector("#goatHeight span");

var aboutme;
   
// Insert values on load of page
window.onload = function() {
	aboutme = document.getElementById("aboutme");
	goatHeight = document.getElementById("SuperGoatDeath").height;
	document.getElementById("GoatDeathContainer").style.height = goatHeight;
};
//   
//// Change values when window is resized
window.onresize = function() {
   
	goatHeight = document.getElementById("SuperGoatDeath").height;
	document.getElementById("GoatDeathContainer").style.height = goatHeight;
	
	
};

