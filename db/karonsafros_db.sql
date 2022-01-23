CREATE DATABASE  IF NOT EXISTS `karonsafros_db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `karonsafros_db`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: karonsafros_db
-- ------------------------------------------------------
-- Server version	5.7.36

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
-- Table structure for table `envoices`
--

DROP TABLE IF EXISTS `envoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `envoices` (
  `id` int(11) NOT NULL,
  `iduser` varchar(45) COLLATE utf8_bin NOT NULL,
  `idshopping` varchar(45) COLLATE utf8_bin NOT NULL,
  `users_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_envoices_users1` (`users_id`),
  CONSTRAINT `fk_envoices_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `envoices`
--

LOCK TABLES `envoices` WRITE;
/*!40000 ALTER TABLE `envoices` DISABLE KEYS */;
/*!40000 ALTER TABLE `envoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `price` int(11) NOT NULL,
  `reference` varchar(45) COLLATE utf8_bin NOT NULL,
  `quantity` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `description` mediumtext COLLATE utf8_bin NOT NULL,
  `image` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Crema de peinar SKALA',33000,'10-852','2','Crema de peinar para cabello tipo c2, contiene vitaminas y minerales que ayudan al crecimiento.','skala.png'),(2,'Aceite de Ricino Negro',37000,'10-488','2','Este enjuague para trenzas y cuero cabelludo, limpia suavemente y acondiciona el cabello sin causar frizz.','aceite-ricino.png'),(3,'Crema Blanqueadora Pgitiel de Arminio',18000,'11-789','2','Crema con agente activo que ayuda a la renovacion celular y aclaramiento de la piel.','crema-arminio.png'),(4,'Crema Cetafhil',45000,'11-199','2','Crema de piel, que nueva celulas muertas e hidrata rejuvenienciendo y dando una piel terza.','crema-cetafhil.jpg'),(5,'Set de Maquillaje',83000,'12-974','2','Polvo compacto, base, primer, labial y pestañina para la rutina diaria.','set-maquillaje.png'),(6,'Polvo Compacto',10000,'12-870','2','Polvo tipo mate para todo tipo de piel.','polvo-compacto.png'),(7,'Turbante Sencillo',10000,'13-976','2','Turbante de algodon con lindo estampado floral.','turbante-sencillo.png'),(8,'Aretes',15000,'13-111','2','Aretes tipo argolla con perla de munaro en centro.','aretes.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppings`
--

DROP TABLE IF EXISTS `shoppings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoppings` (
  `id` int(11) NOT NULL,
  `iduser` varchar(45) COLLATE utf8_bin NOT NULL,
  `envoices_id` varchar(45) COLLATE utf8_bin NOT NULL,
  `envoices_id1` int(11) NOT NULL,
  `products_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_shoppings_envoices1` (`envoices_id1`),
  KEY `fk_shoppings_products1` (`products_id`),
  CONSTRAINT `fk_shoppings_envoices1` FOREIGN KEY (`envoices_id1`) REFERENCES `envoices` (`id`),
  CONSTRAINT `fk_shoppings_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppings`
--

LOCK TABLES `shoppings` WRITE;
/*!40000 ALTER TABLE `shoppings` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `lastname` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(61) COLLATE utf8_bin NOT NULL,
  `confirmarPassword` varchar(61) COLLATE utf8_bin DEFAULT NULL,
  `avatar` varchar(61) COLLATE utf8_bin NOT NULL,
  `rol` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Joseymar','Hernandez','joseyThe_best@hotmail.com','$2a$10$WIwpQ.JPEdD5FTcWE5C.zeBnR5fwyBmp2JD95iaH1sWPf0N5kIb8.','$2a$10$3g5CXK.EZrQlbImZ3EBx6.EwR/YHQnZ9YsE5imoMei8MIjF.s97ka','foto-1642715706443.jpg',2),(3,'Carlos','Rodriguez','carlosr@hotmail.com','$2a$10$Yp.zuN.5FZx.IwEnnQsaZ.vcxSgBuvwJ.8YAlcWJX3sT2cDyJ8wXO','$2a$10$DtvrNb9LMi/awSSgQmn8juO2TQWi/O9izb3wjHlRgyFzER81UirmC','foto-1642817233087.jpg',2),(4,'Carlos','Lavado','caredlav@gmail.com','$2a$10$TivHqmFfsMsfBDQ265r2EuCL3nhqTPcDRnVkdMVePjx2OaM9NH8fC','$2a$10$62pPIMqLNsv7a8ME0nNLqOfTPoS1EfzllEQsqZpcgv/nhzy5z7B2G','foto-1642817738782.jpeg',1);
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

-- Dump completed on 2022-01-21 22:46:24
