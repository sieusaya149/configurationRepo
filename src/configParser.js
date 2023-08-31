const fs = require('fs');

class ConfigParser {
  constructor() {
    this.config = null;
    this.configFilePath = '../configs/notifcationConfigs.json'; // Adjust the path as needed
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