function movingTarget(input) {
    let targets = input.shift().split(' ').map(Number);

    for (let line of input) {
        if (line === "End") {
            console.log(targets.join("|"));
        } else {
            let [command, index, token] = line.split(" ");
            index = Number(index);


            switch (command) {
                case "Shoot":
                    if (index >= 0 && index < targets.length) {
                        let power = Number(token);
                        targets[index] -= power;
                        if (targets[index] <= 0) {
                            targets.splice(index, 1);
                        }
                    }
                    break;
                case "Add":
                    if (index >= 0 && index < targets.length) {
                        let value = Number(token);
                        targets.splice(index, 0, value);
                    } else {
                        console.log("Invalid placement!");
                    }
                    break;
                case "Strike":
                    let radius = Number(token);
                    let indexesBefore = index - radius;
                    let indexesAfter = index + radius;
                    if (indexesBefore >= 0 && indexesAfter < targets.length) {
                        let indexesToRemove = radius * 2 + 1;
                        targets.splice(indexesBefore, indexesToRemove);
                    } else {
                        console.log('Strike missed!');
                    }
                    break;

            }
        }

    }
}
movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
)