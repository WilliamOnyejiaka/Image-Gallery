
function btnColor(count, lastImageNumber) {
  if (count >= lastImageNumber) {
    $("#next").css("background", "#c9c9c9");
  } else {
    $("#next").css("background", "#0000ff");
  }

  if (count <= 1) {
    $("#previous").css("background", "#c9c9c9");
  } else {
    $("#previous").css("background", "#0000ff");
  }
}

function ImageGroupsAndProperties() {
  function imageProperties(src, alt) {
    return {
      src: src,
      alt: alt,
    };
  }

  this.imageGroups = (_) => {
    let codeImages = [
      imageProperties(
        "./assets/img/Coding_Pictures/artem-sapegin-ZMraoOybTLQ-unsplash.jpg",
        "Laptop And Cup"
      ),
      imageProperties(
        "./assets/img/Coding_Pictures/webstacks-ewXKiIezeTg-unsplash.jpg",
        "Webstacks"
      ),
      imageProperties(
        "./assets/img/Coding_Pictures/artur-shamsutdinov-7MJpHQdGXGA-unsplash.jpg",
        "Artur Shamsutdinov"
      ),
      imageProperties(
        "./assets/img/Coding_Pictures/branko-stancevic-GI1hwOGqGtE-unsplash.jpg",
        "Branko Stancevic"
      ),
      imageProperties(
        "./assets/img/Coding_Pictures/caspar-camille-rubin-89xuP-XmyrA-unsplash.jpg",
        "Caspar Rubin"
      ),
      imageProperties(
        "./assets/img/Coding_Pictures/dlanor-s-2xEQDxB0ss4-unsplash.jpg",
        "Dlanor"
      ),
      imageProperties(
        "./assets/img/Coding_Pictures/emil-priver--WOREXWZ8ds-unsplash.jpg",
        "Emil Priver"
      ),
      imageProperties(
        "./assets/img/Coding_Pictures/emile-perron-xrVDYZRGdw4-unsplash.jpg",
        "Emil Perron"
      ),
      imageProperties(
        "./assets/img/Coding_Pictures/walkator-klMii3cR9iI-unsplash.jpg",
        "Walkator"
      ),
      imageProperties(
        "./assets/img/Coding_Pictures/ferenc-almasi-0JD-LiIi2CU-unsplash.jpg",
        "Ferenc Almasi"
      ),
    ];
    let animalImages = [
      imageProperties("./assets/img/Aniamls/polarbear.jpg", "Polar Bear"),
      imageProperties("./assets/img/Aniamls/Cat Up Close.jpg", "Cat Up Close"),
      imageProperties(
        "./assets/img/Aniamls/Dog & Flowers.jpg",
        "Dog & Flowers"
      ),
      imageProperties("./assets/img/Aniamls/Parrot.jpg", "Parrot"),
      imageProperties("./assets/img/Aniamls/Grey Cat.jpg", "Grey Cat"),
      imageProperties("./assets/img/Aniamls/Two Cats.JPG", "Two Cats"),
      imageProperties(
        "./assets/img/Aniamls/Sleeping Jaguar.jpg",
        "Sleeping Jaguar"
      ),
      imageProperties(
        "./assets/img/Aniamls/Sleeping Puppy.jpg",
        "Sleeping Puppy"
      ),
      imageProperties("./assets/img/Aniamls/Bird Art.JPG", "Bird Art"),
      imageProperties(
        "./assets/img/Aniamls/Another PolarBear.jpg",
        "Another Polar Bear"
      ),
    ];

    let wallpapers = [
      imageProperties("./assets/img/Wallpapers/img1.jpg", "The Moon"),
      imageProperties("./assets/img/Wallpapers/img2.jpg", "Asphalt Road"),
      imageProperties("./assets/img/Wallpapers/img3.jpg", "The Beach"),
      imageProperties("./assets/img/Wallpapers/img4.jpg", "Sunset"),
      imageProperties("./assets/img/Wallpapers/img5.jpg", "Cliff"),
      imageProperties("./assets/img/Wallpapers/img6.jpg", "Towards The Sea"),
      imageProperties("./assets/img/Wallpapers/img7.jpg", "Petra Deer"),
      imageProperties("./assets/img/Wallpapers/img8.jpg", "Qingbao Meng"),
      imageProperties("./assets/img/Wallpapers/img9.jpg", "Gears"),
      imageProperties("./assets/img/Wallpapers/img10.jpg", "Horizon"),
    ];

    let backgrounds = [
      imageProperties("./assets/img/Backgrounds/img1.jpg", "Floating Lantern"),
      imageProperties("./assets/img/Backgrounds/img2.jpg", "Brick Wall"),
      imageProperties("./assets/img/Backgrounds/img3.jpg", "Red Background"),
      imageProperties("./assets/img/Backgrounds/img4.jpg", "Black Background"),
      imageProperties("./assets/img/Backgrounds/img5.jpg", "Brown Background"),
      imageProperties("./assets/img/Backgrounds/img6.jpg", "Coffee"),
      imageProperties("./assets/img/Backgrounds/img7.jpg", "Wall Art"),
      imageProperties("./assets/img/Backgrounds/img8.jpg", "Water Waves"),
      imageProperties("./assets/img/Backgrounds/img9.png", "Sea Edge"),
      imageProperties("./assets/img/Backgrounds/img10.jpg", "Underwater"),
    ];

    return [codeImages, animalImages, wallpapers, backgrounds];
  };
}


