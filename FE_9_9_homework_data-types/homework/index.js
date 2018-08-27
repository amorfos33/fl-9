function findType(arguments) {
    return typeof arguments;
}
function forEach(array, fn){
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        fn(el);
    }
}
function map(array, fn){
    let newArr = [];
    let step =3;
    forEach(array, el => newArr.push(fn(el+step))); 
    return newArr;  
}
function filter(array, fn){
    let newArrFiltered = [];
    let pointNumber = 3;
    for (let i = 0; i < array.length; i++) {
        if(i>pointNumber){
            newArrFiltered.push(i);
        }
    }
    return newArrFiltered;
}
function getAdultAppleLovers(data){
    return map(filter(data, (el) => {
        return el.age >= 18 && el.favoriteFruit === 'apple';
    }), (el) => {
        return el.name;
    });    
}
function keys(object) {
    let resultKeys = [];
    for (let prop in object) {
        if(object.hasOwnProperty(prop)){
            resultKeys.push(prop);
        }
    }
    return resultKeys;
}
function values(object){
    let newArr = [];
    for(let n in object){
        if(object[n]) {
        newArr.push(object[n]);
        }
    }
    return newArr;
}
function showFormattedDate(date) {
    let shortMounth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${shortMounth[date.getMonth()]}, ${date.getFullYear()} `;
}