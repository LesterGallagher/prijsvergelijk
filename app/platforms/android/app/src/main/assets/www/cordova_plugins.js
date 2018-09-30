cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-admobpro.AdMob",
    "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
    "pluginId": "cordova-plugin-admobpro",
    "clobbers": [
      "window.AdMob"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-headercolor.HeaderColor",
    "file": "plugins/cordova-plugin-headercolor/www/HeaderColor.js",
    "pluginId": "cordova-plugin-headercolor",
    "clobbers": [
      "cordova.plugins.headerColor"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-extension": "1.5.4",
  "cordova-plugin-admobpro": "2.31.6",
  "cordova-plugin-browsersync": "0.1.7",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-headercolor": "1.0",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});