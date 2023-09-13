
import List from "./List_implementation";
/* 
    Create a Person class that stores a person’s name and their gender. Create a list of
    at least 10 Person objects. Write a function that displays all the people in the list of
    the same gender.
*/


class Person {

    private name: string = ""
    private gender = "M" || "F"

    constructor(name: string, gender: "M" | "F") {
        this.name = name;
        this.gender = gender
    }

    getName(): string {
        return this.name
    }
    getGender(): string {
        return this.gender
    }
}

let personList = new List<Person>()



personList.append(new Person("mohab","M"))
personList.append(new Person("shosho","F"))
personList.append(new Person("mohab","M"))
personList.append(new Person("shosho","F"))
personList.append(new Person("mohab","M"))
personList.append(new Person("shosho","F"))
personList.append(new Person("mohab","M"))
personList.append(new Person("mohab","M"))
personList.append(new Person("shosho","F"))
personList.append(new Person("shosho","F"))
personList.append(new Person("mohab","M"))
personList.append(new Person("shosho","F"))

function displayAllOfSameGender(gender: "M" | "F", list: List<Person>) {

    for(list.front() ; list.currPosition() < list.length()-1 ; list.next()){
        
        if(list.getElement().getGender() === gender){
            console.log(list.getElement().getName())
        }
    }

}

//test
displayAllOfSameGender("F",personList)