USE `ezequielrango_fourgame`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fourgametest
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access`
--

DROP TABLE IF EXISTS `access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `access` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access`
--

LOCK TABLES `access` WRITE;
/*!40000 ALTER TABLE `access` DISABLE KEYS */;
INSERT INTO `access` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `street` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `postalCode` int NOT NULL,
  `neighborhood` varchar(255) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `state` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_address_users1_idx` (`userId`),
  CONSTRAINT `fk_address_users1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'César Garat ','1095',1722,'Merlo','la casa esta en una esquina ,rejas de color negro no tiene tiembre','Buenos Aires',1);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'best-seller'),(2,'in-sale'),(3,'new-release');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detailorder`
--

DROP TABLE IF EXISTS `detailorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detailorder` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderId` int NOT NULL,
  `productId` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_e74d7049-449b-4520-9cf0-a650062c7df1` (`productId`),
  KEY `FK_e9397a06-e46e-4ea0-8aa6-b980a2d8da74_idx` (`orderId`),
  CONSTRAINT `FK_e74d7049-449b-4520-9cf0-a650062c7df1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_e9397a06-e46e-4ea0-8aa6-b980a2d8da74` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailorder`
--

LOCK TABLES `detailorder` WRITE;
/*!40000 ALTER TABLE `detailorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `detailorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_736122bf-3278-4757-8d0e-5f4e02b22e6d` (`productId`),
  KEY `FK_a16c7b5f-ed29-4ae6-8018-133f0bad20dc` (`userId`),
  CONSTRAINT `FK_736122bf-3278-4757-8d0e-5f4e02b22e6d` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_a16c7b5f-ed29-4ae6-8018-133f0bad20dc` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (10,1,1),(15,4,1);
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `finalPrice` int unsigned NOT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  `cardQuantity` tinyint NOT NULL DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_51ca60e4-c75d-4a21-8e29-cf91e1910d92` (`userId`),
  CONSTRAINT `FK_51ca60e4-c75d-4a21-8e29-cf91e1910d92` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productimages`
--

DROP TABLE IF EXISTS `productimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productimages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `productId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_37e75634-cb13-44fe-81ef-7c03659395cd` (`productId`),
  CONSTRAINT `FK_37e75634-cb13-44fe-81ef-7c03659395cd` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productimages`
--

LOCK TABLES `productimages` WRITE;
/*!40000 ALTER TABLE `productimages` DISABLE KEYS */;
INSERT INTO `productimages` VALUES (1,'ps4.jpg',1),(2,'mando.jpg',1),(3,'ps4_alt.jpg',1),(4,'callOfDuty-ps5.png',2),(5,'img-1628746860772.jpg',3),(6,'ps5.jpg',4),(7,'mando.jpeg',4),(8,'ps5_alt.jpg',4),(9,'PC-Armada-Media-0026_600.jpg',5),(10,'img-1629611566665.jpg',5),(11,'img-1629611566667.jpg',5),(12,'img-1629611566668.jpg',5),(13,'img-1629611566670.jpg',5),(14,'nintendo.jpg',6),(15,'switch.jpg',6),(16,'img-1629678319484.jpg',6),(17,'img-1629678319486.jpg',6),(18,'pc-premire.jpg',7),(19,'disco.jpg',7),(20,'mother.jpg',7),(21,'micro.jpg',7),(22,'gpu.jpg',7),(23,'xbox-s.jpg',8),(24,'spiderman.webp',9),(38,'img-1632531864741.webp',16),(39,'img-1632531914569.webp',16),(40,'img-1632531914570.webp',16),(41,'img-1632539107251.webp',17),(65,'img-1632540215453.webp',18),(66,'img-1632540215454.webp',18),(67,'img-1632540215455.webp',18),(68,'img-1632540215455.webp',18),(69,'img-1632540215457.webp',18);
/*!40000 ALTER TABLE `productimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int unsigned NOT NULL,
  `discount` int unsigned NOT NULL DEFAULT '0',
  `description` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL,
  `delete` tinyint NOT NULL DEFAULT '0',
  `categoryId` int NOT NULL,
  `userId` int NOT NULL,
  `typeProductId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_d8c8e5e2-d698-476b-8af2-c309f1f3c67f` (`typeProductId`),
  KEY `FK_418feb3d-d2b5-42bb-adba-044d29827552` (`categoryId`),
  KEY `FK_03a76175-8f9b-4842-825f-5aac561ed541` (`userId`),
  CONSTRAINT `FK_03a76175-8f9b-4842-825f-5aac561ed541` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_418feb3d-d2b5-42bb-adba-044d29827552` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_d8c8e5e2-d698-476b-8af2-c309f1f3c67f` FOREIGN KEY (`typeProductId`) REFERENCES `typeproducts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Sony PlayStation 4 Slim 1TB',62980,10,'Con la consola PlayStation 4, líder mundial en ventas durante años, podrás gozar de horas de juego y una excelente navegabilidad para disfrutar de películas, series y contenido online.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,1,1,1),(2,'Call of Duty Black Ops Cold War Standard Edition',5300,10,'Combinando realidad con ficción, Call of Duty es un juego único por su calidad de desarrollo. Su objetivo es que cada jugador logre conquistar todas las misiones, ya sea en una batalla contra otros ejércitos o combatiendo zombies. Sus gráficos, jugabilidad, desafíos e historias han hecho de la franquicia una de las más destacadas dentro de los videojuegos en primera persona.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,2,1,2),(3,'Resident Evil Village Collector\'s Edition Capcom PS4 Físico',7999,0,'Juego para disfrutar con la luz encendida y un rosario en el cuello. No apto para pacientes de riesgo, epilépticos ni vacunados con Sputnik (Los zombies tienen Astrazeneca)','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,3,2,2),(4,'Sony PlayStation 5 825GB Digital Edition White color',234900,15,'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,3,2,1),(5,'Pc Ryzen 3 ,msi A320M PRO MAX ,8gb oloy',105599,15,'Pc Ryzen 3 3200G ,msi A320M PRO MAX,8GB oloy RGB,Fuente cooler master smart 600w','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,2,1,3),(6,'Nintendo Switch 32GB Standard color rojo neón, azul neón y negro',1980,10,'Switch se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología de elite en un aparato portátil con el que podrás jugar y disfrutar de diverso contenido online','2021-09-22 02:16:18','2021-10-02 05:44:21',NULL,0,2,1,1),(7,'Amd Ryzen 5 3600X + B450M + 16gb Ddr4 + 1tb',162980,25,'PLACA DE VIDEO 1x MSI RADEON RX 570 ARMOR 4GB OC DDR5 DUAL FAN (NO UTILIZAR) ALMACENAMIENTO 1x WESTERN DIGITAL NO UTILIZAR - EX DISCO HDD 1TB BLUE - NO UTILIZAR - FUENTES UPS Y CABLES MOD 1x SENTEY FUENTE 550W SNP-HS WHITE 80+ MEMORIAS RAM 1x CRUCIAL MEMORIA RAM 16GB 3200MHZ BALLISTIX SPORT LT WHITE DDR4 MOTHERBOARDS 1x ASUS MOTHER B450M-A PRIME CSM AM4 AMD ALMACENAMIENTO 1x ADATA SSD M.2 256GB XPG GAMMIX S11 PRO M.2 NVME 3500 MB GABINETE 1x LNZ GABINETE LZ40 RGB PROCESADORES 1x AMD MICRO RYZEN ','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,1,1,3),(8,'Microsoft Xbox Series S 512GB color blanco',89999,20,'La nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,1,2,1),(9,'Marvel\'s Spider-Man Miles Morales Standard Edition Sony PS5 Físico',2980,0,'Disfruta de ésta edición, acompañando a Peter Parker en sus aventuras.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,1,2,2),(16,'Consola Level Up RETRO NES',4999,20,'Con la consola Level Up RETRO NES jugá tus juegos preferidos ya que incluye una selección de 500 títulos incorporados.','2021-09-25 00:31:17','2021-09-25 01:05:14',NULL,0,3,1,1),(17,'PS4 Cyberpunk 2077',9499,36,'Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones','2021-09-25 03:05:07','2021-09-25 03:05:47',NULL,0,3,1,2),(18,'Notebook HP Pavilion Gaming 16,1\" Core i5-10300H 8GB 512GB 16-A0061LA',199999,17,'La notebook HP 16-A0061LA cuenta con un diseño compacto y moderno. Gracias a sus moderadas medidas de: 37 cm de largo x 26,25 cm de ancho x 2,35 cm de alto y su liviano peso de: 2,36 Kg vas a poder llevarla con vos a donde quieras.','2021-09-25 03:09:02','2021-09-25 03:23:35',NULL,0,2,1,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `typeproducts`
--

DROP TABLE IF EXISTS `typeproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `typeproducts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typeproducts`
--

