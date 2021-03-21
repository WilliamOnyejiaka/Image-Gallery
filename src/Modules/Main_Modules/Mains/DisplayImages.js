import {
  shuffleArray,
  ImageGroupsAndProperties as ImageGroups
} from "../../Helper_Modules/HelperLoader.js";

export default function DisplayImages() {
    
    function createImgElements(imageProperty,ids,hook) {
        imageProperty.forEach(image => {
            let div = $( "<div class='contain'></div>");
            let img = $(`<img class="image" id=${ids++}>`);
            img.attr("src", image.src);
            img.attr("alt",image.alt);
            div.append(img);
            $("#" + hook).append(div);
        });
    }


    this.displayImages = _ => {
        let [
          codeImages,
          animalImages,
          wallpapers,
          backgrounds,
        ] = new ImageGroups().imageGroups();

        createImgElements(shuffleArray(codeImages), 1, "hook");
        createImgElements(shuffleArray(animalImages), 11,"hook1");
        createImgElements(shuffleArray(wallpapers), 21, "hook2");
        createImgElements(shuffleArray(backgrounds), 31, "hook3");
    }
    
}