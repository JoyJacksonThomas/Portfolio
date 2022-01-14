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

var goatTitleHeight = document.querySelector("#goatTitleHeight span");

var aboutme;
var FrogBath;
var SuperGoatDeath;
var FrogBathTitle;
var FirstRow;

var diff;   
   
// Insert values on load of page
window.onload = function() {
	aboutme = document.getElementById("aboutme");
	FrogBath = document.getElementById("FrogBath");
	SuperGoatDeath = document.getElementById("SuperGoatDeath");
	FirstRow = document.getElementById("FirstRow");
	
	goatTitleHeight = document.getElementById("SuperGoatDeathTitle").height;
	document.getElementById("GoatDeathContainer").style.height = goatTitleHeight;
};
//   
//// Change values when window is resized
window.onresize = function() {
   
	goatTitleHeight = document.getElementById("SuperGoatDeathTitle").height;
	document.getElementById("GoatDeathContainer").style.height = goatTitleHeight;
	
	//if(FrogBath.height > SuperGoatDeath.height)
	//{
	//	//SuperGoatDeath.height = FrogBath.height;
	//	diff = (FrogBath.height.value - SuperGoatDeath.height.value)*.5f;
	//	SuperGoatDeath.style.paddingBottom = diff;
	//}
	//else{
	//	diff = (SuperGoatDeath.height.value - FrogBath.height.value)*.5f;
	//	FrogBath.style.paddingBottom = diff;
	//}
};

