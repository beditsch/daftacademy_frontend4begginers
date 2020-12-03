
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
for(var i = 0; i < 3; i++) {
document.querySelectorAll(".hamburger__bar")[i].addEventListener("click", function() {
  document.querySelector(".page-navigation__items").classList.toggle("invisible");
  var hamButton = document.querySelector(".hamburger");
  hamButton.classList.toggle("Xbutton");
});
}

//SUBMIT BUTTON
document.querySelector(".form__button").addEventListener("click", function() {
  var formElement = document.querySelector(".form");
  var formData = new FormData(formElement);
  var tempEl = Object.fromEntries(formData);
  console.log(tempEl);

});



//FILTR KOLORU ZDJĘCIA PO ZJECHANIU Z NIEGO KURSORA (zdjęcie robi się prawie czarno-białe)
for(var i = 0; i < document.querySelectorAll(".gallery__image__animated").length; i++) {
  document.querySelectorAll(".gallery__image__animated")[i].addEventListener("mouseout", function() {
    this.classList.add("gallery__image__faded");
});
}
