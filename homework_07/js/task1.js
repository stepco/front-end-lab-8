let stage;
 stage = parseInt(prompt('Enter number between 0 and 20'));
if (stage > 20 || stage <= 0 || isNaN(stage) == true) {
    console.log("Incorrect input!");
}
else {
    var pyramid = ""
        , block = "[~]"
        , free_b = "  "
        , space = stage - 1;
    for (let i = 1; i <= stage; i++) {
        for (let j = 0; j < space; j++) {
            pyramid += free_b;
        }
        for (let z = 0; z < 2 * i - 1; z++) {
            pyramid += block;
        }
        pyramid += '\n';
        space--;
    }
    console.log(pyramid);
}