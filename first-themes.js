const body = document.getElementById('body')

function theme() {
    var themeValue = document.querySelector('input[name="theme"]:checked').value;

    if (themeValue == 'spiced') {

        body.classList.add('spiced-setting');

        //remove

        body.classList.remove('spoopy-setting');

        body.classList.remove('meem-setting');

    } else if (themeValue == 'spoopy') {

        body.classList.add('spoopy-setting');

        //remove

        body.classList.remove('spiced-setting');

        body.classList.remove('meem-setting');

    } else if (themeValue == 'meem') {

        body.classList.add('meem-setting');

        //remove

        body.classList.remove('spiced-setting');

        body.classList.remove('spoopy-setting');

    }
}