"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели ?", "");
    
        while(personalMovieDB.count == null || personalMovieDB.count == "" || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели ?", "");
        }
    },
    rememberMyFilms: function() {
        for(let i =0; i < 2; i++) {
            let a = prompt('Один из полседних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            if(a && b && a.length < 50){
                personalMovieDB.movies[a] = b;
            } else {
                console.log("Error!");
            i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10 ) {
            console.log('Просмотренно довольно мало фильмов');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель'); 
        } else if(personalMovieDB.count >= 30){ 
            console.log('Вы киноман!');
        } else {
            console.log('Какаято ошибка!');
        }
    },
    showMyDB(hiden) {
        if(!hiden){console.log(hiden);
        }
    },
    writeYourGenres: function() {
       // for(let i = 1; i <= 3; i++) {
            /* Var 1
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            while(personalMovieDB.genres[i-1] == null || personalMovieDB.genres[i-1] == "") {
                personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            } 
            */
        /** Var 2
           let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
           if(genre == "" || genre == null ){
             console.log('Вы ввели некорректные данные или не ввели их вовсе');
           } else {
               personalMovieDB.genres[i-1] = genre; 
           }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
        */
        // Var 3
        for(let i = 1; i < 2; i++) {
        let genre = prompt(`Введите ваши любимые жанры через запятую`, '');
        if(genre == "" || genre == null){
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
        } else {
            genre = genre.toLowerCase();
            console.log(genre);
            personalMovieDB.genres = genre.split(", ");

            personalMovieDB.genres.sort();
        }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.private ){
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        } 
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);