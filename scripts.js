// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute("href"));
//       if (target) {
//         window.scrollTo({
//           top: target.offsetTop - 75, // Adjust offset as needed
//           behavior: "smooth"
//         });
//       }
//     });
//   });



// script for close the drop down when a linked in clicked

// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.querySelector('[data-hs-collapse]');
//     const menuLinks = document.querySelectorAll('.menu-link'); // Add this class to your links

//     menuLinks.forEach(link => {
//       link.addEventListener("click", function () {
//         if (menuToggle.classList.contains("open")) {
//           window.HSCollapse.hide(menuToggle); // Closes the menu
//         }
//       });
//     });
//   });
