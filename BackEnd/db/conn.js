// connection

const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  port: 5432,
  database: "blogdb",
  user: "postgres",
  password: "2720",
});

async function check() {
  await client.connect();

}

check();
module.exports = client;
