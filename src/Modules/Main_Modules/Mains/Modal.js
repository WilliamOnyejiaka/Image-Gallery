export default class Modal {
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
    setTimeout( _ => {
      $(".container").removeClass("active");
    }, 300);
     $("body").removeClass("active"); 
    $("nav").removeClass("active");  
  }
}
