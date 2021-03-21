
export default function BurgerFunctions() {

    function toggleClass() {
      $(".nav-links").toggleClass("nav-active");
      $("body").toggleClass("active");
      $(".burger").toggleClass("toggle");
    }

    this.navAnimation = _ => {
        toggleClass();

        document.querySelectorAll(".nav-links li").forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 1.2
            }s`;
          }
        });
    }

    this.removeNav = _ => {
        if ($(".nav-links").hasClass("nav-active")) {
          toggleClass();
          
          document.querySelectorAll(".nav-links li").forEach((link) => {
            if (link.style.animation) {
              link.style.animation = "";
            }
          });
        }
    }
}