
$(()=> {
    $("#game-start").on('click', () => {
        let started = $("#startTime").val() || 0;
        let begin = 0;
        if (started < 0) {
            begin = started * -1000;
        } else {
            begin = 300000 - (started * 1000); 
            
            webPlay(1, 300 - started, 30, './sounds/nova-snack.mp3', 'PUSH LANE FOR ROONES!!!');
            webPlay(1, 300 - started, 15, './sounds/midas.mp3', 'GET READY FOR ROONES!!!');
            webPlay(1, 300 - started, 0, './sounds/bounty.mp3', 'ROONES!!!');
        }
        
        setTimeout(() => {
            console.log('started the countdown at ', new Date().toISOString());
            
            webPlay(12, 300, 30, './sounds/nova-snack.mp3', 'PUSH LANE FOR ROONES!!!');
            webPlay(12, 300, 15, './sounds/midas.mp3', 'GET READY FOR ROONES!!!');
            webPlay(12, 300, 0, './sounds/bounty.mp3', 'ROONES!!!');
        }, begin)
        console.log('script finished at ', new Date());
    })
})


