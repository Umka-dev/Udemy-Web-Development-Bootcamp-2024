document.addEventListener("DOMContentLoaded", function() {
    var numberOfBottles = 99;
    var songContainer = document.getElementById("songContainer");
    var songText = "";

    function printVerse(n) {
        let bottleWord = n === 1 ? "bottle" : "bottles";
        songText += n + " " + bottleWord + " of beer on the wall,\n";
        songText += n + " " + bottleWord + " of beer.\n";
        songText += "Take one down and pass it around,\n";
    }

    while (numberOfBottles > 0) {
        printVerse(numberOfBottles);
        numberOfBottles--;

        if (numberOfBottles > 0) {
            let nextBottleWord = numberOfBottles === 1 ? "bottle" : "bottles";
            songText += numberOfBottles + " " + nextBottleWord + " of beer on the wall.\n\n";
        } else {
            songText += "No more bottles of beer on the wall.\n\n";
        }
    }

    songText += "No more bottles of beer on the wall,\n";
    songText += "No more bottles of beer.\n";
    songText += "Go to the store and buy some more,\n";
    songText += "99 bottles of beer on the wall.\n";

    songContainer.textContent = songText;
});