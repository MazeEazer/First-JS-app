"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
console.log(numberOfFilms);12

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let a = prompt('Один из последних просмотренных фильмов?','');
let b = prompt('На сколько оцените его??','');
let c = prompt('Один из последних просмотренных фильмов?','');
let d = prompt('На сколько оцените его??','');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;



