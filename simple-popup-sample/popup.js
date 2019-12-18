document.getElementById("popup-button").onclick = function () {
    let randomColor = "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")";
    document.body.style.backgroundColor = randomColor
    document.getElementById("color-code").innerHTML = randomColor
};