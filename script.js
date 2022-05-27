"use strict";

const menuBtn = document.querySelector(".btn-logo");
const navigation = document.querySelector(".navigation-mobile");
menuBtn.addEventListener("click", function () {
  navigation.classList.toggle("hidden");
});
