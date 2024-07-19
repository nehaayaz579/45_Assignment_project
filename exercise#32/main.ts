let current_users = ["hassan","abdullah","faiz","mahad","basit"];
let new_users = ["nimra","uosra","faiz","mahad","jisra"];
new_users.forEach(( new_one_users => {
    let our_condition = current_users.some(current_new_one => current_new_one.toLowerCase())
    if (our_condition){
        console.log(`Sorry ${new_one_users} is already been used`)
    }else{
        console.log(`This ${new_one_users} is available`)
    }
}))