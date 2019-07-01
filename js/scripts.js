//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});



// // accordion
// $("#accordion").accsordion({
//     collapsible: true,
//     heightStyle: "content"
// });

// $("#button").click(function () {
//     if ($("#button").hasClass('active')) {
//         //uit
//         $("#button").removeClass('active');
//         //$("#button").animate({'margin-right': "-400px"}, 5000);
//         $("#accordion").accordion("enable").css({
//             'opacity': "1"
//         });
//     } else {
//         //aan
//         $("#button").addClass('active');
//         //$("#button").animate({'margin-right': "400px"}, 5000);
//         $("#accordion").accordion("disable").css({
//             'opacity': "0.5"
//         });
//     }

// });