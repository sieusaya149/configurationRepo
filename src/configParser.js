const fs = require('fs');
const path = require('path');
const configFile = path.join(__dirname, '..', 'configs', 'notificationConfigs.json');

class ConfigParser {
  constructor() {
    this.config = null;
    this.configFilePath = configFile; // Adjust the path as needed
  }

  static getInstance() {
    if (!ConfigParser.instance) {
      ConfigParser.instance = new ConfigParser();
    }
    return ConfigParser.instance;
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
    console.log("PARSE CONFIG: ")
    console.log(this.config)
    return this.config;
  }
}

module.exports = ConfigParser;