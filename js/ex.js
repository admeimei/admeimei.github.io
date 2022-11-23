// nav
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}
//demo-button
let allButtons = document.getElementsByClassName("demo-button");//Return an array storing all buttons
let allDemoAreas = document.getElementsByClassName("demo-box");//Return an array storing all demo boxes
let demoAreaColor = ["#58D68D", "#8E44AD", "#5D6D7E", "#28B463","#f2bf9f"];
function showDemo(index) {
	//Set all buttons to white color
	for (let i=0; i < allButtons.length; i++) {
		allButtons[i].style.backgroundColor = "white";
		allDemoAreas[i].style.display = "none";
	}
	
	//Set the background color of the demo-button-1 to orange
	allButtons[index].style.background = "#FF9633";
	allDemoAreas[index].style.display = "block";
	allDemoAreas[index].style.backgroundColor = demoAreaColor[index];
}

showDemo(0);



