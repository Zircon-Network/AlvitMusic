window.playGen = gen => {
document.querySelector(`a[href^="/generator/${gen}"]`).querySelectorAll('[class="MuiSvgIcon-root"]')[1].parentElement.click();
}
