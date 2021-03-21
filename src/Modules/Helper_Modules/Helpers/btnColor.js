
export default function btnColor(count, lastImageNumber) {
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
