const player = require('play-sound')();

export const addSound = function(times, duration, soundFile) {
    for (let i = 1; i < times + 1; i++) {
        setTimeout(function () {
            player.play(soundFile, (err) => {
                if (err) console.log(`Could not play sound: ${err}`);
            });
        }, i * duration);
    }
} 
