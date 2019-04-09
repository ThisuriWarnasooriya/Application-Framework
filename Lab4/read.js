const fs = require('fs');

const fileName = __dirname + '/test.txt';

fs.readFile(fileName,(err, data) => {
    if (err) {
        console.error(err);
    }

    console.log(data.toString());
});

const data = fs.readFile = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.text';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data',data => {
    console.log(data.toString());
})
