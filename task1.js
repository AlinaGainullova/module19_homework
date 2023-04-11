const aktor= {
    name: 'Dmitriy',
    surname: 'Nagiev',
    age: 56,
    films: 74
}

function func(actor) {
    for (let key in actor) {
        if (actor.hasOwnProperty(key)){
            console.log(`${key} = ${actor[key]}`);
        }            
    }
}

func(aktor);