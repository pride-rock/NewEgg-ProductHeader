var faker = require("faker");

let counter = 1;

let generation = function() {
  let output = [];

  for (let i = 1; i < 101; i++) {
    output.push({
      itemNumber: i,
      incrementor: i,
      productName: faker.commerce.productName(),
      images: multipleImg(),
      logoImg: faker.image.imageUrl(),
      reviewRate: getRandomInt(0, 5),
      reviewNum: getRandomInt(0, 300),
      questionNum: 0,
      answerNum: 0,
      stockAmount: getRandomInt(2, 20), //random generation
      sellLimit: 2,
      lowestPrice: faker.commerce.price(), //random generator price
      stockStatus: 1, // 1 is true, 0 is false, else is false
      sellFrom: shipOrigin(), // random picker for multiple countries
      shipOrigin: "newegg",

      categories: categoryName(),
      // nest options into categories
      /**
       * categories: {categoryIterator: 1,
       *              category: "lorem ipsum",
       *              options: [{catID: 1
       *                         options: lorem ipsum},
       *                        {catID: 1,
       *                         options: lorem decorum},
       *                        {catID: 1,
       *                         options: duro locum}]}
       */

      description: descriptionBullets()
    });
  }
  return output;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Static S3 AWS Images URL

let s3 = [
  "case1",
  "case2",
  "case3",
  "case4",

  "rtx1",
  "rtx2",
  "rtx3",
  "rtx4",

  "switch1",
  "switch2",
  "switch3",
  "switch4",

  "vive1",
  "vive2",
  "vive3",
  "vive4"
];
let imageCounter = 0;

let multipleImg = function() {
  let output = [];

  if (imageCounter === 3) {
    for (let i = 12; i < 16; i++) {
      output.push({
        // image: faker.image.imageUrl() //lorem.ipsum
        image: `https://s3.amazonaws.com/fec-product-header/product+images/${
          s3[i]
        }.jpg`
      });
    }
    imageCounter = 0;
  } else if (imageCounter === 2) {
    for (let i = 8; i < 12; i++) {
      output.push({
        // image: faker.image.imageUrl() //lorem.ipsum
        image: `https://s3.amazonaws.com/fec-product-header/product+images/${
          s3[i]
        }.jpg`
      });
    }
    imageCounter++;
  } else if (imageCounter === 1) {
    for (let i = 4; i < 8; i++) {
      output.push({
        // image: faker.image.imageUrl() //lorem.ipsum
        image: `https://s3.amazonaws.com/fec-product-header/product+images/${
          s3[i]
        }.jpg`
      });
    }
    imageCounter++;
  } else if (imageCounter === 0) {
    for (let i = 0; i < 4; i++) {
      output.push({
        // image: faker.image.imageUrl() //lorem.ipsum
        image: `https://s3.amazonaws.com/fec-product-header/product+images/${
          s3[i]
        }.jpg`
      });
    }
    imageCounter++;
  }

  return output;
};

let categoryName = function() {
  let output = [];

  //random number between 1-7 for for loop upper limit
  for (let i = 1; i < getRandomInt(1, 4); i++) {
    output.push({
      categoryIterator: i,
      category: faker.lorem.word(),
      options: optionCategories(counter)
    });
    counter++;
  }
  return output;
};

let optionCategories = function(categoryID) {
  let output = [];
  for (let i = 1; i < getRandomInt(3, 7); i++) {
    output.push({
      categoryId: categoryID,
      singleOption: faker.lorem.word()
    });
  }
  return output;
};

let descriptionBullets = function() {
  let output = [];
  for (let i = 1; i < getRandomInt(3, 5); i++) {
    output.push({ bullet: faker.lorem.sentence() });
  }
  return output;
};

let shipOrigin = function() {
  let array = ["mexico", "canada", "united states of america"];
  return array[getRandomInt(0, 2)];
};

module.exports = generation();
