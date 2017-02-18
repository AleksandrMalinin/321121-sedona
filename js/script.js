"use strict";

(function() {
  var link = document.querySelector(".offer-btn"),
  popup = document.querySelector(".form"),
  form = popup.querySelector("form"),
  arrival = popup.querySelector("[name=arrival]"),
  departure = popup.querySelector("[name=departure]"),
  adult = popup.querySelector("[name=adult]"),
  children = popup.querySelector("[name=children]"),
  storageAdult = localStorage.getItem("adult"),
  storageChildren = localStorage.getItem("children");

  adult.value = storageAdult || "0";
  children.value = storageChildren || "0";

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("form-close");
  });

  form.addEventListener("submit", function(event) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value);
  });
})();
