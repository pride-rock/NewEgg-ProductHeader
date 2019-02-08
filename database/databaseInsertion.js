var sampleData = require("./generator");
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("productHeader.db");

// COMMAND sql insertion
// sqlite3 (DBFILE NAME) < (SQL FILENAME)
// if dropping database/tables, re-run command

// console.log(data.productName)
// console.log(data.images)

// REFACTOR FOR MULTIPLE ITERATIONS FROM GENERATOR

db.serialize(function() {
  sampleData.forEach(data => {
    //PRODUCT TABLE
    db.run(
      "INSERT INTO product \
  (name, itemNumber, reviewRate, reviewNum, questionNum, \
    answersNum, stockAmount, sellLimit, lowestPrice, \
    logoOverlay, stockStatus, sellFrom, shipOrigin) \
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        data.productName,
        data.itemNumber,
        data.reviewRate,
        data.reviewNum,
        data.questionNum,
        data.answerNum,
        data.stockAmount,
        data.sellLimit,
        data.lowestPrice,
        data.logoImg,
        data.stockStatus,
        data.sellFrom,
        data.shipOrigin
      ]
    );

    // IMAGES TABLE, CAROSEL
    data.images.forEach(eachImg =>
      // console.log(eachImg.image)
      db.run("INSERT INTO img \
    (imgSrc, id_product) VALUES (?,?)", [
        eachImg.image,
        data.incrementor
      ])
    );

    // REFACTORING AND CONSOLIDATION OF OPTIONS SECTION

    // CATEGORY TABLE
    data.categories.forEach(category =>
      db.run(
        "INSERT INTO category \
      (categoryName, id_product) \
      VALUES (?,?)",
        [category.category, data.incrementor]
      )
    );

    // OPTIONCATEGORIES TABLES
    // REQUIRE CATEGORY INCREMENTOR FORIEGN KEY, TEST
    data.categories.forEach(category =>
        category.options.forEach(choice =>
          // console.log(choice)
          db.run(
            "INSERT INTO optionCategories \
            (options, id_category) VALUES (?,?)",
            [choice.singleOption, choice.categoryId]
          )
        )
      // .forEach(eachOption =>
      //   db.run("INSERT INTO optionCategories \
      //   (options, id_category) VALUES (?,?)", [
      //     eachOption.options, data.categories.categoryIterator
      //   ])
      // );
    );

    // REQUIRE FOREIGN KEY
    data.description.forEach(bulletDescription =>
      db.run(
        "INSERT INTO description \
    (descriptionBullet, id_product) VALUES (?,?)",
        [bulletDescription.bullet, data.incrementor]
      )
    );
  });
});

// console.log(sampleData);
