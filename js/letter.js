var buttonMap = document.querySelector(".button-map");
var letterClose = document.querySelector(".modal-close");
var letterForm = document.querySelector(".letter-form");
var loginLogin = document.querySelector(".surname");
var eMail = document.querySelector(".mail");

var isStorageSupport = true;
var storage = "";

var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".map-show");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

window.addEventListener("keydown", function(evt) {
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

buttonMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    letterForm.classList.add("modal-show");
    letterForm.classList.remove("modal-error");

    if (storage) {
        loginLogin.value = storage;
        eMail.focus();
    } else {
        loginLogin.focus();
    }
});

letterClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    letterForm.classList.remove("modal-show");
});

letterForm.addEventListener("submit", function(evt) {
    if (!loginLogin.value || !eMail.value) {
        evt.preventDefault();
        letterForm.classList.remove("modal-error");
        letterForm.offsetWidth = loginPopup.offsetWidth;
        letterForm.classList.add("modal-error");

    } else {
        localStorage.setItem("login", loginLogin.value);
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (letterForm.classList.contains("modal-show")) {
            evt.preventDefault();
            letterForm.classList.remove("modal-show");
            letterForm.classList.remove("modal-error");
        }
    }
});

/*проверка 2*/