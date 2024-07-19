//*Cities: Write a function called describe_city() that accepts the name of a city and its 
//country. The function should print a simple sentence, such as Karachi is in Pakistan. Give
//the parameter for the country a default value. Call your function for three different 
//cities, at least one of which is not in the default country.
function describe_city(city, country) {
    return "".concat(city, " is in ").concat(country, " ");
}
var myCity1 = describe_city("karachi", "pakistan");
console.log(myCity1);
var myCity2 = describe_city("islamabad", "pakistan");
console.log(myCity2);
var myCity3 = describe_city("lahore", "pakistan");
console.log(myCity3);
