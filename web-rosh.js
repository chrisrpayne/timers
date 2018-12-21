
            
const roshSounds = [
    'Roshan_footstep1.mp3',
    'Roshan_footstep2.mp3',
    'Roshan_footstep3.mp3',
    'Roshan_Slam.mp3',
    'Aegis_of_the_Immortal_expire.mp3',
    'Aegis_of_the_Immortal.mp3',
]

const audio = new Audio(`./sounds/${roshSounds[3]}`)
audio.play();

const webPlay = function(times, duration, offset, soundFile, text) {
    duration = duration * 1000
    offset = offset * 1000
    for (let i = 1; i < times + 1; i++) {
        setTimeout(function () {
            console.log(text, new Date().toISOString());
            new Audio(`./sounds/${soundFile}`).play();
        }, ((i * duration) - offset));
    }
} 

$(() => {
    $('#rosh').on('click', ()=>{
        const audio = new Audio(`./sounds/${roshSounds[4]}`)
        audio.play();

        webPlay(1, 180, 0, roshSounds[3], '2 minutes left!');
        webPlay(1, 240, 0, roshSounds[0], '1 minute left!');
        webPlay(1, 241, 0, roshSounds[1], '1 minute left!');
        webPlay(1, 242, 0, roshSounds[2], '1 minute left!');
        webPlay(1, 270, 0, roshSounds[4], 'Aegis expires soon!');
        webPlay(1, 300, 0, roshSounds[4], 'Aegis expired!');
        webPlay(1, 480, 0, roshSounds[3], 'Rosh could be back up!');
        webPlay(1, 660, 0, roshSounds[5], 'Rosh is definitely back up!');
    })
})

