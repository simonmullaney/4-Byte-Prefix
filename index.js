
const crypto = require('crypto');

/*

Given a string of bytes, which when encoded in hexadecimal notation look like this:

f064b8b61422a3456cb273a474a1fb0cabb04200a6a82a9426bd01f56c97fbf8c4ef58634fd5cf21af29e7db3406de4f886fe71408696789f853af9932a84b79

Find a 4-byte prefix so that, a SHA256 hash of the prefix combined with the original string of bytes, has two last bytes as 0xca, 0xfe.


*/

  let str = "f064b8b61422a3456cb273a474a1fb0cabb04200a6a82a9426bd01f56c97fbf8c4ef58634fd5cf21af29e7db3406de4f886fe71408696789f853af9932a84b79";

  let condition = false;

  let randByte = crypto.randomBytes(4);
  let strRandBytes = randByte.toString('hex');
  let concat = strRandBytes + str;

  let sha256Concat = crypto.createHash('sha256').update(concat).digest('hex');

  // console.log("sha256Concat",sha256Concat);
  // console.log(sha256Concat.length);
  // console.log(sha256Concat[60]);
  // console.log(sha256Concat[61]);
  // console.log(sha256Concat[62]);
  // console.log(sha256Concat[63]);

  while (!((sha256Concat[60]=="c") && (sha256Concat[61]=="a") && (sha256Concat[62]=="f" ) && (sha256Concat[63]=="e"))) {

    randByte = crypto.randomBytes(4);
    strRandBytes = randByte.toString('hex');
    concat = strRandBytes + str;

    sha256Concat = crypto.createHash('sha256').update(concat).digest('hex');
    console.log("randByte: ",randByte);
    console.log("sha256Concat: ",sha256Concat);
  }
