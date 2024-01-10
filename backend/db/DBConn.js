const config = {
    server: "LEART",
    authentication: {
      type: "default",
      options: {
        userName: "leart1",
        password: "leart",
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