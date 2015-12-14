var addProjectBtn = document.getElementById("add-projekt-bg");
var modalWindow = document.getElementById("popup-back");
var closeWindowBtn = document.getElementById("close-button");

addProjectBtn.onclick = function(){
	modalWindow.style.visibility = "visible";
};

closeWindowBtn.onclick = function(){
	modalWindow.style.visibility = "hidden";
};