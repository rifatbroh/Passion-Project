const text = document.getElementById("textarea");
const total = document.getElementById("total-counter");
const remain = document.getElementById("remain-counter");

// update counter 
text.addEventListener("keyup", () => {
    updateCounter();
})

updateCounter();

function updateCounter() {
    total.innerText = text.value.length;
    remain.innerText = text.getAttribute("maxLength") - text.value.length;
}