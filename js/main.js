var SongPaused = true;
var song = " ";
var delayTime = 200;
var currentNote = 0;
var piano = [];
piano[0] = new Howl({ src: ['sound/piano/f1.wav'], volume: 1, preload: true });
piano[1] = new Howl({ src: ['sound/piano/fs1.wav'], volume: 1, preload: true });
piano[2] = new Howl({ src: ['sound/piano/g1.wav'], volume: 1, preload: true });
piano[3] = new Howl({ src: ['sound/piano/gs1.wav'], volume: 1, preload: true });
piano[4] = new Howl({ src: ['sound/piano/a1.wav'], volume: 1, preload: true });
piano[5] = new Howl({ src: ['sound/piano/as1.wav'], volume: 1, preload: true });
piano[6] = new Howl({ src: ['sound/piano/b1.wav'], volume: 1, preload: true });
piano[7] = new Howl({ src: ['sound/piano/c2.wav'], volume: 1, preload: true });
piano[8] = new Howl({ src: ['sound/piano/cs2.wav'], volume: 1, preload: true });
piano[9] = new Howl({ src: ['sound/piano/d2.wav'], volume: 1, preload: true });
piano[10] = new Howl({ src: ['sound/piano/ds2.wav'], volume: 1, preload: true });
piano[11] = new Howl({ src: ['sound/piano/e2.wav'], volume: 1, preload: true });
piano[12] = new Howl({ src: ['sound/piano/f2.wav'], volume: 1, preload: true });
PlaySong();

//write macro to text function
function writeMacro() {
    currentNote = 0;
    song = $("#song").val() + " ";
    delayTime = $("#delayTime").val();
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
    var currentInstrument;

    setInterval(function() {
        if (!SongPaused) {
            if (currentNote === song.length - 1) {
                currentNote = 0;
            }
            switch(song[currentNote]) {
                case 'a':
                    currentInstrument = piano[0];
                    piano[0].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[0].fade(1, 0, (delayTime * sustains));
                    break;
                case 'w':
                    currentInstrument = piano[1];
                    piano[1].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[1].fade(1, 0, (delayTime * sustains));
                    break;
                case 's':
                    currentInstrument = piano[2];
                    piano[2].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[2].fade(1, 0, (delayTime * sustains));
                    break;
                case 'e':
                    currentInstrument = piano[3];
                    piano[3].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[3].fade(1, 0, (delayTime * sustains));
                    break;
                case 'd':
                    currentInstrument = piano[4];
                    piano[4].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[4].fade(1, 0, (delayTime * sustains));
                    break;
                case 'r':
                    currentInstrument = piano[5];
                    piano[5].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[5].fade(1, 0, (delayTime * sustains));
                    break;
                case 'f':
                    currentInstrument = piano[6];
                    piano[6].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[6].fade(1, 0, (delayTime * sustains));
                    break;
                case 'g':
                    currentInstrument = piano[7];
                    piano[7].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[7].fade(1, 0, (delayTime * sustains));
                    break;
                case 'y':
                    currentInstrument = piano[8];
                    piano[8].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[8].fade(1, 0, (delayTime * sustains));
                    break;
                case 'h':
                    currentInstrument = piano[9];
                    piano[9].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[9].fade(1, 0, (delayTime * sustains));
                    break;
                case 'u':
                    currentInstrument = piano[10];
                    piano[10].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[10].fade(1, 0, (delayTime * sustains));
                    break;
                case 'j':
                    currentInstrument = piano[11];
                    piano[11].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[11].fade(1, 0, (delayTime * sustains));
                    break;
                case 'i':
                    currentInstrument = piano[12];
                    piano[12].play();
                    var sustains = 1;
                    while (true) {
                        if (song[currentNote + sustains] === '-') {
                            sustains++;
                        }
                        else {
                            break;
                        }
                    }
                    piano[12].fade(1, 0, (delayTime * sustains));
                    break;
            }
            currentNote++;
        }
    }, delayTime);
}

function pauseSong() {
    SongPaused = true;
    $("#songToggle").attr("onClick", "ResumeSong()").attr("value", "Play");
}

function ResumeSong() {
    SongPaused = false;
    $("#songToggle").attr("onClick", "pauseSong()").attr("value", "Pause");
}