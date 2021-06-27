window.onload = function() {
    let dec = document.getElementById("decoration");
    let tArea = document.getElementById("textarea");

    dec.onclick = function() {
        setInterval(increseFont, 500);
    }

    let blingcb = document.getElementById("bling");

    blingcb.onclick = function() {
        if (blingcb.checked) {
            tArea.classList.add("bling-text");
        } else {
            tArea.classList.remove("bling-text");
        }
    }

    const increseFont = function() {
        let fSize = parseInt(window.getComputedStyle(tArea).fontSize) + 2;
        tArea.style.fontSize = fSize + "pt";
    };


    let pigl = document.getElementById("piglatin");

    pigl.onclick = function() {
        let wordsA = tArea.value.split(" ");

        let newWord = wordsA.map((elem) => {
            if (elem[0].toLowerCase() != 'a' &&
                elem[0].toLowerCase() != 'e' &&
                elem[0].toLowerCase() != 'o' &&
                elem[0].toLowerCase() != 'u') {

                let w = elem.split('');

                let temp = w[0];


                w[0] = w[w.length - 1];
                w[w.length - 1] = temp;


                w.push("-ay");
                return w.join('');

            } else {
                return elem += "-ay";
            }
        });
        tArea.value = newWord.join(" ");
    };

    let malk = document.getElementById("malkovitch");

    malk.onclick = function() {
        let wordsA = tArea.value.split(" ");

        let newW = wordsA.map((elem) => {
            if (elem.length >= 5) {
                return "Malkovich";
            }
            return elem;
        });

        tArea.value = newW;
    }
}