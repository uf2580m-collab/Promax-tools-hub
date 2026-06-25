/* =====================================================
   PROMAX TOOLS HUB
   MAIN JAVASCRIPT
   VERSION 1.0
   ===================================================== */


/* =====================================================
   WEBSITE LOADER
   ===================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


/* =====================================================
   SMOOTH SCROLL
   ===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =====================================================
   CURRENT YEAR FOOTER
   ===================================================== */

const footerYear = document.getElementById("currentYear");

if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}


/* =====================================================
   CATEGORY CARD HOVER EFFECT
   ===================================================== */

const categoryCards =
    document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});


/* =====================================================
   TOOL CARD HOVER EFFECT
   ===================================================== */

const toolCards =
    document.querySelectorAll(".tool-card");

toolCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});


/* =====================================================
   FUTURE SEARCH SYSTEM PLACEHOLDER
   ===================================================== */

function initializeSearchSystem() {

    console.log(
        "Search System Ready For Future Upgrade"
    );

}

initializeSearchSystem();


/* =====================================================
   FUTURE TOOL SYSTEM PLACEHOLDER
   ===================================================== */

function initializeToolsSystem() {

    console.log(
        "Tools System Ready"
    );

}

initializeToolsSystem();