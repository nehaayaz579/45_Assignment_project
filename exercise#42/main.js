var magiciansNames = ['hassan', 'Abdullah', 'neha', 'faiz', 'mahad'];
function show_magician1(greet) {
    for (var _i = 0, magiciansNames_1 = magiciansNames; _i < magiciansNames_1.length; _i++) {
        var items = magiciansNames_1[_i];
        console.log(greet, items);
    }
}
show_magician1("Hello, How are you Mr.");
