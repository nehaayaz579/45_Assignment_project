var current_users = ["hassan", "abdullah", "faiz", "mahad", "basit"];
var new_users = ["nimra", "uosra", "faiz", "mahad", "jisra"];
new_users.forEach((function (new_one_users) {
    var our_condition = current_users.some(function (current_new_one) { return current_new_one.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_users, " is already been used"));
    }
    else {
        console.log("This ".concat(new_one_users, " is available"));
    }
}));
