document.addEventListener("DOMContentLoaded", function () {
    const html = document.documentElement;
    const btnIncrease = document.getElementById("increase-font");
    const btnDecrease = document.getElementById("decrease-font");
    const btnContrast = document.getElementById("contrast-toggle");

    let fontSize = 100; // porcentagem

    btnIncrease.addEventListener("click", () => {
        fontSize += 10;
        html.style.fontSize = fontSize + "%";
    });

    btnDecrease.addEventListener("click", () => {
        fontSize -= 10;
        html.style.fontSize = fontSize + "%";
    });

    btnContrast.addEventListener("click", () => {
        const isContrast = html.getAttribute("data-contrast") === "true";
        html.setAttribute("data-contrast", !isContrast);
    });
});
