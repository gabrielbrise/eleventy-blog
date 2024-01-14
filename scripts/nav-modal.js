function ToggleModal() {
    var navBtn = document.getElementById("nav-btn")
    navBtn.classList.toggle("nav-show")

    var modal = document.getElementById("nav-modal")
    modal.classList.toggle("nav-show")
}