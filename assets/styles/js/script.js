// // Menu toggle functionality
// //    document.getElementById('menu-toggle').addEventListener('click', function () {
// //     document.getElementById('sidebar').classList.toggle('frd-sidebar--active');
// // });


// const toggle = document.getElementById("menu-toggle");
// const menuIcon = document.getElementById("menu-icon");
// const closeIcon = document.getElementById("close-icon");

// toggle.addEventListener("click", () => {
//     const isOpen = menuIcon.style.display === "none";
//     menuIcon.style.display = isOpen ? "block" : "none";
//     closeIcon.style.display = isOpen ? "none" : "block";
// });


const toggle = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const sidebar = document.getElementById("sidebar");

toggle.addEventListener("click", () => {
    // Toggle icon visibility
    const isOpen = menuIcon.style.display === "none";
    menuIcon.style.display = isOpen ? "block" : "none";
    closeIcon.style.display = isOpen ? "none" : "block";

    // Toggle sidebar visibility
    sidebar.classList.toggle("frd-sidebar--active");
});



// Configure particles.js
// particlesJS('particles-js', {
//   "particles": {
//     "number": {
//       "value": 80,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": "#2bffd1"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       }
//     },
//     "opacity": {
//       "value": 0.3,
//       "random": true,
//       "anim": {
//         "enable": true,
//         "speed": 0.5,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 3,
//       "random": true,
//       "anim": {
//         "enable": true,
//         "speed": 2,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "#ff5e5e",
//       "opacity": 0.2,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 1,
//       "direction": "none",
//       "random": true,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "grab"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 140,
//         "line_linked": {
//           "opacity": 0.8
//         }
//       },
//       "push": {
//         "particles_nb": 4
//       }
//     }
//   },
//   "retina_detect": true
// });
