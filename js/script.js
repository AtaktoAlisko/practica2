"use strict";

// +строканы санга айгналдырад
let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", " ");
  while (
    numberOfFilms == " " ||
    numberOfFilms == null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", " ");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", " "),
      b = prompt("На сколько оцените его?", " ");
    if (a != null && b != null && a != "" && b != " " && a.length < 50) {
      console.log("done");
    } else {
      console.log("error");
      i--;
    }

    personalMovieDB.movies[a] = b;
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    ("Произощла ошибка");
  }
}
// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB();

console.log(personalMovieDB);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номеру ${i}`);
    console.log();
  }
}
writeYourGenres();
