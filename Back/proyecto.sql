-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2021 a las 09:04:38
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id_actividades` int(11) NOT NULL,
  `nombre` varchar(1000) NOT NULL,
  `descripcion` varchar(2000) NOT NULL,
  `id_potencia` int(11) DEFAULT NULL,
  `id_diagnostico` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id_actividades`, `nombre`, `descripcion`, `id_potencia`, `id_diagnostico`) VALUES
(1, 'El sentido del humor hacia uno mismo.', 'Imaginar las risas de fondo que suelen aparecer en series de humor, cuando al personaje le pasa algo ridículo, ante los propios\r\ncontratiempos de la vida cotidiana. Por ejemplo: se acaba la batería del móvil cuando te llama tu suegra, sales de una reunión\r\nimportante y descubres que llevas la camiseta del revés, etc.', 1, 1),
(3, 'El lado divertido de las cosas!', 'Elige una película que sea alegre y divertida o que contenga escenas que fomenten ver el lado divertido de lo que ocurre.', 1, 1),
(4, 'Potenciar la gratitud, cuando ésta está equilibrada en la persona.', 'Busca un momento fijo del día para reflexionar acerca de algo que\r\nte haya gustado de la persona hacia quien quieres mostrar gratitud:\r\npuede ser un gesto, una palabra, un acto, un momento especial,\r\nalgo que hacía mientras ni siquiera se daba cuenta, o algo en lo que\r\nhas caído en la cuenta sobre él o ella de repente, que no habías percibido antes. Si se te ocurre de repente o lo cazas en un momento\r\ndado, anótalo para que no se te olvide. Elige el soporte que prefieras para lanzar tu mensaje (pon en marcha tu creatividad), y hazle\r\nsaber cuánto valoras eso que ha hecho o dicho, y lo agradecido o\r\nagradecida que estás por ello.', 1, 2),
(5, 'Emociones a lo largo del día.', 'Durante una semana anote aquellas emociones que se hayan\r\nexperimentado a lo largo de cada día, y en qué situaciones han\r\nido surgiendo. Luego registralas en los criterios de diagnostico iniciales! De este modo la persona se va haciendo consciente de las emociones que va viviendo en cada momento, incluso\r\naún siendo contradictorias. Para poder menejarlas de manera mas eficiente con tu medico tratante. ', 1, 3),
(6, 'Potenciar la comunicación emocional con las personas cercanas.', 'Durante un día le pediremos a nuestra pareja/amigo cercano/\r\nfamiliar que nos exprese cómo se siente sin utilizar las palabras\r\ny nosotros trataremos de poner nombre a eso que nos están expresando.\r\nDespués les pediremos que nos confirmen, corrijan o maticen\r\naquello que consideren para que nos ayuden a ajustar mejor\r\nnuestra percepción con lo que ellos sentían realmente.', 1, 4),
(7, 'Mantente activo!', 'Haz actividad física regular o haz ejercicio la mayoría de los días de la semana.(Ejercicios suaves como caminatas)', 2, 1),
(8, 'Meditación para absorber mejor el medicamento! ', 'Practica ejercicios de respiración profunda, relajación muscular o yoga por un tiempo de media hora diaria.(Consulta con tu medico que ejercicios son mas adecuados para tu adulto mayor).', 2, 2),
(9, 'Medicacion', '3er Medicacion  diagnostico Medicacion3', 2, 3),
(10, 'Medicacion', '4to Medicacion diagnostico comun4', 2, 4),
(11, 'Utilice la segunda parte de la tarde noche para descansar.', 'Realizar otra actividad 90 minutos antes de irse a la cama.\r\nDurante este tiempo puede hacer algo diferente y no estresante, como leer,\r\nver televisión o escuchar música.', 3, 1),
(12, 'Cuida el ambiente en el que duermes.', 'Para poder conciliar el sueño, necesitamos que el ambiente sea propicio para ello. Dormir con ruido de fondo, con frío o calor, con iluminación, no nos ayudará a ello. Prepara tu habitación de forma adecuada para poder dormir. No pongas la tele, minimiza los ruidos, ponte ropa cómoda y mantén la habitación en una temperatura confortable.', 3, 2),
(13, 'Descanso', '3er Descanso  diagnostico 3', 3, 3),
(14, 'Descanso', '4to Descanso diagnostico comun4', 3, 4),
(15, 'Evite el ejercicio físico tres horas antes de irse a la cama.', 'Realizar alguna actividad física antes de este período puede resultar beneficioso.', 3, 1),
(17, 'Trate de conseguir estar despierto/a durante todo el día.', ' Trata de dormir por la noche. El cuerpo se acostumbra a los hábitos. Estableciendo unas rutinas es más probable que duerma bien.', 3, 1),
(18, 'Controla tus alimentos.', 'Reduce el consumo de dulces y bebidas azucaradas.(Por el tiempo que uses los medicamentos)', 2, 1),
(19, 'Escoge bien tus alimentos!', 'Evita los alimentos y bebidas con cafeína, particularmente al final del día.', 2, 1),
(20, 'Empezar el día mimando nuestro cuerpo, la gratitud empieza por\r\nnosotros mismos.', 'Nos levantaremos 10 minutos antes cada día, tomaremos conciencia de nuestra expresión facial, del estado de nuestra piel y de todo\r\nnuestro cuerpo. Observaremos qué necesita nuestro cuerpo, en la ducha nos daremos un masaje con la esponja y el gel siendo conscientes de lo que\r\nsentimos al hacerlo.\r\nSi nuestra piel está seca nos aplicaremos crema hidratante. Seremos conscientes de la agradable sensación que sentimos en\r\ntodo nuestro cuerpo.', 1, 2),
(21, 'Poder aliviar nuestra tristeza cuando nos sintamos abatidos sin causa.', 'Reflexiona sobre las canciones que te entristecen e intenta determinar cuáles te provocan mayor intensidad emocional.\r\nTenlas localizadas y accesibles (En tu celular, o pc) de manera que si en algún momento experimentas sensaciones de tristeza,\r\nmelancolía o nostalgia puedas descargar esa emoción de una forma\r\nrápida e intensa para que cuanto antes puedas recuperar tu equilibrio y continuar tus tareas o actividades.', 1, 3),
(22, 'Aumentar tu sentimiento de pertenencia a la naturaleza.', 'Escribe una lista de aquellas cosas que ocurren en ti igual que en\r\nla naturaleza, por ejemplo: mi pelo crece como el césped.\r\nLuego imagina cómo esos procesos ocurren a la vez de manera\r\narmónica en el mundo en una meditación visualizando dichos procesos durante cinco minutos.', 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actualizacion`
--

CREATE TABLE `actualizacion` (
  `id_actualizacion` int(11) NOT NULL,
  `descripcion` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adulto_mayor`
--

CREATE TABLE `adulto_mayor` (
  `id_adulto_mayor` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nacimiento` date NOT NULL,
  `diagnostico` int(11) NOT NULL,
  `id_cuidador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `adulto_mayor`
--

INSERT INTO `adulto_mayor` (`id_adulto_mayor`, `nombre`, `apellido`, `nacimiento`, `diagnostico`, `id_cuidador`) VALUES
(176, 'a', 'a', '2020-01-01', 1, 67),
(177, 'Pedro Ricardo ', 'Mendoza Alvarez', '1964-08-09', 1, 67),
(179, 'María Camila', 'Miranda Chavez', '1960-10-12', 1, 67),
(180, 'a', 'a', '2020-01-01', 1, 68),
(181, 'a', 'a', '2020-01-01', 1, 69),
(182, 'Sebastian ', 'Ramirez ', '2020-12-18', 1, 69),
(183, 'El adulto de santi', 'Santi', '1974-06-22', 1, 68),
(184, 'Josefina ', 'Mendoza Ramirez', '1959-04-24', 2, 67);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `id_respuesta` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `fecha` varchar(15) DEFAULT NULL,
  `comentario` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `id_respuesta`, `nombre`, `fecha`, `comentario`) VALUES
(44, 0, 'Jorge Javier Mendoza Ramirez', '2021-6-8', 'Me gusta conocer mas de otros diagnósticos, y saber que no estamos solos!'),
(45, 44, 'Santiago Gutierrez', '2021-6-8', 'Concuerdo contigo!'),
(46, 45, 'Sebastian Bueno ', '2021-6-8', 'Totalmente!');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuidador`
--

CREATE TABLE `cuidador` (
  `id_cuidador` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cuidador`
--

INSERT INTO `cuidador` (`id_cuidador`, `email`, `nombre`, `password`) VALUES
(67, 'jorge_mendoza01@outlook.com', 'Jorge Javier Mendoza Ramirez', 'f1331034b2a878b02bd115ff9e224e3954c4458c'),
(68, 'santiago.gutierrez02@correo.usa.edu.co', 'Santiago Gutierrez', '792d28329de7ed446c01b83f731a071248ffeaf4'),
(69, 'juan.bueno01@correo.usa.edu.co', 'Sebastian Bueno ', 'db043b2055cb3a47b2eb0b5aebf4e114a8c24a5a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuidador_has_adultomayor`
--

CREATE TABLE `cuidador_has_adultomayor` (
  `id_cuidador` int(11) DEFAULT NULL,
  `id_adulto_mayor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cuidador_has_adultomayor`
--

INSERT INTO `cuidador_has_adultomayor` (`id_cuidador`, `id_adulto_mayor`) VALUES
(67, 176),
(67, 177),
(67, 179),
(68, 180),
(69, 181),
(69, 182),
(68, 183),
(67, 184);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diagnostico`
--

CREATE TABLE `diagnostico` (
  `id_diagnostico` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `diagnostico`
--

INSERT INTO `diagnostico` (`id_diagnostico`, `nombre`, `descripcion`) VALUES
(1, 'Episodio depresivo.', 'La depresión es un trastorno mental frecuente. Se calcula que afecta a más de 300 millones de personas en el mundo.'),
(2, 'Trastorno depresivo recurrente.', 'Cuando hay una recurrencia de un episodio depresivo, hablamos de trastorno depresivo recurrente.'),
(3, 'Distimia.', 'La distimia se caracteriza por sintomatología depresiva menos severa en comparación con la de un episodio depresivo o del trastorno depresivo recurrente. A pesar de esto, el trastorno se inicia normalmente en la adolescencia y es persistente, ya que los síntomas suelen durar desde al menos 2 años hasta décadas. Algunas personas con este trastorno, a veces sufren adicionalmente episodios depresivos. En estos casos donde aparece distimia + episodios depresivos, se diagnostica doble depresión.'),
(4, 'Depresión Bipolar.', 'El trastorno afectivo bipolar (trastorno maniaco-depresivo) es un trastorno severo. Es menos frecuente que los trastornos unipolares.\r\nLos pacientes con trastorno bipolar sufren episodios tanto depresivos como maníacos. Los episodios maníacos pueden aparecer después de haber tenido diversos episodios depresivos.'),
(5, 'Depresión psicótica.', 'Un tipo especial de depresión es la llamada depresión psicótica o delirante. La depresión psicótica se caracteriza por ideas o pensamientos falsos (delirios) y, a veces también por alucinaciones. Los delirios suelen estar centrados en sentimientos de culpa desproporcionados (por ejemplo, \"sólo soy una carga para mi familia\" o \"he cometido un error terrible\").'),
(6, 'Depresión atípica.', 'Los pacientes con este tipo de depresión tienen los mismos síntomas depresivos que los pacientes con depresión típica, con dos excepciones: mientras que los pacientes con depresión típica experimentan una falta de apetito (a menudo seguida de una pérdida de peso) y dificultades para dormirse, los pacientes con depresión atípica muestran incremento del apetito y la ingestión de alimentos e incremento de la necesidad de dormir (hipersomnolencia).');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id_evento` int(11) NOT NULL,
  `title` varchar(60) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `start` varchar(11) DEFAULT NULL,
  `end` varchar(11) DEFAULT NULL,
  `color` varchar(1000) DEFAULT NULL,
  `textColor` varchar(1000) DEFAULT NULL,
  `id_adulto_mayor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id_evento`, `title`, `description`, `start`, `end`, `color`, `textColor`, `id_adulto_mayor`) VALUES
(30, 'Bupropion.', 'Tableta 150mg, dos dosis cada 6 horas.', '2021-06-02', '2021-06-10', '#99DFBB', '#000000', 177),
(33, 'Ibuprofeno.', 'ibuprofeno dosis 400 mg cada 8 horas.', '2021-06-01', '2021-06-6', '#99DFBB', '#000000', 184),
(34, 'Ibuprofeno.', 'Ibuprofeno 400mg cada 6 horas.', '2021-06-01', '2021-06-25', '#99DFBB', '#000000', 182);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `potencia`
--

CREATE TABLE `potencia` (
  `id_potencia` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `potencia`
--

INSERT INTO `potencia` (`id_potencia`, `nombre`, `descripcion`) VALUES
(1, 'psicoterapia', 'Tratamiento científico, de naturaleza psicológica que, a partir de manifestaciones psíquicas o físicas del malestar humano, promueve el logro de cambios'),
(2, 'medicacion', 'Tratamiento científico, de naturaleza quimica que, a partir de sustancias combinadas, promueve el logro de cambios desde un medicamento.'),
(3, 'descanso', 'Hoy no tuvo psicoterapia ni medicacion el adulto mayor.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `progreso`
--

CREATE TABLE `progreso` (
  `id_adulto_mayor` int(11) NOT NULL,
  `id_actividades` int(11) NOT NULL,
  `valoracionIni` float NOT NULL,
  `valoracionFin` float NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `progreso`
--

INSERT INTO `progreso` (`id_adulto_mayor`, `id_actividades`, `valoracionIni`, `valoracionFin`, `fecha`) VALUES
(177, 1, 2.17, 3.33, '2021-06-06'),
(177, 11, 2, 4, '2021-06-06'),
(182, 1, 1, 3.2, '2021-06-07'),
(182, 11, 1.5, 3.17, '2021-06-07'),
(182, 15, 1, 4, '2021-06-07'),
(182, 17, 2.6, 3.6, '2021-06-07'),
(183, 1, 1, 3.6, '2021-06-07'),
(184, 12, 1.67, 3.17, '2021-06-08'),
(183, 11, 2.4, 3.2, '2021-06-08'),
(183, 15, 1.8, 3.2, '2021-06-08'),
(182, 19, 2.78, 3.67, '2021-06-08'),
(182, 18, 2.8, 3.4, '2021-06-08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `progreso2`
--

CREATE TABLE `progreso2` (
  `id_criterio` int(11) NOT NULL,
  `descripcion` varchar(2000) DEFAULT NULL,
  `valoracion` int(11) DEFAULT NULL,
  `id_adulto_mayor` int(11) DEFAULT NULL,
  `id_actividades` int(11) DEFAULT NULL,
  `criterio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `progreso2`
--

INSERT INTO `progreso2` (`id_criterio`, `descripcion`, `valoracion`, `id_adulto_mayor`, `id_actividades`, `criterio`) VALUES
(1003, '1. Estado de ánimo.', 3, 177, 1, 1),
(1004, '2. Nivel de conciencia emocional ante la situacion.', 2, 177, 1, 1),
(1005, '3. Nivel de Descanso', 2, 177, 1, 1),
(1006, '4. Nivel de interes ante trabajos u actividades.', 3, 177, 1, 1),
(1007, '5. Nivel de serenidad ante las situaciones negativas.', 2, 177, 1, 1),
(1008, '6. Nivel de concentracion', 1, 177, 1, 1),
(1009, '3. Nivel de Descanso', 3, 177, 1, 2),
(1010, '2. Nivel de conciencia emocional ante la situacion.', 4, 177, 1, 2),
(1011, '1. Estado de ánimo.', 4, 177, 1, 2),
(1012, '6. Nivel de concentracion', 3, 177, 1, 2),
(1013, '5. Nivel de serenidad ante las situaciones negativas.', 3, 177, 1, 2),
(1014, '4. Nivel de interes ante trabajos u actividades.', 3, 177, 1, 2),
(1015, '2. Nivel de conciencia emocional ante la situacion.', 2, 177, 11, 1),
(1016, '4. Nivel de interes ante trabajos u actividades.', 2, 177, 11, 1),
(1017, '3. Nivel de Descanso', 2, 177, 11, 1),
(1018, '5. Nivel de serenidad ante las situaciones negativas.', 2, 177, 11, 1),
(1019, '1. Estado de ánimo.', 2, 177, 11, 1),
(1020, '3. Nivel de Descanso', 4, 177, 11, 2),
(1021, '2. Nivel de conciencia emocional ante la situacion.', 4, 177, 11, 2),
(1022, '5. Nivel de serenidad ante las situaciones negativas.', 4, 177, 11, 2),
(1023, '1. Estado de ánimo.', 4, 177, 11, 2),
(1024, '4. Nivel de interes ante trabajos u actividades.', 4, 177, 11, 2),
(1025, '1. Estado de ánimo.', 1, 182, 1, 1),
(1026, '2. Nivel de conciencia emocional ante la situacion.', 1, 182, 1, 1),
(1027, '3. Nivel de Descanso', 1, 182, 1, 1),
(1028, '5. Nivel de serenidad ante las situaciones negativas.', 1, 182, 1, 1),
(1029, '4. Nivel de interes ante trabajos u actividades.', 1, 182, 1, 1),
(1030, '1. Estado de ánimo.', 3, 182, 1, 2),
(1031, '2. Nivel de conciencia emocional ante la situacion.', 4, 182, 1, 2),
(1032, '3. Nivel de Descanso', 3, 182, 1, 2),
(1033, '4. Nivel de interes ante trabajos u actividades.', 2, 182, 1, 2),
(1034, '5. Nivel de serenidad ante las situaciones negativas.', 4, 182, 1, 2),
(1035, '1. Estado de ánimo.', 1, 182, 11, 1),
(1036, '3. Nivel de Descanso', 1, 182, 11, 1),
(1037, '2. Nivel de conciencia emocional ante la situacion.', 2, 182, 11, 1),
(1038, '5. Nivel de serenidad ante las situaciones negativas.', 1, 182, 11, 1),
(1039, '4. Nivel de interes ante trabajos u actividades.', 2, 182, 11, 1),
(1040, '6. Nivel de concentracion.', 2, 182, 11, 1),
(1041, '1. Estado de ánimo.', 3, 182, 11, 2),
(1042, '2. Nivel de conciencia emocional ante la situacion.', 3, 182, 11, 2),
(1043, '3. Nivel de Descanso', 3, 182, 11, 2),
(1044, '4. Nivel de interes ante trabajos u actividades.', 4, 182, 11, 2),
(1045, '5. Nivel de serenidad ante las situaciones negativas.', 2, 182, 11, 2),
(1046, '6. Nivel de concentracion.', 4, 182, 11, 2),
(1047, '1. Estado de ánimo.', 1, 182, 15, 1),
(1048, '2. Nivel de conciencia emocional ante la situacion.', 1, 182, 15, 1),
(1049, '3. Nivel de Descanso', 1, 182, 15, 1),
(1050, '4. Nivel de interes ante trabajos u actividades.', 1, 182, 15, 1),
(1051, '5. Nivel de serenidad ante las situaciones negativas.', 1, 182, 15, 1),
(1052, '1. Estado de ánimo.', 4, 182, 15, 2),
(1053, '3. Nivel de Descanso', 4, 182, 15, 2),
(1054, '2. Nivel de conciencia emocional ante la situacion.', 4, 182, 15, 2),
(1055, '4. Nivel de interes ante trabajos u actividades.', 4, 182, 15, 2),
(1056, '5. Nivel de serenidad ante las situaciones negativas.', 4, 182, 15, 2),
(1057, '1. Estado de ánimo.', 3, 182, 17, 1),
(1058, '2. Nivel de conciencia emocional ante la situacion.', 3, 182, 17, 1),
(1059, '3. Nivel de Descanso', 2, 182, 17, 1),
(1060, '4. Nivel de interes ante trabajos u actividades.', 3, 182, 17, 1),
(1061, '5. Nivel de serenidad ante las situaciones negativas.', 2, 182, 17, 1),
(1062, '3. Nivel de Descanso', 3, 182, 17, 2),
(1063, '1. Estado de ánimo.', 4, 182, 17, 2),
(1064, '2. Nivel de conciencia emocional ante la situacion.', 4, 182, 17, 2),
(1065, '4. Nivel de interes ante trabajos u actividades.', 4, 182, 17, 2),
(1066, '5. Nivel de serenidad ante las situaciones negativas.', 3, 182, 17, 2),
(1067, '1. Estado de ánimo.', 1, 183, 1, 1),
(1068, '2. Nivel de conciencia emocional ante la situacion.', 1, 183, 1, 1),
(1069, '3. Nivel de Descanso', 1, 183, 1, 1),
(1070, '4. Nivel de interes ante trabajos u actividades.', 1, 183, 1, 1),
(1071, '5. Nivel de serenidad ante las situaciones negativas.', 1, 183, 1, 1),
(1072, '1. Estado de ánimo.', 4, 183, 1, 2),
(1073, '2. Nivel de conciencia emocional ante la situacion.', 3, 183, 1, 2),
(1074, '5. Nivel de serenidad ante las situaciones negativas.', 4, 183, 1, 2),
(1075, '4. Nivel de interes ante trabajos u actividades.', 3, 183, 1, 2),
(1076, '3. Nivel de Descanso', 4, 183, 1, 2),
(1077, '1. Estado de ánimo.', 1, 184, 12, 1),
(1078, '2. Nivel de conciencia emocional ante la situacion.', 2, 184, 12, 1),
(1079, '3. Nivel de Descanso', 2, 184, 12, 1),
(1080, '4. Nivel de interes ante trabajos u actividades.', 1, 184, 12, 1),
(1081, '5. Nivel de serenidad ante las situaciones negativas.', 1, 184, 12, 1),
(1082, '6. Nivel de concentracion.', 3, 184, 12, 1),
(1083, '1. Estado de ánimo.', 4, 184, 12, 2),
(1084, '3. Nivel de Descanso', 3, 184, 12, 2),
(1085, '2. Nivel de conciencia emocional ante la situacion.', 3, 184, 12, 2),
(1086, '4. Nivel de interes ante trabajos u actividades.', 3, 184, 12, 2),
(1087, '6. Nivel de concentracion.', 2, 184, 12, 2),
(1088, '5. Nivel de serenidad ante las situaciones negativas.', 4, 184, 12, 2),
(1089, '1. Estado de ánimo.', 3, 183, 11, 1),
(1090, '2. Nivel de conciencia emocional ante la situacion.', 2, 183, 11, 1),
(1091, '3. Nivel de Descanso', 2, 183, 11, 1),
(1092, '4. Nivel de interes ante trabajos u actividades.', 2, 183, 11, 1),
(1093, '5. Nivel de serenidad ante las situaciones negativas.', 3, 183, 11, 1),
(1094, '1. Estado de ánimo.', 3, 183, 11, 2),
(1095, '2. Nivel de conciencia emocional ante la situacion.', 3, 183, 11, 2),
(1096, '5. Nivel de serenidad ante las situaciones negativas.', 4, 183, 11, 2),
(1097, '4. Nivel de interes ante trabajos u actividades.', 3, 183, 11, 2),
(1098, '3. Nivel de Descanso', 3, 183, 11, 2),
(1099, '1. Estado de ánimo.', 2, 183, 15, 1),
(1100, '2. Nivel de conciencia emocional ante la situacion.', 2, 183, 15, 1),
(1101, '3. Nivel de Descanso', 2, 183, 15, 1),
(1102, '4. Nivel de interes ante trabajos u actividades.', 1, 183, 15, 1),
(1103, '5. Nivel de serenidad ante las situaciones negativas.', 2, 183, 15, 1),
(1104, '3. Nivel de Descanso', 4, 183, 15, 2),
(1105, '1. Estado de ánimo.', 3, 183, 15, 2),
(1106, '5. Nivel de serenidad ante las situaciones negativas.', 3, 183, 15, 2),
(1107, '4. Nivel de interes ante trabajos u actividades.', 3, 183, 15, 2),
(1108, '2. Nivel de conciencia emocional ante la situacion.', 3, 183, 15, 2),
(1109, '1. Estado de ánimo.', 2, 182, 19, 1),
(1110, '3. Nivel de Descanso', 3, 182, 19, 1),
(1111, '2. Nivel de conciencia emocional ante la situacion.', 2, 182, 19, 1),
(1112, '4. Nivel de interes ante trabajos u actividades.', 4, 182, 19, 1),
(1113, '1. Estado de ánimo.', 2, 182, 19, 1),
(1114, '2. Nivel de conciencia emocional ante la situacion.', 2, 182, 19, 1),
(1115, '3. Nivel de Descanso', 3, 182, 19, 1),
(1116, '5. Nivel de serenidad ante las situaciones negativas.', 3, 182, 19, 1),
(1117, '4. Nivel de interes ante trabajos u actividades.', 4, 182, 19, 1),
(1118, '1. Estado de ánimo.', 3, 182, 19, 2),
(1119, '2. Nivel de conciencia emocional ante la situacion.', 3, 182, 19, 2),
(1120, '2. Nivel de conciencia emocional ante la situacion.', 4, 182, 19, 2),
(1121, '1. Estado de ánimo.', 4, 182, 19, 2),
(1122, '3. Nivel de Descanso', 4, 182, 19, 2),
(1123, '3. Nivel de Descanso', 3, 182, 19, 2),
(1124, '4. Nivel de interes ante trabajos u actividades.', 4, 182, 19, 2),
(1125, '4. Nivel de interes ante trabajos u actividades.', 4, 182, 19, 2),
(1126, '5. Nivel de serenidad ante las situaciones negativas.', 4, 182, 19, 2),
(1127, '1. Estado de ánimo.', 3, 182, 18, 1),
(1128, '2. Nivel de conciencia emocional ante la situacion.', 3, 182, 18, 1),
(1129, '3. Nivel de Descanso', 4, 182, 18, 1),
(1130, '4. Nivel de interes ante trabajos u actividades.', 2, 182, 18, 1),
(1131, '5. Nivel de serenidad ante las situaciones negativas.', 2, 182, 18, 1),
(1132, '1. Estado de ánimo.', 4, 182, 18, 2),
(1133, '3. Nivel de Descanso', 3, 182, 18, 2),
(1134, '2. Nivel de conciencia emocional ante la situacion.', 4, 182, 18, 2),
(1135, '4. Nivel de interes ante trabajos u actividades.', 3, 182, 18, 2),
(1136, '5. Nivel de serenidad ante las situaciones negativas.', 3, 182, 18, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recomendacion`
--

CREATE TABLE `recomendacion` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(1500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recomendacion`
--

INSERT INTO `recomendacion` (`id`, `descripcion`) VALUES
(4, '¡Recuerda que tener un espacio de charla con tu adulto mayor puede favorecer contra la depresion!'),
(5, 'Cuidador: ¡Recuerda que debes descansar para dar lo mejor siempre!'),
(6, 'Cuidador recuerda que tu adulto mayor necesita de ti, y siempre debes tratarlo con gentileza');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id_actividades`),
  ADD KEY `id_potencia` (`id_potencia`),
  ADD KEY `id_diagnostico` (`id_diagnostico`);

--
-- Indices de la tabla `actualizacion`
--
ALTER TABLE `actualizacion`
  ADD PRIMARY KEY (`id_actualizacion`);

--
-- Indices de la tabla `adulto_mayor`
--
ALTER TABLE `adulto_mayor`
  ADD PRIMARY KEY (`id_adulto_mayor`),
  ADD KEY `diagnostico` (`diagnostico`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Indices de la tabla `cuidador`
--
ALTER TABLE `cuidador`
  ADD PRIMARY KEY (`id_cuidador`);

--
-- Indices de la tabla `cuidador_has_adultomayor`
--
ALTER TABLE `cuidador_has_adultomayor`
  ADD KEY `id_cuidador` (`id_cuidador`),
  ADD KEY `id_adulto_mayor` (`id_adulto_mayor`);

--
-- Indices de la tabla `diagnostico`
--
ALTER TABLE `diagnostico`
  ADD PRIMARY KEY (`id_diagnostico`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id_evento`),
  ADD KEY `id_adulto_mayor` (`id_adulto_mayor`);

--
-- Indices de la tabla `potencia`
--
ALTER TABLE `potencia`
  ADD PRIMARY KEY (`id_potencia`);

--
-- Indices de la tabla `progreso`
--
ALTER TABLE `progreso`
  ADD KEY `id_adulto_mayor` (`id_adulto_mayor`),
  ADD KEY `id_actividades` (`id_actividades`);

--
-- Indices de la tabla `progreso2`
--
ALTER TABLE `progreso2`
  ADD PRIMARY KEY (`id_criterio`),
  ADD KEY `id_adulto_mayor` (`id_adulto_mayor`),
  ADD KEY `id_actividades` (`id_actividades`);

--
-- Indices de la tabla `recomendacion`
--
ALTER TABLE `recomendacion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id_actividades` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `actualizacion`
--
ALTER TABLE `actualizacion`
  MODIFY `id_actualizacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `adulto_mayor`
--
ALTER TABLE `adulto_mayor`
  MODIFY `id_adulto_mayor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=185;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `cuidador`
--
ALTER TABLE `cuidador`
  MODIFY `id_cuidador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT de la tabla `diagnostico`
--
ALTER TABLE `diagnostico`
  MODIFY `id_diagnostico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id_evento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `potencia`
--
ALTER TABLE `potencia`
  MODIFY `id_potencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `progreso2`
--
ALTER TABLE `progreso2`
  MODIFY `id_criterio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1137;

--
-- AUTO_INCREMENT de la tabla `recomendacion`
--
ALTER TABLE `recomendacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `actividades_ibfk_1` FOREIGN KEY (`id_potencia`) REFERENCES `potencia` (`id_potencia`),
  ADD CONSTRAINT `actividades_ibfk_2` FOREIGN KEY (`id_diagnostico`) REFERENCES `diagnostico` (`id_diagnostico`);

--
-- Filtros para la tabla `adulto_mayor`
--
ALTER TABLE `adulto_mayor`
  ADD CONSTRAINT `adulto_mayor_ibfk_1` FOREIGN KEY (`diagnostico`) REFERENCES `diagnostico` (`id_diagnostico`);

--
-- Filtros para la tabla `cuidador_has_adultomayor`
--
ALTER TABLE `cuidador_has_adultomayor`
  ADD CONSTRAINT `cuidador_has_adultomayor_ibfk_1` FOREIGN KEY (`id_cuidador`) REFERENCES `cuidador` (`id_cuidador`),
  ADD CONSTRAINT `cuidador_has_adultomayor_ibfk_2` FOREIGN KEY (`id_adulto_mayor`) REFERENCES `adulto_mayor` (`id_adulto_mayor`);

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`id_adulto_mayor`) REFERENCES `adulto_mayor` (`id_adulto_mayor`);

--
-- Filtros para la tabla `progreso`
--
ALTER TABLE `progreso`
  ADD CONSTRAINT `progreso_ibfk_1` FOREIGN KEY (`id_adulto_mayor`) REFERENCES `adulto_mayor` (`id_adulto_mayor`),
  ADD CONSTRAINT `progreso_ibfk_2` FOREIGN KEY (`id_actividades`) REFERENCES `actividades` (`id_actividades`);

--
-- Filtros para la tabla `progreso2`
--
ALTER TABLE `progreso2`
  ADD CONSTRAINT `progreso2_ibfk_1` FOREIGN KEY (`id_adulto_mayor`) REFERENCES `adulto_mayor` (`id_adulto_mayor`),
  ADD CONSTRAINT `progreso2_ibfk_2` FOREIGN KEY (`id_actividades`) REFERENCES `actividades` (`id_actividades`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
