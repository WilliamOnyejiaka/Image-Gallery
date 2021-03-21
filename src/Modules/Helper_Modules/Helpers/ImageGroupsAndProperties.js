export default function ImageGroupsAndProperties() {
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
      imageProperties(
        "./assets/img/Aniamls/polarbear.jpg",
        "Polar Bear"
      ),
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
      imageProperties("./assets/img/Wallpapers/img9.jpg","Gears"),
      imageProperties("./assets/img/Wallpapers/img10.jpg","Horizon"),
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
