const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {

        document.documentElement.removeAttribute("data-theme");

        themeToggle.textContent = "☀️ Light";

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );

        themeToggle.textContent = "🌙 Dark";

    }

});