"use strict";

const personalNewsDB = {
  count: 0,
  news: {},
  actors: {},
  genres: [],
  privat: false,
  startProject: function () {
    personalNewsDB.count = +prompt("Siz qancha yangliki ko'rdingiz?");
    while (
      personalNewsDB.count == "" ||
      personalNewsDB.count == null ||
      isNaN(personalNewsDB.count)
    ) {
      personalNewsDB.count = +prompt("Siz qancha yangliki ko'rdingiz?");
    }
  },
  rememberNews: function () {
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
  },
  showPasonalLeval: function () {
    if (personalNewsDB.count < 10) {
      console.log("Judda kam yangliklar o'qilibdi!");
    } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
      console.log("Siz klassik tomoshbinsiz!");
    } else if (personalNewsDB.count >= 30) {
      console.log("Siz yangliklar ishqibozi ekansiz!");
    } else {
      console.log("Xatolik yuz berdi");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalNewsDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalNewsDB.privat) {
      personalNewsDB.privat = false;
    } else {
      personalNewsDB.privat = true;
    }
  },
  writeYourGenres: function () {
    /* for (let i = 1; i < 2; i++) {
      let genres = prompt(`Sizning sevimli janringiz: nomer ${i}`);
      if (genres === "" || genres === null) {
        console.log("Siz notog'ri molumot kiritingiz");
        i--;
      } else {
        personalNewsDB.genres[i - 1] = genres;
      }
    }*/

    for (let i = 1; i < 2; i++) {
      let genres = prompt(
        "sizning sevmli janringiz, vergu yordamida yozin"
      ).toLowerCase();

      if (genres === "" || genres === null) {
        console.log("siz noto'g'ri malumot kiritingiz");
        i--;
      } else {
        personalNewsDB.genres = genres.split(", ");
        personalNewsDB.genres.sort();
      }
    }

    personalNewsDB.genres.forEach((item, i) => {
      console.log(`Sizning sevmli janringiz: nomer ${i + 1} bu ${item}`);
    });
  },
};
