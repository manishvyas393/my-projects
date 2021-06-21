window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const keys = document.querySelectorAll('.key');
    if (!audio) return;
    audio.play();
    key.classList.add('playing');

    const remoTransition = (e) => {
        if (e.propertyName !== 'transform') {
            return;
        }
        key.classList.remove('playing');


    }

    keys.forEach(key => key.addEventListener('transitionend', remoTransition));

});