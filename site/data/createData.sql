
/* INSERT DATA IN TABLE CATEGORIES */
INSERT INTO `fourgame_dev`.`categories` (`name`) VALUES ('best-seller');
INSERT INTO `fourgame_dev`.`categories` (`name`) VALUES ('in-sale');
INSERT INTO `fourgame_dev`.`categories` (`name`) VALUES ('new-release');

/* INSERT DATA IN TABLE TYPE PRODUCTS */
INSERT INTO `fourgame_dev`.`typeproducts` (`name`) VALUES ('consolas');
INSERT INTO `fourgame_dev`.`typeproducts` (`name`) VALUES ('juegos');
INSERT INTO `fourgame_dev`.`typeproducts` (`name`) VALUES ('pc');

/* INSERT DATA IN TABLE COUNTRYS */
INSERT INTO `fourgame_dev`.`countrys` (`name`) VALUES ('argentina');

/* INSERT DATA IN TABLE STATES */
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Buenos Aires', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Catamarca', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Chaco', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Chubut', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Córdoba', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Corrientes', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Entre Ríos', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Formosa', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Jujuy', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('La Pampa', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('La Rioja', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Mendoza', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Misiones', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Neuquén', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Río Negro', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Salta', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('San Juan', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('San Luis', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Santa Cruz', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Santa Fe', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Santiago del Estero', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Tierra del Fuego', '1');
INSERT INTO `fourgame_dev`.`states` (`name`, `countryId`) VALUES ('Tucumán', '1');

/* INSERT DATA IN TABLE PAY METHODS */
INSERT INTO `fourgame_dev`.`paymethods` (`name`) VALUES ('efectivo');
INSERT INTO `fourgame_dev`.`paymethods` (`name`) VALUES ('cuotas');

/* INSERT DATA IN TABLE ACCESS */
INSERT INTO `fourgame_dev`.`access` (`name`) VALUES ('user');
INSERT INTO `fourgame_dev`.`access` (`name`) VALUES ('admin');

/* INSERT DATA IN TABLE USERS */
INSERT INTO `fourgame_dev`.`users` (`name`, `email`, `image`, `password`, `accessId`) VALUES ('juan', 'juanmadegiorgi@gmail.com', 'img-1630181477130.png', '$2a$12$wL2ZSsc19lTwGCqZiUC4GedUcwQILqXtakNLsEdiVefjho7MKMMNu', '2');
INSERT INTO `fourgame_dev`.`users` (`name`, `email`, `image`, `password`, `accessId`) VALUES ('Rango', 'ezequielrango290@gmail.com', 'img-1630902354443.jpg', '$2a$12$ADn4LaKEisc1oTVlijocyuPCOCnUCyklVv0h8r5vwd2tpSHWnZGnK', '2');

/* INSERT DATA IN TABLE PRODUCTS */
INSERT INTO `fourgame_dev`.`products` (`name`, `price`, `discount`, `description`, `categoryId`, `userId`, `typeProductId`) VALUES ('Sony PlayStation 4 Slim 1TB', '62980', '10', 'Con la consola PlayStation 4, líder mundial en ventas durante años, podrás gozar de horas de juego y una excelente navegabilidad para disfrutar de películas, series y contenido online.', '1', '1', '1');
INSERT INTO `fourgame_dev`.`products` (`name`, `price`, `discount`, `description`, `categoryId`, `userId`, `typeProductId`) VALUES ('Call of Duty Black Ops Cold War Standard Edition', '5300', '10', 'Combinando realidad con ficción, Call of Duty es un juego único por su calidad de desarrollo. Su objetivo es que cada jugador logre conquistar todas las misiones, ya sea en una batalla contra otros ejércitos o combatiendo zombies. Sus gráficos, jugabilidad, desafíos e historias han hecho de la franquicia una de las más destacadas dentro de los videojuegos en primera persona.', '2', '1', '2');
INSERT INTO `fourgame_dev`.`products` (`name`, `price`, `discount`, `description`, `categoryId`, `userId`, `typeProductId`) VALUES ('Resident Evil Village Collector\'s Edition Capcom PS4 Físico', '7999', '0', 'Juego para disfrutar con la luz encendida y un rosario en el cuello. No apto para pacientes de riesgo, epilépticos ni vacunados con Sputnik (Los zombies tienen Astrazeneca)', '3', '2', '2');
INSERT INTO `fourgame_dev`.`products` (`name`, `price`, `discount`, `description`, `categoryId`, `userId`, `typeProductId`) VALUES ('Sony PlayStation 5 825GB Digital Edition White color', '234900', '15', 'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos.', '3', '2', '1');
INSERT INTO `fourgame_dev`.`products` (`name`, `price`, `discount`, `description`, `categoryId`, `userId`, `typeProductId`) VALUES ('Pc Ryzen 3 ,msi A320M PRO MAX ,8gb oloy', '105599', '15', 'Pc Ryzen 3 3200G ,msi A320M PRO MAX,8GB oloy RGB,Fuente cooler master smart 600w', '2', '1', '3');
INSERT INTO `fourgame_dev`.`products` (`name`, `price`, `discount`, `description`, `categoryId`, `userId`, `typeProductId`) VALUES ('Super Smash Bros Ultimate Standard Edition Nintendo Switch Físico', '1980', '10', 'Este videojuego de acción y pelea combina diversos personajes de distintas sagas de Nintendo y otras editoriales, con más de 100 escenarios disponibles, 74 luchadores y más de 800 temas musicales. Esto convierte a Super Smash Bros Ultimate en un juego con un sinfín de aventuras y posibilidades de enfrentar a luchadores muy distintos entre sí.', '2', '1', '2');
INSERT INTO `fourgame_dev`.`products` (`name`, `price`, `discount`, `description`, `categoryId`, `userId`, `typeProductId`) VALUES ('Amd Ryzen 5 3600X + B450M + 16gb Ddr4 + 1tb', '162980', '25', 'PLACA DE VIDEO\\r\\n1x MSI RADEON RX 570 ARMOR 4GB OC DDR5 DUAL FAN (NO UTILIZAR)\\r\\n\\r\\nALMACENAMIENTO\\r\\n1x WESTERN DIGITAL NO UTILIZAR - EX DISCO HDD 1TB BLUE - NO UTILIZAR -\\r\\n\\r\\nFUENTES UPS Y CABLES MOD\\r\\n1x SENTEY FUENTE 550W SNP-HS WHITE 80+\\r\\n\\r\\nMEMORIAS RAM\\r\\n1x CRUCIAL MEMORIA RAM 16GB 3200MHZ BALLISTIX SPORT LT WHITE DDR4\\r\\n\\r\\nMOTHERBOARDS\\r\\n1x ASUS MOTHER B450M-A PRIME CSM AM4 AMD\\r\\n\\r\\nALMACENAMIENTO\\r\\n1x ADATA SSD M.2 256GB XPG GAMMIX S11 PRO M.2 NVME 3500 MB/s\\r\\n\\r\\nGABINETE\\r\\n1x LNZ GABINETE LZ40 RGB\\r\\n\\r\\nPROCESADORES\\r\\n1x AMD MICRO RYZEN 5 3600X 4.4GHz TURBO AM4', '1', '1', '3');
INSERT INTO `fourgame_dev`.`products` (`name`, `price`, `discount`, `description`, `categoryId`, `userId`, `typeProductId`) VALUES ('Microsoft Xbox Series S 512GB color blanco', '89999', '20', 'La nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo.', '1', '2', '1');
INSERT INTO `fourgame_dev`.`products` (`name`, `price`, `discount`, `description`, `categoryId`, `userId`, `typeProductId`) VALUES ('Marvel\'s Spider-Man Miles Morales Standard Edition Sony PS5 Físico', '2980', '0', 'Disfruta de ésta edición, acompañando a Peter Parker en sus aventuras.', '1', '2', '2');

/* INSERT DATA IN TABLE PRODUCTS IMAGES */
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('ps4.jpg', '1');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('mando.jpg', '1');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('ps4_alt.jpg', '1');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('callOfDuty-ps5.png', '2');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('img-1628746860772.jpg', '3');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('ps5.jpg', '4');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('mando.jpeg', '4');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('ps5_alt.jpg', '4');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('PC-Armada-Media-0026_600.jpg', '5');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('img-1629611566665.jpg', '5');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('img-1629611566667.jpg', '5');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('img-1629611566668.jpg', '5');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('img-1629611566670.jpg', '5');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('nintendo.jpg', '6');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('switch.jpg', '6');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('img-1629678319484.jpg', '6');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('img-1629678319486.jpg', '6');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('pc-premire.jpg', '7');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('disco.jpg', '7');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('mother.jpg', '7');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('micro.jpg', '7');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('gpu.jpg', '7');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('xbox-s.jpg', '8');
INSERT INTO `fourgame_dev`.`productimages` (`name`, `productId`) VALUES ('spiderman.webp', '9');
