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
for (let i = 0; i < numberOfFilms; i++){
	const a = prompt('Один из последних просмотренных фильмов?',''),
			b = prompt('На сколько оцените его??','');
	if (a != null && b != null && a.length != 50 && a != '' && b != ''){
		personalMovieDB.movies[a]= b;
		console.log('done');
	}
	else{
		console.log('error');
		i--;
	}
}
if (personalMovieDB.count < 10){
	console.log("Просмотрено довольно мало фильмов")

}
else if
	(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		console.log("Вы классический зритель")
	}
else if (personalMovieDB.count >= 30){
	console.log("Вы киноман")
}
else{
	console.log("Произошла ошибка");
};





