"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");

    while(numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10 ) {
        console.log('Просмотренно довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель'); 
    } else if(personalMovieDB.count >= 30){ 
        console.log('Вы киноман!');
    } else {
        console.log('Какаято ошибка!');
    }
}

detectPersonalLevel();

function showMyDB(privat) {
    // (privat)? console.log("privat = true") : console.log(personalMovieDB);
    if(!privat){console.log(personalMovieDB);}
    // if(!privat) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        /*
        let gener = prompt(`Ваш любимый жанр под номером ${i}`, ''); 
        while(gener == "" || gener == null ) {
            gener = prompt(`Ваш любимый жанр под номером ${i}`, '');
        }
        
        personalMovieDB.genres[i-1] = gener;// i-1 что бы база заполнялась без пустот, т.е как надо длина 3 а если просто i то 4
        */
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, ''); 
    }
}
writeYourGenres();
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