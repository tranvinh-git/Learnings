let myObject = {
    'name':'Vinh',
    'age': {
        'birth':'14.03.1978',
        'where':'Vietnam'
        },
    'job':  {
        'name':'Service Delivery Manager',
        'company':{
            'name': 'MGB',
            'grade':'Senior'
        }
    },
    'good_guy':true, 
};

let objKeys = Object.keys(myObject)
let ourArray = []

for (let i = 0; i < objKeys.length; i++) {
    const   element = objKeys[i];
    ourArray.push(myObject[objKeys[i]])
}

console.table(ourArray);