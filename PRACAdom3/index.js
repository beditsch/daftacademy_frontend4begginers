
// zamiana przycisku "kup bilet" na napis
for(var i = 0; i < document.querySelectorAll(".concerts__button").length; i++) {
  document.querySelectorAll(".concerts__button")[i].addEventListener("click", function() {
    var temp = this.parentNode;
    this.parentNode.removeChild(this);
    var newEl = document.createElement("p");
    newEl.classList.add("buttonReplacingText");
    newEl.classList.add("title2");
    newEl.innerHTML = "Have fun!";
    temp.appendChild(newEl);
});
}

// HAMBURGER MENU
document.querySelector(".hamburger").addEventListener("click", function() {
  document.querySelector(".page-navigation__items").classList.toggle("visible");
});


document.querySelector(".form__button").addEventListener("click", function() {
  var formElement = document.querySelector(".form");
  var formData = new FormData(formElement);
  var tempEl = Object.fromEntries(formData);
  console.log(tempEl);

});
