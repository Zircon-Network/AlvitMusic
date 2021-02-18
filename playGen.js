window.playGen = gen => {

    document.querySelector(`a[href^="/generator/${gen}"]`) && document.querySelector(`a[href^="/generator/${gen}"]`).click();

    const i = setInterval(_ => {
        if (document.querySelectorAll("button[type=button]").length === 6) {
            document.querySelectorAll("button[type=button]")[2].click();
            clearInterval(i);
        }
    }, 99)
}
