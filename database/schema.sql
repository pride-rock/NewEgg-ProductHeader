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
  `id` INTEGER PRIMARY KEY NOT NULL,
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
-- Table 'options'
-- 
-- ---

DROP TABLE IF EXISTS `options`;
		
CREATE TABLE `options` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `listName1` VARCHAR(100) NOT NULL,
  `listName2` VARCHAR(100) NOT NULL,
  `id_product` INTEGER,
  FOREIGN KEY (`id_product`) REFERENCES `product`(`id`)
);

-- ---
-- Table 'img'
-- 
-- ---

DROP TABLE IF EXISTS `img`;
		
CREATE TABLE `img` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `imgSrc` VARCHAR(100) NOT NULL,
  -- `id_product` INTEGER NOT NULL
  `id_product` INTEGER,
  FOREIGN KEY (`id_product`) REFERENCES `product`(`id`)
);

-- ---
-- Table 'listOne'
-- 
-- ---

DROP TABLE IF EXISTS `listOne`;
		
CREATE TABLE `listOne` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `listOne_options` VARCHAR(100) NOT NULL,
  -- `id_options` INTEGER NOT NULL
  `id_options` INTEGER,
  FOREIGN KEY (`id_options`) REFERENCES `options`(`id`)
);

-- ---
-- Table 'listTwo'
-- 
-- ---

DROP TABLE IF EXISTS `listTwo`;
		
CREATE TABLE `listTwo` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `listTwo_options` VARCHAR(100) NOT NULL,
  -- `id_options` INTEGER NOT NULL
  `id_options` INTEGER,
  FOREIGN KEY (`id_options`) REFERENCES `options`(`id`)
);

-- ---
-- Table 'description'
-- 
-- ---

DROP TABLE IF EXISTS `description`;
		
CREATE TABLE `description` (
  `id` INTEGER NOT NULL PRIMARY KEY,
  `descriptionBullet` VARCHAR(100) NOT NULL,
  -- `id_product` INTEGER NOT NULL
  `id_product` INTEGER,
  FOREIGN KEY (`id_product`) REFERENCES `product`(`id`)
);

-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `options` ADD FOREIGN KEY (id_product) REFERENCES `product` (`id`);
-- ALTER TABLE `img` ADD FOREIGN KEY (id_product) REFERENCES `product` (`id`);
-- ALTER TABLE `listOne` ADD FOREIGN KEY (id_options) REFERENCES `options` (`id`);
-- ALTER TABLE `listTwo` ADD FOREIGN KEY (id_options) REFERENCES `options` (`id`);
-- ALTER TABLE `description` ADD FOREIGN KEY (id_product) REFERENCES `product` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `product` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `options` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `img` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `listOne` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `listTwo` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `description` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `product` (`id`,`name`,`itemNumber`,`reviewRate`,`reviewNum`,`questionNum`,`answersNum`,`stockAmount`,`sellLimit`,`lowestPrice`,`logoOverlay`,`stockStatus`,`sellFrom`,`shipOrigin`) VALUES
-- ('','','','','','','','','','','','','','');
-- INSERT INTO `options` (`id`,`listName1`,`listName2`,`id_product`) VALUES
-- ('','','','');
-- INSERT INTO `img` (`id`,`imgSrc`,`id_product`) VALUES
-- ('','','');
-- INSERT INTO `listOne` (`id`,`listOne_options`,`id_options`) VALUES
-- ('','','');
-- INSERT INTO `listTwo` (`id`,`listTwo_options`,`id_options`) VALUES
-- ('','','');
-- INSERT INTO `description` (`id`,`descriptionBullet`,`id_product`) VALUES
-- ('','','');