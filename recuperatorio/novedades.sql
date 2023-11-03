-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 03, 2023 at 01:46 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cerveceria`
--

-- --------------------------------------------------------

--
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb3_unicode_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'CERVEZA IPA', '¿Como se creo?', 'la IPA es un estilo de cerveza de tradición inglesa que se caracteriza como una “ale”, es decir, que dispone de alta fermentación. De textura pálida y espumosa, con un alto nivel de alcohol y de lúpulo, la creación de la \"India pale ale\" se remonta a 1790, cuando los cerveceros británicos de la East India Company debían buscar la mejor forma de conservación de la bebida'),
(2, 'CERVEZA IPA', '¿Como se creo?', 'la IPA es un estilo de cerveza de tradición inglesa que se caracteriza como una “ale”, es decir, que dispone de alta fermentación. De textura pálida y espumosa, con un alto nivel de alcohol y de lúpulo, la creación de la \"India pale ale\" se remonta a 1790, cuando los cerveceros británicos de la East India Company debían buscar la mejor forma de conservación de la bebida'),
(3, 'La nueva IPA que sorprende en el mundo de las cervezas', 'Grolsch amplía su portfolio y suma una nueva especialidad a la familia.', 'Los amantes de la cerveza están expectantes a cada nuevo lanzamiento. El paladar cervecero se ha vuelto cada día más exigente y se dividen fuertemente aquellos que son aficionados por las Golden, las negras, IPA, APA, y muchas otras. Defensores acérrimos de cada variedad distinguen sin titubear texturas, sabores y temperaturas.'),
(4, 'La nueva IPA que sorprende en el mundo de las cervezas', 'Grolsch amplía su portfolio y suma una nueva especialidad a la familia.', 'Los amantes de la cerveza están expectantes a cada nuevo lanzamiento. El paladar cervecero se ha vuelto cada día más exigente y se dividen fuertemente aquellos que son aficionados por las Golden, las negras, IPA, APA, y muchas otras. Defensores acérrimos de cada variedad distinguen sin titubear texturas, sabores y temperaturas.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
