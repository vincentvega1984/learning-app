"use strict";

const numberOfFilms = prompt("Сколько фильмов вы посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const preLastFilm = prompt("Один из последних просмотренных фильмов?",""),
      preLastFilmRank = prompt("На сколько оцените его?",""),
      lastFilm = prompt("Один из последних просмотренных фильмов?",""),
      lastFilmRank = prompt("На сколько оцените его?","");

personalMovieDB.movies[preLastFilm] = preLastFilmRank;
personalMovieDB.movies[lastFilm] = lastFilmRank;

console.log(personalMovieDB);