-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'product'
-- 
-- ---

DROP TABLE IF EXISTS `product`;
		
CREATE TABLE `product` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `itemNumber` VARCHAR(100) NOT NULL,
  `reviewRate` DECIMAL(2,1) NOT NULL,
  `reviewNum` INTEGER(100) NOT NULL,
  `questionNum` INTEGER(100) NOT NULL,
  `answersNum` INTEGER(100) NOT NULL,
  `stockAmount` INTEGER(100) NOT NULL,
  `sellLimit` INTEGER(20) NOT NULL,
  `lowestPrice` INTEGER(100) NOT NULL,
  `logoOverlay` VARCHAR(100) NOT NULL,
  `stockStatus` INTEGER(2) NOT NULL,
  `sellFrom` VARCHAR(100) NOT NULL,
  `shipOrigin` VARCHAR(50) NOT NULL
);

-- ---
-- Table 'img'
-- 
-- ---

DROP TABLE IF EXISTS `img`;
		
CREATE TABLE `img` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `imgSrc` VARCHAR(100) NOT NULL,
  `id_product` INTEGER,
  FOREIGN KEY (`id_product`) REFERENCES `product`(`id`)
);

-- ---
-- Table 'description'
-- 
-- ---

DROP TABLE IF EXISTS `description`;
		
CREATE TABLE `description` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `descriptionBullet` VARCHAR(100) NOT NULL,
  `id_product` INTEGER,
  FOREIGN KEY (`id_product`) REFERENCES `product`(`id`)
);

-- ---
-- Table 'category'
-- 
-- ---

DROP TABLE IF EXISTS `category`;
		
CREATE TABLE `category` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `categoryName` VARCHAR(100) NOT NULL,
  `id_product` INTEGER,
  FOREIGN KEY (`id_product`) REFERENCES `product`(`id`)
);


-- ---
-- Table 'optionCategories'
-- 
-- ---

DROP TABLE IF EXISTS `optionCategories`;
		
CREATE TABLE `optionCategories` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `options` VARCHAR(100) NOT NULL,
  `id_category` INTEGER,
  FOREIGN KEY (`id_category`) REFERENCES `category`(`id`)
);


-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `category` ADD FOREIGN KEY (id_product) REFERENCES `product` (`id`);
-- ALTER TABLE `img` ADD FOREIGN KEY (id_product) REFERENCES `product` (`id`);
-- ALTER TABLE `optionCategories` ADD FOREIGN KEY (id_category) REFERENCES `category` (`id`);
-- ALTER TABLE `description` ADD FOREIGN KEY (id_product) REFERENCES `product` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `product` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `category` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `img` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `optionCategories` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `description` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `product` (`id`,`name`,`itemNumber`,`reviewRate`,`reviewNum`,`questionNum`,`answersNum`,`stockAmount`,`sellLimit`,`lowestPrice`,`logoOverlay`,`stockStatus`,`sellFrom`,`shipOrigin`) VALUES
-- ('','','','','','','','','','','','','','');
-- INSERT INTO `category` (`id`,`categoryName`,`id_product`) VALUES
-- ('','','');
-- INSERT INTO `img` (`id`,`imgSrc`,`id_product`) VALUES
-- ('','','');
-- INSERT INTO `optionCategories` (`id`,`options`,`id_category`) VALUES
-- ('','','');
-- INSERT INTO `description` (`id`,`descriptionBullet`,`id_product`) VALUES
-- ('','','');