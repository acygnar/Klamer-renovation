var tabBtn = document.querySelectorAll(".tabs__item");
var tabContent = document.querySelectorAll(".tabs__content");

function openTabs(e) {
   var btn = e.currentTarget;
   var dataName = btn.dataset.tab;
    tabContent.forEach(function(e) {
      e.classList.remove("active");
   });
    tabBtn.forEach(function(e) {
      e.classList.remove("active");
   });
    document.querySelector("#" + dataName).classList.add("active");
    btn.classList.add("active");
}

tabBtn.forEach(function(e) {
   e.addEventListener("click", openTabs);
});

var galleryItems = document.querySelectorAll(".tabs__image");
var galleryElements = document.querySelectorAll(".image__text");

function addHover(){
   galleryItems.forEach(galleryItem => galleryItem.classList.remove("over"));
   galleryItems.forEach(() =>this.classList.add("over"));
};
function removeHover(){
   galleryItems.forEach(galleryItem => galleryItem.classList.remove("over"));
};

galleryItems.forEach(function(e){
   e.addEventListener("mouseover", addHover);
   e.addEventListener("mouseleave", removeHover);
});

var burger = document.querySelector(".nav__mobile-burger");
var burgerItems = document.querySelectorAll(".burger__item");

function activeBurger(){
   burgerItems.forEach(burgerItem => burgerItem.classList.toggle("active"));
}
burger.addEventListener("click", activeBurger);

