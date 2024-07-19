var usernames = ["hassan", "abdullah", "admin", "faiz", "mahad"];
usernames = [];
if (usernames.length > 0) {
    for (var i = 0; i < usernames.length; i++)
        if (usernames[i] == 'admin') {
            console.log("hello admin , would you like to see a status report");
        }
        else {
            console.log("hello ".concat(usernames[i], ", thank you for logging in again"));
        }
}
else {
    console.log("".concat(usernames, " we need to find some new users!"));
}
