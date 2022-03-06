const { Pool, Client } = require('pg');

// const pool = new Pool({
//   user: "nazarijkovalenko",
//   password: "qwerty2505",
//   host: "localhost",
//   port: 5432,
//   database: "wellclimat"
// });

const pool = new Pool({
  connectionString: 'postgres://ywbzdjxzjiatqf:fd7ac8b8cb3d67ec98792a56cceb61bee13b391c062497b1a466e9dd02cbe7e8@ec2-54-217-103-251.eu-west-1.compute.amazonaws.com:5432/d6ou1a5k98diuo',
  ssl: {
    rejectUnauthorized: false,
  }
})

module.exports = pool;