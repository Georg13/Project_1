"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// Var 1

for(let i =0; i < 2; i++) {
   let a = prompt('Один из полседних просмотренных фильмов?', ''),
   b = prompt('На сколько оцените его?', '');

        if(a && b && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else {
            //alert("Error!");
            console.log("Error!");
           i--;
        }
}

// Var 1.1
/*
for(let i =0; i < 2; i++) {
    let a = prompt('Один из полседних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
 
    if(a != null && b != null && a != "" && b != "" && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('Done!')
    } else {
        console.log("Error!");
    i--;
    }
 }


// Var 2
/*
let i = 0;

while(i < 2) {   
    let a = prompt('Один из полседних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
 
         if(a && b && a.length < 50){
             personalMovieDB.movies[a] = b;
             i++;
         } else {
             alert("Error!");
         }
 }
*/
/*
const a = prompt('Один из полседних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из полседних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
*/
if(personalMovieDB.count < 10 ) {
    console.log('Просмотренно довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель'); 
} else if(personalMovieDB.count >= 30){ 
    console.log('Вы киноман!');
} else {
    console.log('Какаято ошибка!');
}

console.log(personalMovieDB);