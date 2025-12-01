const {pool} = require("pg");
//?.env+ menyimpan data konfigurasu agar tidak langsung ditulidkan dalam kode
//? Dapat disebut juga variabel "global"
const dotenv = require("dotenv");
//? Aktifkan dotenv
dotenv.config();

//?koneksi ke postgressSQL
const pool = new pool({
    User : process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,

    ssl:{
        rejectUnaouthorized:false,

    },
    //port: process.env.PGPORT,

});

module.exports = pool;