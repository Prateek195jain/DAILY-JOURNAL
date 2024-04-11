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

//   const res = await client.query("SELECT * from blogs");
//   console.log(res.rows[0]); // Hello world!
//   await client.end();
}

check();
module.exports = client;
