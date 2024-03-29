const config = {
  server: "ALTIN",
  authentication: {
    type: "default",
    options: {
      userName: "altinDB",
      password: "altin",
      trustedConnection: true,
    },
  },
  database: "RealEstate",
  trustServerCertificate: true,
  synchronize: true,
  options: {
    port: 1433,
  },
};

module.exports = config;