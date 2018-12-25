//write macro to text function
function writeMacro() {
    var song = $("#song").val() + " ";
    var toggleKey = $("#toggleKey").val();
    var delayTime = $("#delayTime").val();
    
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
    
    generatedMacro += "}\nReturn\nF12::Pause Toggle";
    
    $("#macro").val(generatedMacro);
}