var ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinalNumber.length; i++) {
    if (ordinalNumber[i] == 1) {
        console.log("".concat(ordinalNumber[i], "st"));
    }
    if (ordinalNumber[i] == 2) {
        console.log("".concat(ordinalNumber[i], "nd"));
    }
    if (ordinalNumber[i] == 3) {
        console.log("".concat(ordinalNumber[i], "rd"));
    }
    if (ordinalNumber[i] >= 4) {
        console.log("".concat(ordinalNumber[i], "th"));
    }
}
