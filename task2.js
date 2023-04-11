function showProps(str, obj){
    if (str in obj) return true;
    else return false
}

const obj = {
    model: 'Mercedec',
    color: 'red',
    year: 2023
}


const str = 'model'; //true

console.log(showProps(str, obj));