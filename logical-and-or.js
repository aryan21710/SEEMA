let temp = 50

//statement has to be true on both sides of the and operator

if (temp >= 60 && temp <=90){
    console.log('print this msg')
} else if (temp <=0 || temp >=120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}


let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){ 
    console.log('------------------------------------------')
    console.log('Only offer up Vegan Dishes')
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('------------------------------------------')
    console.log('Make sure to offer up some Vegan Dishes')   
} else {
    console.log('------------------------------------------')
    console.log('Offer up anything on the menu')
}
