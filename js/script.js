var link = document.querySelector(".offer-btn");
var popup = document.querySelector(".form");

var form = popup.querySelector(".hotels-form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adult = popup.querySelector("[name=adult]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("form-close");
});

form.addEventListener("submit", function(event) {
   if (!arrival.value || !departure.value || !adult.value);
});

/*Еще не доделал*/
