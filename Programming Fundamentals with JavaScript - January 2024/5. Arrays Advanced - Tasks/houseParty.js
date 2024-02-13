function houseparty(arr){
    let guests = [];

    for (command of arr){
        let tokens = command.split(" ");
        let name = tokens[0];

        if (tokens.includes("not")){
            if (guests.includes(name)){
                let idx = guests.indexOf(name);
                guests.splice(idx, 1);
            } else{
                console.log(`${name} is not in the list!`);
            }

        } else{
            if(guests.includes(name)){
                console.log(`${name} is already in the list!`);
            }else {
                guests.push(name);

            }
        }
    }
    console.log(guests.join("\n"));
}

houseparty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)
