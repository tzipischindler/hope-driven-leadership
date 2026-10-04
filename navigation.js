document.querySelectorAll(".nav-toggle").forEach((toggle) => {
    const menu = document.getElementById(toggle.getAttribute("aria-controls"));

    if (!menu) {
        return;
    }

    const closeMenu = () => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
        menu.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isExpanded));
        toggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
        menu.classList.toggle("is-open", !isExpanded);
    });

    menu.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});
