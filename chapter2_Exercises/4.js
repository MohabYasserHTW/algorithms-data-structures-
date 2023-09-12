/*
    Create an object that stores individual letters in an array and has a function for
    displaying the letters as a single word. 
*/

function Letters () {
    this.data = [];
    this.add = (letter) => this.data.push(letter);
    this.makeAWord = () =>{
        var word = ""
        this.data.forEach(letter => word += letter);
        console.log(word);
    }
}

//test

var letters = new Letters();

letters.add("m")
letters.add("o")
letters.add("h")
letters.add("a")
letters.add("b")

letters.makeAWord()