LOCK TABLES `typeproducts` WRITE;
/*!40000 ALTER TABLE `typeproducts` DISABLE KEYS */;
INSERT INTO `typeproducts` VALUES (1,'consolas'),(2,'juegos'),(3,'pc');
/*!40000 ALTER TABLE `typeproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'default-user-image.png',
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL,
  `loginDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `delete` tinyint NOT NULL DEFAULT '0',
  `accessId` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `FK_feb7d98d-c838-4adb-b8c3-a1b4c1ca5668` (`accessId`),
  CONSTRAINT `FK_feb7d98d-c838-4adb-b8c3-a1b4c1ca5668` FOREIGN KEY (`accessId`) REFERENCES `access` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'juan','juanmadegiorgi@gmail.com','img-1634262917437.jpg','$2a$12$HhaAgxB07Gm3qOX42QP19usf76hrC1TjvYmQd9WuoxnZ0CzZ3yKoK','2021-09-22 02:16:18','2021-10-21 07:16:16',NULL,'2021-10-21 07:16:16',0,2),(3,'eze','eze@gmail.com','default-user-image.png','$2a$12$ezh87h3Vj.Gd/5j8l7QmSOa6yBMlX8Phuo8FFDNxwQMPW5.4EgsJC','2021-10-15 02:31:08','2021-10-15 18:46:20',NULL,'2021-10-15 18:46:20',0,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-22 19:41:52
