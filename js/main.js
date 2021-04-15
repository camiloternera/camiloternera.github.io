// console.log("funcionando");
(function () {
  "use strict";
  addEventListener("DOMContentLoaded", () => {
    /* Utilizando libreria TYPED.JS
      https://github.com/mattboldt/typed.js/
    */
    function animationText() {
      if (document.getElementById("frases")) {
        const typed = new Typed(".typed", {
          // strings: [
          //   "Capacitate con nosotros",
          //   "Da el primer paso para cumplir tus sueños",
          // ],
          stringsElement: "#frases", // ID del elemento que contiene cadenas de texto a mostrar.
          typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
          startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
          backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
          smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
          shuffle: false, // Alterar el orden en el que escribe las palabras.
          backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
          loop: true, // Repetir el array de strings
          loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
          showCursor: true, // Mostrar cursor palpitanto
          cursorChar: "|", // Caracter para el cursor
          contentType: "html", // 'html' o 'null' para texto sin formato
        });
      }
    }
    animationText();

    /* Utilizando libreria PARTICLES.JS
      https://github.com/VincentGarreau/particles.js/
    */
    particlesJS(
      {
        "particles": {
          "number": {
            "value": 150,
            "density": {
              "enable": true,
              "value_area": 650
            }
          },
          "color": {
            "value": "#000000"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#f50011",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
    );
  });
})();
