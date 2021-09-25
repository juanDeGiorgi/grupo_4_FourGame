CREATE DATABASE  IF NOT EXISTS `fourgame_dev` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `fourgame_dev`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fourgame_dev
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
-- Dumping data for table `access`
--

LOCK TABLES `access` WRITE;
/*!40000 ALTER TABLE `access` DISABLE KEYS */;
INSERT INTO `access` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'best-seller'),(2,'in-sale'),(3,'new-release');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `countrys`
--

LOCK TABLES `countrys` WRITE;
/*!40000 ALTER TABLE `countrys` DISABLE KEYS */;
INSERT INTO `countrys` VALUES (1,'argentina');
/*!40000 ALTER TABLE `countrys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `detailorder`
--

LOCK TABLES `detailorder` WRITE;
/*!40000 ALTER TABLE `detailorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `detailorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `paymethods`
--

LOCK TABLES `paymethods` WRITE;
/*!40000 ALTER TABLE `paymethods` DISABLE KEYS */;
INSERT INTO `paymethods` VALUES (1,'efectivo'),(2,'cuotas');
/*!40000 ALTER TABLE `paymethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productimages`
--

LOCK TABLES `productimages` WRITE;
/*!40000 ALTER TABLE `productimages` DISABLE KEYS */;
INSERT INTO `productimages` VALUES (1,'ps4.jpg',1),(2,'mando.jpg',1),(3,'ps4_alt.jpg',1),(4,'callOfDuty-ps5.png',2),(5,'img-1628746860772.jpg',3),(6,'ps5.jpg',4),(7,'mando.jpeg',4),(8,'ps5_alt.jpg',4),(9,'PC-Armada-Media-0026_600.jpg',5),(10,'img-1629611566665.jpg',5),(11,'img-1629611566667.jpg',5),(12,'img-1629611566668.jpg',5),(13,'img-1629611566670.jpg',5),(14,'nintendo.jpg',6),(15,'switch.jpg',6),(16,'img-1629678319484.jpg',6),(17,'img-1629678319486.jpg',6),(18,'pc-premire.jpg',7),(19,'disco.jpg',7),(20,'mother.jpg',7),(21,'micro.jpg',7),(22,'gpu.jpg',7),(23,'xbox-s.jpg',8),(24,'spiderman.webp',9),(38,'img-1632531864741.webp',16),(39,'img-1632531914569.webp',16),(40,'img-1632531914570.webp',16),(41,'img-1632539107251.webp',17),(65,'img-1632540215453.webp',18),(66,'img-1632540215454.webp',18),(67,'img-1632540215455.webp',18),(68,'img-1632540215455.webp',18),(69,'img-1632540215457.webp',18);
/*!40000 ALTER TABLE `productimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Sony PlayStation 4 Slim 1TB',62980,10,'Con la consola PlayStation 4, líder mundial en ventas durante años, podrás gozar de horas de juego y una excelente navegabilidad para disfrutar de películas, series y contenido online.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,1,1,1),(2,'Call of Duty Black Ops Cold War Standard Edition',5300,10,'Combinando realidad con ficción, Call of Duty es un juego único por su calidad de desarrollo. Su objetivo es que cada jugador logre conquistar todas las misiones, ya sea en una batalla contra otros ejércitos o combatiendo zombies. Sus gráficos, jugabilidad, desafíos e historias han hecho de la franquicia una de las más destacadas dentro de los videojuegos en primera persona.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,2,1,2),(3,'Resident Evil Village Collector\'s Edition Capcom PS4 Físico',7999,0,'Juego para disfrutar con la luz encendida y un rosario en el cuello. No apto para pacientes de riesgo, epilépticos ni vacunados con Sputnik (Los zombies tienen Astrazeneca)','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,3,2,2),(4,'Sony PlayStation 5 825GB Digital Edition White color',234900,15,'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,3,2,1),(5,'Pc Ryzen 3 ,msi A320M PRO MAX ,8gb oloy',105599,15,'Pc Ryzen 3 3200G ,msi A320M PRO MAX,8GB oloy RGB,Fuente cooler master smart 600w','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,2,1,3),(6,'Super Smash Bros Ultimate Standard Edition Nintendo Switch Físico',1980,10,'Este videojuego de acción y pelea combina diversos personajes de distintas sagas de Nintendo y otras editoriales, con más de 100 escenarios disponibles, 74 luchadores y más de 800 temas musicales. Esto convierte a Super Smash Bros Ultimate en un juego con un sinfín de aventuras y posibilidades de enfrentar a luchadores muy distintos entre sí.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,2,1,2),(7,'Amd Ryzen 5 3600X + B450M + 16gb Ddr4 + 1tb',162980,25,'PLACA DE VIDEO 1x MSI RADEON RX 570 ARMOR 4GB OC DDR5 DUAL FAN (NO UTILIZAR) ALMACENAMIENTO 1x WESTERN DIGITAL NO UTILIZAR - EX DISCO HDD 1TB BLUE - NO UTILIZAR - FUENTES UPS Y CABLES MOD 1x SENTEY FUENTE 550W SNP-HS WHITE 80+ MEMORIAS RAM 1x CRUCIAL MEMORIA RAM 16GB 3200MHZ BALLISTIX SPORT LT WHITE DDR4 MOTHERBOARDS 1x ASUS MOTHER B450M-A PRIME CSM AM4 AMD ALMACENAMIENTO 1x ADATA SSD M.2 256GB XPG GAMMIX S11 PRO M.2 NVME 3500 MB GABINETE 1x LNZ GABINETE LZ40 RGB PROCESADORES 1x AMD MICRO RYZEN 5 3600X 4.4GHz TURBO AM4','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,1,1,3),(8,'Microsoft Xbox Series S 512GB color blanco',89999,20,'La nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,1,2,1),(9,'Marvel\'s Spider-Man Miles Morales Standard Edition Sony PS5 Físico',2980,0,'Disfruta de ésta edición, acompañando a Peter Parker en sus aventuras.','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,0,1,2,2),(16,'Consola Level Up RETRO NES',4999,20,'Con la consola Level Up RETRO NES jugá tus juegos preferidos ya que incluye una selección de 500 títulos incorporados.','2021-09-25 00:31:17','2021-09-25 01:05:14',NULL,0,3,1,1),(17,'PS4 Cyberpunk 2077',9499,36,'Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones','2021-09-25 03:05:07','2021-09-25 03:05:47',NULL,0,3,1,2),(18,'Notebook HP Pavilion Gaming 16,1\" Core i5-10300H 8GB 512GB 16-A0061LA',199999,17,'La notebook HP 16-A0061LA cuenta con un diseño compacto y moderno. Gracias a sus moderadas medidas de: 37 cm de largo x 26,25 cm de ancho x 2,35 cm de alto y su liviano peso de: 2,36 Kg vas a poder llevarla con vos a donde quieras.','2021-09-25 03:09:02','2021-09-25 03:23:35',NULL,0,2,1,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,'Buenos Aires',1),(2,'Catamarca',1),(3,'Chaco',1),(4,'Chubut',1),(5,'Córdoba',1),(6,'Corrientes',1),(7,'Entre Ríos',1),(8,'Formosa',1),(9,'Jujuy',1),(10,'La Pampa',1),(11,'La Rioja',1),(12,'Mendoza',1),(13,'Misiones',1),(14,'Neuquén',1),(15,'Río Negro',1),(16,'Salta',1),(17,'San Juan',1),(18,'San Luis',1),(19,'Santa Cruz',1),(20,'Santa Fe',1),(21,'Santiago del Estero',1),(22,'Tierra del Fuego',1),(23,'Tucumán',1);
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `typeproducts`
--

LOCK TABLES `typeproducts` WRITE;
/*!40000 ALTER TABLE `typeproducts` DISABLE KEYS */;
INSERT INTO `typeproducts` VALUES (1,'consolas'),(2,'juegos'),(3,'pc');
/*!40000 ALTER TABLE `typeproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'juan','juanmadegiorgi@gmail.com','img-1632528024426.png','$2a$12$wL2ZSsc19lTwGCqZiUC4GedUcwQILqXtakNLsEdiVefjho7MKMMNu','2021-09-22 02:16:18','2021-09-25 01:01:32',NULL,'2021-09-25 01:01:32',0,2),(2,'Rango','ezequielrango290@gmail.com','img-1630902354443.jpg','$2a$12$ADn4LaKEisc1oTVlijocyuPCOCnUCyklVv0h8r5vwd2tpSHWnZGnK','2021-09-22 02:16:18','2021-09-22 02:16:18',NULL,'2021-09-22 02:16:18',0,2);
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

-- Dump completed on 2021-09-25  0:27:37
