function exo6() {
    let augmenter = document.querySelector("#Augmenter");
    let diminuer = document.querySelector("#Diminuer");
    let resultat = document.querySelector("#resultat");
    let compteur = 0;
    augmenter.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        compteur += 1;
        resultat.innerHTML = compteur
    }

    diminuer.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation(); compteur -= 1;
        resultat.innerHTML = compteur
    }
}

exo6()