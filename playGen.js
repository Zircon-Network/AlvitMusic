window.playGen = gen => {

    document.querySelector(`a[href^="/generator/${gen}"]`) && document.querySelector(`a[href^="/generator/${gen}"]`).click();

    const i = setInterval(_ => {
        if (document.querySelectorAll("button[type=button]").length === 6) {
            document.querySelectorAll("button[type=button]")[2].click();
			if(location.href.includes("/generator"))history.back();
            clearInterval(i);
        }
    }, 99)
}
