/*1. Please write a function that shows the usage of closures */

function count(numbers){
     function reallyCounting(){
        for (var i = 0; i < numbers.length; i++){
            console.log("the current number is " + numbers[i]);
        }
    }
    reallyCounting();
}



/*2. Write function that returns sum of array of items*/

let exampleInput =[9, 1, 22, 0, 2];
let output = 
    exampleInput.reduce((acc, curr)=>{
       return acc+curr;
    });

/*3. Please write a recursive function that flattens a list of 
    items*/

const flatten=(nestedArray)=>{
    let flat =[];
    
    function flattenBeta(nestedArray){
        nestedArray.forEach((el)=>{
            if(Array.isArray(el)){
                flattenBeta(el)
            }else{
                flat.push(el);
            }
        })
    }
    flattenBeta(nestedArray);
    return flat;
}

/*4. Please write a function that finds all common elements of 
    two arrays(only primitive types as array elements, order 
    doesn't matter)*/

const similar =(array1, array2)=>{
    let arrOfCommons= array1.filter((common)=>{

        if (array2.includes(common)){
            return common;
        };

    })
    return arrOfCommons;
}

/*5.  Please write a function that finds all different elements 
    of two arrays(only primitive types as array elements, order 
    doesn't matter)*/
const different =(array1, array2)=>{
    
    let arrOfDiffs =[...array1, ...array2];

    function chop(arrayOne, arrayTwo){
        arrayOne.forEach((diff)=>{
            if (arrayTwo.includes(diff) ){
                arrOfDiffs.splice(arrOfDiffs.indexOf(diff), 1);
                }
            }
        )
    }
    
    chop(array1, array2);
    chop(array2, array1);

    return arrOfDiffs;
}

/*6. Please write a function that takes two arrays of items 
and returns an array of tuples made from two input arrays at 
the same indexes. Excessive items should be dropped. */

function tuples(array1, array2){
    const tuplesObject ={};
    
    for (i=0; i<array1.length; i++){
        tuplesObject[array1[i]]=array2[i];
    }
    return tuplesObject;
}

/*7. Please write a function which takes a path(path 
    is an array of keys) and object, 
    then returns value at this path. If value at 
    path doesn't exists, return undefined. */

    let pathFind = function (object, path, def) {
        let current = object;
        for (var i = 0; i < path.length; i++) {
            if (!current[path[i]]) return def;
            current = current[path[i]];
        }
        return current;
    };

/*8.  Please write compare function which compares 2 objects for equality.*/
const objCompare = (obj1, obj2)=>{
    let holder = 0;

    if(Object.keys(obj1).length!==Object.keys(obj2).length){
        return false;
    }

    for(key1 in obj1){
        for(key2 in obj2){
            if(key2==key1 && obj2[key2]==obj1[key1]){
                holder+=1;
            }
        }   
    }

    if (holder>=Object.keys(obj1).length){
        return true;
    }else{
        return false;
    }
}

/*9. Please write a function which takes a list of keys and an object,
    then returns this object, just without keys from the list*/

const objTerminator =(arr, object) => {
    const objCopy = object;
    arr.forEach((el)=>{
        delete objCopy[`${el}`];
        }
    )
    return objCopy;
}
