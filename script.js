var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");   
}

var sizeDropdown = document.getElementById("size-dropdown");
sizeDropdown.addEventListener("change", function() {
  var selectedSize = sizeDropdown.value;
  console.log("Selected size:", selectedSize);
});


