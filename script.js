"use strict";

const numberOfNews = +prompt("Siz qancha yangliki ko'rdingiz?");
const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Oxirgi ko'rgan yanglingizdan biri?"),
  b = prompt("Unga qancha baho bergan bo'lardingiz?");

personalNewsDB.news[a] = b;
console.log(personalNewsDB);
