const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const modalContainer = document.getElementById('modal-container')

openBtn.addEventListener("click", () => {
    modalContainer.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    modalContainer.style.display = "none"
})

window.addEventListener("click", (e) => {
    //closes modal if window is clicked
    if(e.target === modalContainer) {
        modalContainer.style.display = "none"
    }
})