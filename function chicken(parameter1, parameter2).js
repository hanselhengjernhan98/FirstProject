function chicken(parameter1, parameter2) {
    //codes
    return;
}

const chicken = function(parameter1, parameter2){
    //codes
    return;
}

function calRectangle(x=10,y=20){
    const area = x * y
    return area;
}

const i = 20;;
const j = 30;

const area = calRectangle(i,j);
console.log(area);

let points = [2, 10, 125, 79, 83]

points.sort(function (a,b) {
    return a-b;
});//once they used they cannot be used again this is an annoynmo0us function. this sorts numbers 


//const retNum = () => 123;
//const retNum1 = () => 5*6;

//const calRectangle = (x,y) =>x*y;
//const calHypotenuse = (x,y) => {
    const hypotenuse = Math.sqrt(x**2 + y**2);
    return Math.round(hypotenuse*1000)/1000);
};

const setVar = () => {
    return [1,2,3,4,5];
};

const getUser = () => {
    return {name: "zebra", address: "zoo ave"};
}

const {name, address} = getUser(); // the parameters here (name and address) have to be the same as what is in getUser

const{name: newName, address: newAddress} = getUser();










