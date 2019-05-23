var tabBtn = document.querySelectorAll(".tabs__item");
var tabContent = document.querySelectorAll(".tabs__content");
tabBtn.forEach(function(e) {
   e.addEventListener("click", openTabs);
});
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

var galleryItems = document.querySelectorAll(".tabs__image");
var galleryElements = document.querySelectorAll(".image__text");

galleryItems.forEach(function(e){
   e.addEventListener("click", addHover);
});

function addHover(){
   galleryItems.forEach(galleryItem => galleryItem.classList.remove("over"));
   galleryItems.forEach(() =>this.classList.add("over"));
}
