
const showDuke = () => {
    document.getElementById("duke").classList.remove("duke");
}

const hideDuke = () => {
    document.getElementById("duke").classList.add("duke");
}

window.onload = () => {
    document.getElementById("button-show").onclick = showDuke;
    document.getElementById("button-hide").onclick = hideDuke;
}



const moveSquare = () => {
    document.getElementById("square").classList.add("move-square");
}

window.onload = () => {
    document.getElementById("button-move").onclick = moveSquare;
}

const writeMessage = () => {
    const productName = document.getElementById("txt-product-name").value;
    const productComment = document.getElementById("txt-comment").value;

    const messageP = document.getElementById("message");

    messageP.innerHTML = productName;
    messageP.innerHTML = productComment;


}

window.onload = () => {
    document.getElementById("txt-product-name").onclick = writeMessage;
    document.getElementById("txt-comment").click = writeMessage;

}