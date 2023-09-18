const config = {
  db: {
    client: "mysql2",
    connection: {
      host:
        process.env.MODE === "dev"
          ? process.env.DB_HOST_DEV
          : process.env.DB_HOST_PROD,
      user:
        process.env.MODE === "dev"
          ? process.env.DB_USER_DEV
          : process.env.DB_USER_PROD,
      password:
        process.env.MODE === "dev"
          ? process.env.DB_PASS_DEV
          : process.env.DB_PASS_PROD,
      database:
        process.env.MODE === "dev"
          ? process.env.DB_NAME_DEV
          : process.env.DB_NAME_PROD,
    },
  },
};

module.exports = { config };
