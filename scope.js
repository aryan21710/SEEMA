let varOne = 'varOne'

if (true){
    console.log('varOne')
    //this will print as the varTwo is defined inside this block
    let varTwo = ('varTwo')
    console.log('varTwo')
    
    if (true){
        let varFour = 'varFour'
    }
}

if (true){
    let varThree = 'varThree'
}
//this will not print as there's no global scope called varTwo
console.log(varTwo)