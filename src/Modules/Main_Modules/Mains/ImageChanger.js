import {btnColor} from '../../Helper_Modules/HelperLoader.js';

export default function ImageChanger() {
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
