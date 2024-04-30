// My code
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

// Optimized code
// var numberOfBottles = 99;

// function printVerse(n) {
//     let bottleWord = n === 1 ? "bottle" : "bottles";
//     console.log(n + " " + bottleWord + " of beer on the wall,");
//     console.log(n + " " + bottleWord + " of beer.");
//     console.log("Take one down and pass it around,");
// }

// while (numberOfBottles > 0) {
//     printVerse(numberOfBottles);
//     numberOfBottles--;

//     if (numberOfBottles > 0) {
//         let nextBottleWord = numberOfBottles === 1 ? "bottle" : "bottles";
//         console.log(numberOfBottles + " " + nextBottleWord + " of beer on the wall.");
//     } else {
//         console.log("No more bottles of beer on the wall.");
//     }
    
//     console.log(""); // Пустая строка для разделения куплетов
// }

// Конечная часть песни, когда пива больше нет
// console.log("No more bottles of beer on the wall,");
// console.log("No more bottles of beer.");
// console.log("Go to the store and buy some more,");
// console.log("99 bottles of beer on the wall.");