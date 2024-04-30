var numberOfBottles = 99
while (numberOfBottles >= 1) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";}   
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall,");
    console.log(numberOfBottles + " " + bottleWord + " of beer.");
    console.log("Take one down and pass it around,");
	numberOfBottles--;
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
        console.log(" ");
    } else if (numberOfBottles === 0) {
        bottleWordNo = "No more bottles";
        console.log(bottleWordNo + " of beer on the wall.");
        console.log(" ");
        console.log(bottleWordNo + " of beer on the wall,");
        console.log(bottleWordNo + " of beer.");
        console.log("Go to the store and buy some more,");
	    console.log("99 bottles of beer on the wall.");
        
    } else {
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    console.log(" ");}
}