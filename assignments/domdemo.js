window.onload = () => {
    const btn = document.querySelector("button");
    function random(num) {
        return Math.floor(Math.random() * num + 1);
    }

    btn.addEventListener("click",() => {
        const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

        document.body.style.backgroundColor = rndColor;
    });
}