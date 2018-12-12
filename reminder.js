const player = require('play-sound')();

const started = process.env.START ? +process.env.START : 0;

// const startedTime = new Date();

// let fiveLater = 0;

// setTimeout(() => {
//     fiveLater = new Date()
//     console.log('fiveLater at ', fiveLater);
//     console.log('diff is ', startedTime - fiveLater);
// } , 5000)

// console.log('started at ', started);
// console.log('startedTime at ', startedTime);
// console.log('fiveLater at ', fiveLater);
// console.log(new Date().toISOString())



const addSound = function(times, duration, offset, soundFile, text) {
    duration = duration * 1000
    offset = offset * 1000
    for (let i = 1; i < times + 1; i++) {
        setTimeout(function () {
            console.log(text, new Date().toISOString());
            
            player.play(soundFile, (err) => {
                if (err) console.log(`Could not play sound: ${err}`);
            });
        }, ((i * duration) - offset));
    }
} 

let begin = 0;
if (started <= 0) {
    begin = started * -1000;
} else {
    begin = 300000 - (started * 1000); 
    
    addSound(1, 300 - started, 30, './sounds/nova-snack.mp3', 'PUSH LANE FOR ROONES!!!');
    addSound(1, 300 - started, 15, './sounds/midas.mp3', 'GET READY FOR ROONES!!!');
    addSound(1, 300 - started, 0, './sounds/bounty.mp3', 'ROONES!!!');
}

setTimeout(() => {
    console.log('started the countdown at ', new Date().toISOString());
    
    addSound(12, 300, 30, './sounds/nova-snack.mp3', 'PUSH LANE FOR ROONES!!!');
    addSound(12, 300, 15, './sounds/midas.mp3', 'GET READY FOR ROONES!!!');
    addSound(12, 300, 0, './sounds/bounty.mp3', 'ROONES!!!');
}, begin)

console.log('script finished at ', new Date());


// player.play('./sounds/nova-snack.mp3', (err) => {
//     if (err) console.log(`Could not play sound: ${err}`);
// });