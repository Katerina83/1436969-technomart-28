var buttonMap = document.querySelector(".button-map");
var letterPopup = document.querySelector(".letter-form");
var letterClose = letterPopup.querySelector(".modal-close");
var letterForm = letterPopup.querySelector(".letter-form");
var loginLogin = letterPopup.querySelector(".surname");
var eMail = loginPopup.querySelector(".mail");

var isStorageSupport = true;
var storage = "";

var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

buttonMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    letterPopup.classList.add("modal-show");
    letterPopup.classList.remove("modal-error");

    if (storage) {
        loginLogin.value = storage;
        eMail.focus();
      } else {
        loginLogin.focus();
      }
    });
   
letterClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    letterPopup.classList.remove("modal-show");
  });
  letterForm.addEventListener("submit", function (evt) {
    if (!loginLogin.value || !eMail.value) {
    evt.preventDefault();
    letterPopup.classList.remove("modal-error");
    letterPopup.offsetWidth = loginPopup.offsetWidth;
    letterPopup.classList.add("modal-error");

    }else {
        localStorage.setItem("login", loginLogin.value);
      }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (letterPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        letterPopup.classList.remove("modal-show");
        letterPopup.classList.remove("modal-error");
      }
    }
  });