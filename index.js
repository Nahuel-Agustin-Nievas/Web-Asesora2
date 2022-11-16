window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})


// $(document).ready(function(){
//     $(document).click(
//       function(){
//         $("#hamburguer").removeClass("navbar navbar-expand-lg bg-light");
//       }
//     );
//   });




  // // Look for .hamburger
  // var hamburger = document.querySelector(".hamburger");
  // // On click
  // hamburger.addEventListener("click", function() {
  //   // Toggle class "is-active"
  //   hamburger.classList.toggle("is-active");
  //   // Do something else, like open/close menu
  // });
