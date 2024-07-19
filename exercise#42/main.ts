let magiciansNames:string[] = ['hassan','Abdullah','neha','faiz','mahad'];
function show_magician1(greet:string){
    for (let items of magiciansNames){
        console.log(greet,items);
    }
} 
show_magician1("Hello, How are you Mr.");