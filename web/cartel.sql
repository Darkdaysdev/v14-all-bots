-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 05 May 2024, 10:15:32
-- Sunucu sürümü: 10.4.32-MariaDB
-- PHP Sürümü: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `takachi`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `notification`
--

CREATE TABLE `notification` (
  `notificationID` int(11) NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `forUser` varchar(50) DEFAULT NULL,
  `entityID` int(11) DEFAULT NULL,
  `read` tinyint(1) DEFAULT 0,
  `time` datetime DEFAULT current_timestamp(),
  `text` varchar(500) DEFAULT NULL,
  `author` varchar(500) DEFAULT NULL,
  `warning` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `notification`
--

INSERT INTO `notification` (`notificationID`, `type`, `forUser`, `entityID`, `read`, `time`, `text`, `author`, `warning`) VALUES
(1303, 'comment', 'takachi', 220176, 0, '2024-04-15 21:37:39', 'Hesabınıza 127.0.0.1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1304, 'comment', 'metiho', 174313, 0, '2024-04-15 21:38:42', 'Merhaba! Mete Akdemir apollon Web Panele Katıldığınız İçin Teşekkürler.', 'apollon', 'success'),
(1305, 'comment', 'metiho', 164166, 0, '2024-04-15 21:43:14', 'Hesabınıza 127.0.0.1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1306, 'comment', 'metiho', 193699, 0, '2024-04-15 21:50:39', 'Hesabınıza 188.253.210.7 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1307, 'comment', 'takachi', 18209, 0, '2024-04-15 21:51:38', 'Hesabınıza 188.253.210.7 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1308, 'comment', 'metiho', 156805, 0, '2024-04-15 21:52:04', 'Hesabınıza 188.253.210.7 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1309, 'comment', 'metiho', 189788, 0, '2024-04-15 21:53:29', 'Hesabınıza 188.253.210.7 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1310, 'comment', 'metiho', 204451, 0, '2024-04-15 21:54:29', 'Hesabınıza 127.0.0.1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1311, 'comment', 'metiho', 211985, 0, '2024-04-15 21:57:17', 'Hesabınıza 5.63.21.4 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1312, 'comment', 'metiho', 185673, 0, '2024-04-15 23:02:16', 'Hesabınıza 160.20.109.140 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1313, 'comment', 'metiho', 131124, 0, '2024-04-16 00:12:57', 'Hesabınıza 5.63.21.4 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1314, 'comment', 'metiho', 58516, 0, '2024-04-16 00:30:56', 'Hesabınıza 160.20.109.140 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1315, 'comment', 'metiho', 169919, 0, '2024-04-16 00:36:28', 'Hesabınıza 31.200.8.218 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1316, 'comment', 'metiho', 113100, 0, '2024-04-16 00:39:08', 'Hesabınıza 31.200.8.218 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1317, 'comment', 'metiho', 129881, 0, '2024-04-16 00:50:28', 'Hesabınıza 31.200.8.218 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1318, 'comment', 'metiho', 51797, 0, '2024-04-16 00:52:15', 'Hesabınıza 31.200.8.218 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1319, 'comment', 'takachi', 203173, 0, '2024-04-16 06:15:36', 'Hesabınıza 5.63.21.4 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1320, 'comment', 'metiho', 186509, 0, '2024-04-16 06:24:47', 'Hesabınıza 5.63.21.4 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1321, 'comment', 'metiho', 169345, 0, '2024-04-16 12:31:15', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1322, 'comment', 'metiho', 145158, 0, '2024-04-16 12:33:01', 'Sunucunuzdan ᛅ Jade Of Apollon kanalı silindi.', 'Sistemsel', 'danger'),
(1323, 'comment', 'takachi', 9989, 0, '2024-04-30 20:06:24', 'Hesabınıza 5.63.21.4 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1324, 'comment', 'takachi', 75241, 0, '2024-04-30 20:08:37', 'Hesabınıza 5.63.21.4 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1325, 'comment', 'takachi', 152723, 0, '2024-04-30 20:09:15', 'Hesabınıza 127.0.0.1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1326, 'comment', 'takachi', 11528, 0, '2024-04-30 20:22:22', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1327, 'comment', 'takachi', 54258, 0, '2024-04-30 20:51:58', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1328, 'comment', 'takachi', 38637, 0, '2024-04-30 20:53:22', 'Hesabınıza 127.0.0.1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1329, 'comment', 'takachi', 198621, 0, '2024-04-30 20:53:41', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1330, 'comment', 'takachi', 2435, 0, '2024-04-30 21:05:18', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1331, 'comment', 'takachi', 129792, 0, '2024-04-30 21:05:56', 'Hesabınıza 5.63.21.4 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1332, 'comment', 'takachi', 91080, 0, '2024-04-30 21:06:37', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1333, 'comment', 'takachi', 84697, 0, '2024-04-30 21:08:25', 'Hesabınıza 37.61.123.124 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1334, 'comment', 'takachi', 56649, 0, '2024-04-30 21:10:26', 'Hesabınıza 37.61.123.124 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1335, 'comment', 'takachi', 193345, 0, '2024-04-30 21:47:22', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1336, 'comment', 'takachi', 223762, 0, '2024-04-30 22:37:57', 'Hesabınıza 37.61.123.124 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1337, 'comment', 'takachi', 138229, 0, '2024-05-01 00:15:51', 'Hesabınıza 37.61.123.124 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1338, 'comment', 'takachi', 189778, 0, '2024-05-01 00:20:18', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1339, 'comment', 'takachi', 119040, 0, '2024-05-01 00:24:30', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1340, 'comment', 'takachi', 43073, 0, '2024-05-01 13:56:25', 'Hesabınıza 37.61.123.124 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1341, 'comment', 'takachi', 192185, 0, '2024-05-01 14:00:47', 'Hesabınıza 37.61.123.124 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1342, 'comment', 'takachi', 111571, 0, '2024-05-01 14:01:45', 'Hesabınıza 37.61.123.124 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1343, 'comment', 'takachi', 234673, 0, '2024-05-01 14:03:38', 'Hesabınıza 37.61.123.124 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1344, 'comment', 'takachi', 118991, 0, '2024-05-01 14:03:45', 'Hesabınıza 85.98.17.232 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1345, 'comment', 'takachi', 106498, 0, '2024-05-01 14:26:19', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1346, 'comment', 'takachi', 213024, 0, '2024-05-01 14:27:10', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1347, 'comment', 'takachi', 219158, 0, '2024-05-01 14:29:01', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1348, 'comment', 'takachi', 201521, 0, '2024-05-01 15:50:58', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1349, 'comment', 'takachi', 122307, 0, '2024-05-01 15:52:13', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1350, 'comment', 'takachi', 137469, 0, '2024-05-01 15:54:32', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1351, 'comment', 'takachi', 30290, 0, '2024-05-01 16:05:38', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1352, 'comment', 'takachi', 76189, 0, '2024-05-01 16:08:50', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1353, 'comment', 'takachi', 138470, 0, '2024-05-01 16:09:44', 'Hesabınıza 127.0.0.1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1354, 'comment', 'takachi', 209190, 0, '2024-05-01 16:10:26', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1355, 'comment', 'takachi', 162866, 0, '2024-05-01 16:10:49', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1356, 'comment', 'takachi', 138857, 0, '2024-05-01 16:14:26', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1357, 'comment', 'takachi', 159230, 0, '2024-05-01 16:28:52', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1358, 'comment', 'takachi', 89057, 0, '2024-05-01 19:54:12', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1359, 'comment', 'takachi', 145741, 0, '2024-05-02 09:14:21', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1360, 'comment', 'takachi', 220746, 0, '2024-05-02 09:31:04', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1361, 'comment', 'takachi', 37462, 0, '2024-05-02 13:32:41', 'Hesabınıza 188.253.219.71 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1362, 'comment', 'takachi', 139706, 0, '2024-05-02 13:33:24', 'Hesabınıza 188.253.219.71 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1363, 'comment', 'takachi', 96745, 0, '2024-05-02 15:37:35', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1364, 'comment', 'takachi', 122455, 0, '2024-05-02 21:56:59', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1365, 'comment', 'takachi', 31690, 0, '2024-05-04 07:49:47', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1366, 'comment', 'takachi', 80525, 0, '2024-05-04 10:24:32', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1367, 'comment', 'takachi', 80334, 0, '2024-05-04 13:24:28', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1368, 'comment', 'takachi', 58610, 0, '2024-05-04 16:10:01', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1369, 'comment', 'takachi', 171260, 0, '2024-05-04 20:22:02', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1370, 'comment', 'takachi', 97350, 0, '2024-05-04 21:18:59', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1371, 'comment', 'takachi', 102460, 0, '2024-05-04 22:26:09', 'Hesabınıza 127.0.0.1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1372, 'comment', 'takachi', 37545, 0, '2024-05-04 22:26:52', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1373, 'comment', 'takachi', 132944, 0, '2024-05-04 23:13:28', 'Hesabınıza 127.0.0.1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning'),
(1374, 'comment', 'takachi', 231955, 0, '2024-05-05 01:44:58', 'Hesabınıza ::1 numaralı ip adresi ile bir giriş gerçekleşti.', 'Sistemsel', 'warning');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `timeout` datetime DEFAULT NULL,
  `package` varchar(250) DEFAULT NULL,
  `api_url` varchar(250) DEFAULT NULL,
  `api_token` varchar(250) DEFAULT NULL,
  `balance` int(250) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `products`
--

INSERT INTO `products` (`id`, `owner_id`, `timeout`, `package`, `api_url`, `api_token`, `balance`) VALUES
(12, 1, '2099-11-22 00:00:00', 'QWKLSKWQDKWQKDKQW', 'https://api.takachifx/api/v18', 'Basic Y2FydGVsOjEyMzQ1Njc5', 0);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `surname` varchar(250) DEFAULT NULL,
  `username` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `phone` varchar(250) DEFAULT '',
  `balance` int(11) DEFAULT 0,
  `photo` varchar(250) DEFAULT NULL,
  `ip` varchar(255) DEFAULT '',
  `last_login` datetime DEFAULT NULL,
  `type` enum('STAFF','USER') DEFAULT 'USER',
  `sub` int(1) DEFAULT 0,
  `sub_perm` int(10) DEFAULT 0,
  `created_time` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `username`, `password`, `email`, `phone`, `balance`, `photo`, `ip`, `last_login`, `type`, `sub`, `sub_perm`, `created_time`) VALUES
(1, 'MÜNÜR', 'AKDEMİR', 'takachi', '1234', 'qwklskwqdkwqkdkqw@gmail.com', '500000000', 0, NULL, '::1', '2024-05-05 00:44:58', 'STAFF', 0, 0, '2024-05-04 22:44:58');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notificationID`);

--
-- Tablo için indeksler `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `notification`
--
ALTER TABLE `notification`
  MODIFY `notificationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1375;

--
-- Tablo için AUTO_INCREMENT değeri `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
