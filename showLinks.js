{
    const int = setInterval(_ => {

            for (const l of document.querySelectorAll('a[href^="/generator/"]')) {
                if (l.classList.length === 1) {
                    l.innerText = l.href.split("/generator/")[1];
					l.href = "exported"
                }
            }

        }, 999)
}
