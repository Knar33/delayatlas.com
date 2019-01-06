var song = " ";
var delayTime = 200;
var currentNote = 0;
var loopPlay;
var piano = [];
piano['a'] = new Howl({ src: ['sound/piano/f1.wav'], volume: 1, preload: true });
piano['w'] = new Howl({ src: ['sound/piano/fs1.wav'], volume: 1, preload: true });
piano['s'] = new Howl({ src: ['sound/piano/g1.wav'], volume: 1, preload: true });
piano['e'] = new Howl({ src: ['sound/piano/gs1.wav'], volume: 1, preload: true });
piano['d'] = new Howl({ src: ['sound/piano/a1.wav'], volume: 1, preload: true });
piano['r'] = new Howl({ src: ['sound/piano/as1.wav'], volume: 1, preload: true });
piano['f'] = new Howl({ src: ['sound/piano/b1.wav'], volume: 1, preload: true });
piano['g'] = new Howl({ src: ['sound/piano/c2.wav'], volume: 1, preload: true });
piano['y'] = new Howl({ src: ['sound/piano/cs2.wav'], volume: 1, preload: true });
piano['h'] = new Howl({ src: ['sound/piano/d2.wav'], volume: 1, preload: true });
piano['u'] = new Howl({ src: ['sound/piano/ds2.wav'], volume: 1, preload: true });
piano['j'] = new Howl({ src: ['sound/piano/e2.wav'], volume: 1, preload: true });
piano['i'] = new Howl({ src: ['sound/piano/f2.wav'], volume: 1, preload: true });
var currentInstrument = piano['a'];

//write macro to text function
function writeMacro() {
    pauseSong();
    currentNote = 0;
    song = $("#song").val() + " ";
    delayTime = parseInt($("#delayTime").val(), 10);
    var toggleKey = $("#toggleKey").val();
    
    var generatedMacro = "delayTime = " + delayTime + "\nPause\nloop\n{\n";
    var heldNote = "";
    for (i = 0; i < song.length - 1; i++) {
        if (song[i] === " ") {
            generatedMacro += "sleep delayTime\n";
        }
        else if (song[i] === "-") {
            if (song[i + 1] == "-") {
                generatedMacro += "sleep delayTime\n";
            }
            else {
                generatedMacro += "sleep delayTime\nsend {" + heldNote + " up}\n";
            }
        }
        else {
            if (song[i + 1] === "-") {
                generatedMacro += "send {" + song[i] + " down}\nsleep delayTime\n";
                heldNote = song[i];
            }
            else {
                generatedMacro += "send {" + song[i] + " down}\nsleep delayTime\nsend {" + song[i] + " up}\n";
            }
        }
    };
    
    generatedMacro += "}\nReturn\n" + toggleKey + "::Pause Toggle";
    
    $("#macro").val(generatedMacro);
}

function PlaySong() {
    loopPlay = setInterval(songLoop, delayTime);
}

function songLoop() {
    if (currentNote === song.length - 1) {
        currentNote = 0;
    }
    switch(song[currentNote]) {
        case 'a':
        case 'w':
        case 's':
        case 'e':
        case 'd':
        case 'r':
        case 'f':
        case 'g':
        case 'y':
        case 'h':
        case 'u':
        case 'j':
        case 'i':
            currentInstrument.stop();
            currentInstrument = piano[song[currentNote]];
            piano[song[currentNote]].play();
            break;
        case ' ':
            currentInstrument.stop();
            break;
    }
    currentNote++;
}

function pauseSong() {
    piano['a'].stop();
    piano['w'].stop();
    piano['s'].stop();
    piano['e'].stop();
    piano['d'].stop();
    piano['r'].stop();
    piano['f'].stop();
    piano['g'].stop();
    piano['y'].stop();
    piano['h'].stop();
    piano['u'].stop();
    piano['j'].stop();
    piano['i'].stop();
    clearInterval(loopPlay);
    $("#songToggle").attr("onClick", "ResumeSong()").attr("value", "Play");
}

function ResumeSong() {
    PlaySong();
    $("#songToggle").attr("onClick", "pauseSong()").attr("value", "Pause");
}

function keyPressDown(key) {
    piano[key.key].play()
}