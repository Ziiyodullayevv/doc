const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Expo uchun standart konfiguratsiyani olish
const config = getDefaultConfig(__dirname);

// NativeWind bilan integratsiya qilish
module.exports = withNativeWind(config, {
  input: './global.css', // CSS fayliga to'g'ri yo'lni ko'rsating
});
