/* =====================================================
   PROMAX TOOLS HUB
   DARK MODE SYSTEM
   VERSION 1.0
   ===================================================== */


/* =====================================================
   THEME STORAGE KEY
   ===================================================== */

const THEME_KEY = "promax-theme";


/* =====================================================
   APPLY SAVED THEME
   ===================================================== */

const savedTheme =
    localStorage.getItem(THEME_KEY);

if (savedTheme) {

    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );

}


/* =====================================================
   TOGGLE THEME
   ===================================================== */

function toggleTheme() {

    const currentTheme =
        document.documentElement.getAttribute(
            "data-theme"
        );

    const newTheme =
        currentTheme === "light"
            ? "dark"
            : "light";

    document.documentElement.setAttribute(
        "data-theme",
        newTheme
    );

    localStorage.setItem(
        THEME_KEY,
        newTheme
    );

}


/* =====================================================
   ATTACH TO BUTTON
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const themeButton =
            document.getElementById(
                "themeToggle"
            );

        if (themeButton) {

            themeButton.addEventListener(
                "click",
                toggleTheme
            );

        }

    }
);