
const showDuke = () => {
    document.getElementById("duke").classList.remove("hide");
}

const hideDuke = () => {
    document.getElementById("duke").classList.add("hide");
}

const moveSquare = () => {
    document.getElementById("square").classList.add("move-square");
}  

const writeMessage = () => {
    const productName = document.getElementById("txt-product-name").value;
    const productComment = document.getElementById("txt-comment").value;

    const messageP = document.getElementById("message");

    messageP.innerHTML += `<section class="comment"><h3>${productName}</h3><p>${productComment}</p></section>`;
}

window.onload = () => {
    document.getElementById("button-show").onclick = showDuke;
    document.getElementById("button-hide").onclick = hideDuke;

    document.getElementById("button-move").onclick = moveSquare;

    document.getElementById("message-button").onclick = writeMessage;
}