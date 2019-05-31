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
var bd = document.querySelector("body");
var navBar= document.querySelector(".nav")
var mobileList=document.querySelector(".nav__list-mobile")
function activeBurger(){
   burgerItems.forEach(burgerItem => burgerItem.classList.toggle("active"));
   bd.classList.toggle("active");
   navBar.classList.toggle("active");
   mobileList.classList.toggle("active");
}
burger.addEventListener("click", activeBurger);

