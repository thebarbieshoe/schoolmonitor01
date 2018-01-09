$(document).ready(function(){
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 9000); // Change image every 9 seconds?
}
});

function resize() {

//if given image ration is NOT 4:3 (not 1080x720 for example)
if (x.style.width != "1080")
	{
	x.style.width="1080";
	x.style.height="720"
	}

};