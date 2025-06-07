// 🧪 Homework:
// Create a function that returns the square of a number.

function square(a){
    return a*a;
}
console.log("Square :",square(5))

// Store 5 of your favorite movies in an array and print them one by one using a loop.
let favMovies= ["Batman","Interstellar", "KGF", "Salaar", "Telugu"];
favMovies.push("Inception"); //adds at last
favMovies.pop(); //removes last
favMovies.shift(); //removes 1st
favMovies.unshift("Inception"); //adds 1st


console.log(favMovies);
for(let i =0; i<favMovies.length; i++){
    console.log("My Fav Movie:"+favMovies[i])
}

// Try using pop(), push(), and .length on the array.
