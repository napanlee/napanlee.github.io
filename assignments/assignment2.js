var rectangle = document.getElementById("rectangle");

rectangle.addEventListener("mouseover", function() {
  rectangle.style.display = "none";
});

rectangle.addEventListener("mouseout", function() {
  rectangle.style.display = "block";
});