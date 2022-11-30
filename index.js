const fs = require("fs");
const csv = require("csvtojson");
const { Transform } = require("stream");

const main = () => {
  const readStream = fs.createReadStream("./data/import.csv", {
    highWaterMark: 100,
  });

  const customTransform = new Transform({
    objectMode: true,
    transform(chunk, enc, cb) {
      const { email, ...rest } = chunk;
      cb(null, rest);
    },
  });

  const activeData = new Transform({
    objectMode: true,
    transform(chunk, enc, cb) {
      if (chunk.isActive === "false") {
        cb(null);
        return;
      }
      cb(null, chunk);
    },
  });

  //   const writeStream = fs.createWriteStream("./data/export.csv");

  readStream
    .pipe(
      csv(
        {
          delimiter: ";",
        },
        {
          objectMode: true,
        }
      )
    )
    .pipe(customTransform)
    .pipe(activeData)
    .on("data", (data) => {
      console.log(data);
    })
    .on("error", (error) => {
      console.log(error);
    });

  readStream.on("end", () => {
    console.log("reading completed");
  });

  //   writeStream.on("finish", () => {
  //     console.log("writing completed");
  //   });

  //   readStream.on("data", (buffer) => {
  //     console.log("----Buffer----");
  //     console.log(buffer.toString());
  //     writeStream.write(buffer);
  //   });

  //   readStream.on("end", () => {
  //     console.log("completed file");
  //   });

  //   readStream.on("error", () => {});
};

main();
