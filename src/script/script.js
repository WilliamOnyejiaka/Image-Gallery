
import {
  Modal,
  ImageChanger,
  DisplayImages,
  BurgerFunctions,
} from "../Modules/Main_Modules/MainLoader.js";

$(document).ready(_ => {
  new DisplayImages().displayImages();
  let ImgChanger = new ImageChanger();
  let Burger = new BurgerFunctions();

  $(window).resize(e => {
    if (window.screen.width > 800 && $("body").hasClass("active")) {
      Burger.removeNav();
    }
  })

  $(".burger").click(e => {
    Burger.navAnimation();
  });

  $(".link").click(e => {  
    Burger.removeNav();
  });

  $(".image").click((e) => {
    ImgChanger.changeImageSrc(e.currentTarget, "target");
    !$(".nav-links").hasClass("nav-active") && Modal.showModal();
  });

  $(".btn").click(e => {
    if ($(e.currentTarget).hasClass("next")) {
      ImgChanger.next();
    } else {
      ImgChanger.previous();
    }
  });

  $("#close").click( _ => {
    Modal.removeModal();
  });
});
