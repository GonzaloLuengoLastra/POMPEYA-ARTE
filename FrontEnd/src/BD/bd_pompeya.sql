-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para pompeya
CREATE DATABASE IF NOT EXISTS `pompeya` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pompeya`;

-- Volcando estructura para tabla pompeya.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(50) NOT NULL DEFAULT '',
  `descripcion_categoria` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla pompeya.categorias: ~0 rows (aproximadamente)

-- Volcando estructura para tabla pompeya.contratos
CREATE TABLE IF NOT EXISTS `contratos` (
  `id_contrato` int NOT NULL AUTO_INCREMENT,
  `descripcion_contrato` varchar(100) NOT NULL DEFAULT '0',
  `plazo_contrato` date DEFAULT NULL,
  `precio_contrato` int NOT NULL DEFAULT '0',
  `id_tipo_contrato` int NOT NULL DEFAULT '0',
  `id_sala` int NOT NULL DEFAULT '0',
  `id_usuario` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_contrato`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `id_sala` FOREIGN KEY (`id_sala`) REFERENCES `salas` (`id_sala`),
  CONSTRAINT `id_tipo_contrato` FOREIGN KEY (`id_tipo_contrato`) REFERENCES `tipo_contrato` (`id_tipo_contrato`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla pompeya.contratos: ~0 rows (aproximadamente)

-- Volcando estructura para tabla pompeya.incorporacion
CREATE TABLE IF NOT EXISTS `incorporacion` (
  `id_incorporacion` int NOT NULL AUTO_INCREMENT,
  `descripcion_incor` varchar(100) NOT NULL DEFAULT '0',
  `valor_incor` int NOT NULL DEFAULT '0',
  `id_usuario` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_incorporacion`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla pompeya.incorporacion: ~0 rows (aproximadamente)

-- Volcando estructura para tabla pompeya.precios
CREATE TABLE IF NOT EXISTS `precios` (
  `id_precio` int NOT NULL AUTO_INCREMENT,
  `cantida_precio` int NOT NULL,
  PRIMARY KEY (`id_precio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla pompeya.precios: ~0 rows (aproximadamente)

-- Volcando estructura para tabla pompeya.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(100) NOT NULL DEFAULT '',
  `fecha_producto` date DEFAULT NULL,
  `imagen_producto` longblob NOT NULL,
  `id_usuario` int NOT NULL DEFAULT '0',
  `id_categoria` int NOT NULL DEFAULT '0',
  `id_precio` int NOT NULL DEFAULT '0',
  `id_sala` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_producto`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_categoria` (`id_categoria`),
  KEY `id_precio` (`id_precio`),
  KEY `id_sala` (`id_sala`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`),
  CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`id_precio`) REFERENCES `precios` (`id_precio`),
  CONSTRAINT `productos_ibfk_4` FOREIGN KEY (`id_sala`) REFERENCES `salas` (`id_sala`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla pompeya.productos: ~0 rows (aproximadamente)

-- Volcando estructura para tabla pompeya.salas
CREATE TABLE IF NOT EXISTS `salas` (
  `id_sala` int NOT NULL AUTO_INCREMENT,
  `nombre_sala` varchar(50) NOT NULL DEFAULT '',
  `descripcion_sala` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_sala`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla pompeya.salas: ~0 rows (aproximadamente)

-- Volcando estructura para tabla pompeya.tipo_contrato
CREATE TABLE IF NOT EXISTS `tipo_contrato` (
  `id_tipo_contrato` int NOT NULL AUTO_INCREMENT,
  `nombre_tipo_contrato` varchar(50) NOT NULL DEFAULT '0',
  `descripcion_tipo_contrato` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_tipo_contrato`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla pompeya.tipo_contrato: ~0 rows (aproximadamente)

-- Volcando estructura para tabla pompeya.tipo_pagos
CREATE TABLE IF NOT EXISTS `tipo_pagos` (
  `id_tipo_pago` int NOT NULL AUTO_INCREMENT,
  `nombre_tipo_pago` varchar(50) NOT NULL DEFAULT '0',
  `descripcion_tipo_pago` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_tipo_pago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla pompeya.tipo_pagos: ~0 rows (aproximadamente)

-- Volcando estructura para tabla pompeya.tipo_venta
CREATE TABLE IF NOT EXISTS `tipo_venta` (
  `id_tipo_venta` int NOT NULL AUTO_INCREMENT,
  `nombre_tipo_venta` varchar(50) NOT NULL DEFAULT '0',
  `descripcion_tipo_venta` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_tipo_venta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla pompeya.tipo_venta: ~0 rows (aproximadamente)

-- Volcando estructura para tabla pompeya.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `rut` varchar(15) NOT NULL DEFAULT '0',
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `apellido` varchar(50) NOT NULL DEFAULT '0',
  `telefono` int NOT NULL DEFAULT '0',
  `direccion` varchar(50) NOT NULL DEFAULT '0',
  `nombreUsuario` varchar(50) NOT NULL DEFAULT '0',
  `email` varchar(50) NOT NULL DEFAULT '0',
  `contrasena` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `privilegio` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla pompeya.usuarios: ~0 rows (aproximadamente)
REPLACE INTO `usuarios` (`id_usuario`, `rut`, `nombre`, `apellido`, `telefono`, `direccion`, `nombreUsuario`, `email`, `contrasena`, `privilegio`) VALUES
	(1, '19575214-1', 'Gonzalo', 'Luengo', 982828282, 'Camus V', 'Gonzaluc', 'g@gmail.com', 'gonza1997', 1),
	(2, 'asdasda', 'adasda', 'asdasd', 11231, 'asdasd', 'asdasd', 'ads@asd', 'asdasd', 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
usuarios