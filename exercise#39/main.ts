//City Names: Write a function called city_country() that takes in the name of a city and
// its country. The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s
 //returned.
 function city_country(city:string , country:string){
    return`${city} , ${country}`
 }
 let city_country_pair1 = city_country("karachi","pakistan")
 console.log(city_country_pair1)

 let city_country_pair2 = city_country("istabul","turky")
 console.log(city_country_pair2)

 let city_country_pair3 = city_country("Madina","saudia arab")
 console.log(city_country_pair3)
 