"use strict";

onload = function getSize() {
  let w = this.document.documentElement.clientWidth;
  let h = this.document.documentElement.clientHeight;
  this.document.getElementById("wh").innerHTML = "<h1>Screen Size:<br><br>Width= " + w + " px<br>" + "Height= " + h + "  px<h1>"
  this.window.addEventListener("resize", getSize);
  if (w < 1200 && w >= 600) {
    this.document.body.style.backgroundColor = "#42789e";
  } else if (w < 600) {
    this.document.body.style.backgroundColor = "#967bb6";
  } else if (w >= 1200) {
    this.document.body.style.backgroundColor = "rgb(32, 117, 89)";
  }
}