function shuffleArray(array) {
  let [currentIndex, tempoaryValue, randomIndex] = [array.length, null, null];
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [tempoaryValue, array[currentIndex]] = [
      array[currentIndex],
      array[randomIndex],
    ];
    array[randomIndex] = tempoaryValue;
  }
  return array;
}


function BurgerFunctions() {
  function toggleClass() {
    $(".nav-links").toggleClass("nav-active");
    $("body").toggleClass("active");
    $(".burger").toggleClass("toggle");
  }

  this.navAnimation = (_) => {
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
  };

  this.removeNav = (_) => {
    if ($(".nav-links").hasClass("nav-active")) {
      toggleClass();

      document.querySelectorAll(".nav-links li").forEach((link) => {
        if (link.style.animation) {
          link.style.animation = "";
        }
      });
    }
  };
}

function DisplayImages() {
  function createImgElements(imageProperty, ids, hook) {
    imageProperty.forEach((image) => {
      let div = $("<div class='contain'></div>");
      let img = $(`<img class="image" id=${ids++}>`);
      img.attr("src", image.src);
      img.attr("alt", image.alt);
      div.append(img);
      $("#" + hook).append(div);
    });
  }

  this.displayImages = (_) => {
    let [
      codeImages,
      animalImages,
      wallpapers,
      backgrounds,
    ] = new ImageGroupsAndProperties().imageGroups();

    createImgElements(shuffleArray(codeImages), 1, "hook");
    createImgElements(shuffleArray(animalImages), 11, "hook1");
    createImgElements(shuffleArray(wallpapers), 21, "hook2");
    createImgElements(shuffleArray(backgrounds), 31, "hook3");
  };
}

function ImageChanger() {
  let imageNumber = 0;
  let lastImageNumber = 40;

  this.changeImageSrc = (id, type = "number") => {
    let currentsrc = "";
    if (type == "number") {
      id = id.toString();
      currentsrc = $("#" + id).attr("src");
      $("#placeholder").data("target", id);
      $("#placeholder").attr("src", $("#" + id).attr("src"));
      $("#download").attr("href", $("#" + id).attr("src"));
      $("#label").text($("#" + id).attr("alt"));
      btnColor(imageNumber, lastImageNumber);
    } else {
      currentsrc = $(id).attr("src");
      $("#placeholder").data("target", $(id).attr("id"));
      $("#placeholder").attr("src", currentsrc);
      $("#download").attr("href", currentsrc);
      imageNumber = $("#placeholder").data("target");
      $("#label").text($(id).attr("alt"));
      btnColor(imageNumber, lastImageNumber);
    }
  };

  this.next = (_) => {
    if (imageNumber < lastImageNumber) {
      imageNumber++;
      this.changeImageSrc(imageNumber);
    }
  };

  this.previous = (_) => {
    if (imageNumber > 1) {
      imageNumber--;
      this.changeImageSrc(imageNumber);
    }
  };
}

class Modal {
  static showModal() {
    $(".modal").addClass("active");
    $(".overlay").addClass("active");
    $(".container").addClass("active");
    $("body").addClass("active");
    $("nav").addClass("active");
  }

  static removeModal() {
    $(".modal").removeClass("active");
    $(".overlay").removeClass("active");
    setTimeout((_) => {
      $(".container").removeClass("active");
    }, 300);
    $("body").removeClass("active");
    $("nav").removeClass("active");
  }
}

$(document).ready((_) => {
  new DisplayImages().displayImages();
  let ImgChanger = new ImageChanger();
  let Burger = new BurgerFunctions();

  $(window).resize((e) => {
    if (window.screen.width > 800 && $("body").hasClass("active")) {
      Burger.removeNav();
    }
  });

  $(".burger").click((e) => {
    Burger.navAnimation();
  });

  $(".link").click((e) => {
    Burger.removeNav();
  });

  $(".image").click((e) => {
    ImgChanger.changeImageSrc(e.currentTarget, "target");
    !$(".nav-links").hasClass("nav-active") && Modal.showModal();
  });

  $(".btn").click((e) => {
    if ($(e.currentTarget).hasClass("next")) {
      ImgChanger.next();
    } else {
      ImgChanger.previous();
    }
  });

  $("#close").click((_) => {
    Modal.removeModal();
  });
});
