"use strict";

const fsP = require("fs/promises");
const axios = require("axios");

const argv = process.argv;



async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("file contents", contents);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}



// cat(argv[2]);

async function webCat(url) {
    try{
        const resp = await axios.get(url);
        console.log(resp.data.slice(0,80), "...");
    } catch (err) {
        console.error(err.code);
        process.exit(1);
  }
}


if (argv[2].includes('http') === true){
    webCat(argv[2])
} else {
    cat(argv[2])
}
