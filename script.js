const myText = document.querySelector(".text");
myText.addEventListener("input", () => {
    let count = (myText.value).length;
    document.querySelector(".characters").textContent = `Total Charachters : ${count}`;
})