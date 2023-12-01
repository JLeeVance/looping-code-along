const arrayOfStringNames = ["Bob" , "Nancy" , "Joe"];

function writeCards(arrayOfStringNames , eventName) {
    const newArray = [];
    for ( let i = 0 ; i < arrayOfStringNames.length ; i++) {
        let message = `Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`;
        newArray.push(message);
    };
    return newArray;
};

function countDown (int) {
    let i = int;
    while (i >= 0){
        console.log(i);
        i--;
    };
};
countDown(4);
