function toggleMobileMenu() {
    //menu.classList.toggle('open');
	document.getElementById("hamburger-icon").classList.toggle('open');
	if(document.getElementById("hamburger-icon").classList.length != 0)
	{
		
		document.getElementById("aboutme").style.paddingTop = "210px";
	}
	else{
		document.getElementById("aboutme").style.paddingTop = "0px";
	}
	
}

const height = document.querySelector("#height span");
const width = document.querySelector("#width span");

var aboutme;
   
// Insert values on load of page
//window.onload = function() {
//    height.innerHTML = window.innerHeight;
//    width.innerHTML = window.innerWidth;
//	aboutme = document.getElementById("aboutme");
//};
//   
//// Change values when window is resized
//window.onresize = function() {
//   
//    // Setting the current height & width
//    // to the elements
//    height.innerHTML = window.innerHeight; 
//    width.innerHTML = window.innerWidth;
//	
//	if(width < 600)
//	{
//		alert('Less than 600');
//		aboutme.style.fontSize = "40px";
//		//document.getElementById("aboutme").style.fontcolor = #ff3860;
//		//document.getElementById("aboutme").style.fontSize = 30px;
//	}
//};

