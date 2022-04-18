"use strict";

onload = function getSize() {
  let w = this.document.documentElement.clientWidth;
  let h = this.document.documentElement.clientHeight;
  this.document.getElementById("wh").innerHTML = "<h1>Screen Size:<br><br>Width= " + w + " px<br>" + "Height= " + h + "  px<h1>"
  this.window.addEventListener("resize", getSize);

  let title = this.document.getElementById("title");
  
  if (w < 1200 && w >= 600) {
    this.document.body.style.backgroundColor = "#42789e";
    title.textContent = "Background color for screen width between 600px & 1200px";
  } else if (w < 600) {
    this.document.body.style.backgroundColor = "#967bb6";
    title.textContent = "Background color for screen width of less than 600px";
  } else if (w >= 1200) {
    this.document.body.style.backgroundColor = "rgb(32, 117, 89)";
    title.textContent = "Background color for screen width at or more than 1200px";
  }
}
