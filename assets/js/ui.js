/* =====================================================
   PROMAX TOOLS HUB
   UI SYSTEM
   VERSION 1.0
   ===================================================== */


/* =====================================================
   SAFE ELEMENT SELECTOR
   ===================================================== */

function $(selector) {

    return document.querySelector(selector);

}

function $all(selector) {

    return document.querySelectorAll(selector);

}


/* =====================================================
   HEADER SCROLL EFFECT
   ===================================================== */

window.addEventListener("scroll", () => {

    const header = $(".header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.backdropFilter = "blur(25px)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.20)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================================
   CATEGORY CARD INTERACTIONS
   ===================================================== */

$all(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        console.log(
            "Category Selected:",
            card.textContent.trim()
        );

    });

});


/* =====================================================
   TOOL CARD INTERACTIONS
   ===================================================== */

$all(".tool-card").forEach(card => {

    card.addEventListener("click", () => {

        console.log(
            "Tool Selected:",
            card.textContent.trim()
        );

    });

});


/* =====================================================
   HERO SEARCH UI
   ===================================================== */

const searchInput =
    document.querySelector(".hero-search input");

if (searchInput) {

    searchInput.addEventListener("focus", () => {

        searchInput.style.transform =
            "scale(1.02)";

    });

    searchInput.addEventListener("blur", () => {

        searchInput.style.transform =
            "scale(1)";

    });

}


/* =====================================================
   BUTTON RIPPLE PLACEHOLDER
   ===================================================== */

document.querySelectorAll("button")
.forEach(button => {

    button.addEventListener("click", () => {

        console.log(
            "Button Clicked"
        );

    });

});


/* =====================================================
   FUTURE UI MODULES
   ===================================================== */

const UI = {

    openModal() {

        console.log("Future Modal");

    },

    closeModal() {

        console.log("Future Modal Close");

    },

    showToast(message) {

        console.log(
            "Toast:",
            message
        );

    }

};


/* =====================================================
   INITIALIZATION
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "ProMax UI System Loaded"
        );

    }
);