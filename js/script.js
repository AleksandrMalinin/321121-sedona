"use strict";

var link = document.querySelector(".offer-btn");
var popup = document.querySelector(".form");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=children]");
var storageAdult = localStorage.getItem("adult");
var storageChildren = localStorage.getItem("children");

adult.value = storageAdult || "";
children.value = storageChildren || "";

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("form-close");
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    localStorage.setItem("adult", adult.value);
    localStorage.setItem("children", children.value);
});
