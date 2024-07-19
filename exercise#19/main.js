var guestlist = ['namra', 'arishay', 'shilpa'];
console.log("Unfortunately the new dinner tables wont arrive so we can invite 2 guest");
guestlist.unshift('alice', 'bob');
console.log("Updated the list of guest:", guestlist);
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log("Sorry ".concat(removedGuest, ",we cant invite you"));
    }
}
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you both are invited for dinner"));
});
guestlist.splice(0, guestlist.length);
console.log("updated list of guest:", guestlist);
