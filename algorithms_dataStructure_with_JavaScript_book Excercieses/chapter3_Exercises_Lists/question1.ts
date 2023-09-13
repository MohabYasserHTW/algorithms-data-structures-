import List from "./List_implementation"
/*
    Write a function that inserts an element into a list only if the element to be inserted
    is larger than any of the elements currently in the list. Larger can mean either greater
    than when working with numeric values, or further down in the alphabet, when
    working with textual values.
*/

const list = new List<string>() 

function insertIfBigger (element: string, list: List<string>) {
    if(list.length() < 1){
        list.append(element)
    }else{
        for(list.front(); list.currPosition() < list.length() ; list.next()){
            
            if(element > list.getElement()){
                list.append(element)
                break;
            }
        }
    }
}

//test
list.append("Z")
list.append("B")
list.append("C")
list.append("E")
list.append("F")

console.log(list.toString()) // Z,B,C,E,F

insertIfBigger("D", list)

console.log(list.toString()) // Z,B,C,E,F,D
