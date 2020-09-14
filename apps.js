

// Reposition a div everytime the size of the screen changes to less than 1004px
// setInterval(function(){
//   if(($(window ).width()) < 1004){
//     $(".two").addClass("reposition_div");
//     $(".form").addClass("reposition_rowCheck");
//   }
//   else{
//     $(".two").removeClass("reposition_div");
//     $(".form").removeClass("reposition_rowCheck");
//   }
// }, 1000);

// Creating a slide
var slideIndex = 1;
        displaySlide(slideIndex);

        function moveSlides(n) {
            displaySlide(slideIndex += n);
        }

        function activeSlide(n) {
            displaySlide(slideIndex = n);
        }

        /* Main function */
        function displaySlide(n) {
            var i;
            var totalslides =
                document.getElementsByClassName("slide");

            var totaldots =
                document.getElementsByClassName("footerdot");

            if (n > totalslides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = totalslides.length;
            }
            for (i = 0; i < totalslides.length; i++) {
                totalslides[i].style.display = "none";
            }
            for (i = 0; i < totaldots.length; i++) {
                totaldots[i].className =
                totaldots[i].className.replace(" active", "");
            }
            totalslides[slideIndex - 1].style.display = "block";
            totaldots[slideIndex - 1].className += " active";
        }
