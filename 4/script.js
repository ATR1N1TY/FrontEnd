var button = document.getElementsByTagName("button")
var toggleArrow = document.getElementsByTagName("img")
var i;

for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

