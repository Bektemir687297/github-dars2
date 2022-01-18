"use strict";

let numberOfNews;

function startProject() {
  numberOfNews = +prompt("Siz qancha yangliki ko'rdingiz?");
  while (numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
    numberOfNews = +prompt("Siz qancha yangliki ko'rdingiz?");
  }
}
startProject();

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberNews() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan yanglingizdan biri?"),
      b = prompt("Unga qancha baho bergan bo'lardingiz?");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalNewsDB.news[a] = b;
      console.log("Tayyor");
    } else {
      console.log("Error");
      i--;
    }
  }
}
rememberNews();

function showPasonalLeval() {
  if (personalNewsDB.count < 10) {
    console.log("Judda kam yangliklar o'qilibdi!");
  } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
    console.log("Siz klassik tomoshbinsiz!");
  } else if (personalNewsDB.count >= 30) {
    console.log("Siz yangliklar ishqibozi ekansiz!");
  } else {
    console.log("Xatolik yuz berdi");
  }
}
showPasonalLeval();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalNewsDB);
  }
}
showMyDB(personalNewsDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalNewsDB.genres[i - 1] = prompt(
      `Sizning sevmli janringi no'miri ${i}`
    );
  }
}
writeYourGenres();
