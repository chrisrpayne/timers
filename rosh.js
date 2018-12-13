const player = require('play-sound')();

const roshSounds = require('./rosh-sounds');
console.log('rosh sounds is ', roshSounds);


const addSound = function(times, duration, offset, soundFile, text) {
    duration = duration * 1000
    offset = offset * 1000
    for (let i = 1; i < times + 1; i++) {
        setTimeout(function () {
            console.log(text, new Date().toISOString());
            
            player.play(`./sounds/${soundFile}`, (err) => {
                if (err) console.log(`Could not play sound: ${err}`);
            });
        }, ((i * duration) - offset));
    }
} 

addSound(1, 180, 0, roshSounds[3], '2 minutes left!');
addSound(1, 240, 0, roshSounds[0], '1 minute left!');
addSound(1, 241, 0, roshSounds[1], '1 minute left!');
addSound(1, 242, 0, roshSounds[2], '1 minute left!');
addSound(1, 270, 0, roshSounds[4], 'Aegis expires soon!');
addSound(1, 300, 0, roshSounds[4], 'Aegis expired!');
addSound(1, 480, 0, roshSounds[3], 'Rosh could be back up!');
addSound(1, 660, 0, roshSounds[5], 'Rosh is definitely back up!');

