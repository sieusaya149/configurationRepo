const fs = require('fs');
const path = require('path');
const configFile = path.join(__dirname, '..', 'configs', 'notificationConfigs.json');

class ConfigLoader {
  constructor() {
    this.config = null;
    this.configFilePath = configFile; // Adjust the path as needed
  }

  static getInstance() {
    if (!ConfigLoader.instance) {
      ConfigLoader.instance = new ConfigLoader();
    }
    return ConfigLoader.instance;
  }

  loadConfig() {
    try {
      const configFileContent = fs.readFileSync(this.configFilePath, 'utf8');
      this.config = JSON.parse(configFileContent);
    } catch (error) {
      console.error('Error loading configuration:', error);
    }
  }

  getConfig() {
    if (!this.config) {
      this.loadConfig();
    }
    console.log("LOADED SHARING CONFIG: ")
    console.log(this.config)
    return this.config;
  }
}

module.exports = ConfigLoader;