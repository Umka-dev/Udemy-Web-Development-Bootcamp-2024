function whosPaying(names) {
    names = ["Angela", "Ben", "Jenny", "Michael", "Chloe", "Tanya", "Nikita"];
    let countNames = names.length;
    alert("There are " + countNames + " names in the list.");
    let randomNamePosition = Math.floor (Math.random() * countNames);
    let randomName = names[randomNamePosition];
    alert("Random position of a name: " + randomNamePosition);
    alert("Random name: " + randomName);
    alert(randomName + ' is going to buy lunch today!');
    return randomName + ' is going to buy lunch today!';
  }
   whosPaying();