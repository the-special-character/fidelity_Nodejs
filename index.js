const fs = require("fs");
const csv = require("csvtojson");
const { Transform } = require("stream");
const { pipeline } = require("stream/promises");

const main = async () => {
  const readStream = fs.createReadStream("./data/import.csv", {
    highWaterMark: 100,
  });

  const writeStream = fs.WriteStream("./data/export.csv");

  const customTransform = new Transform({
    objectMode: true,
    transform(chunk, enc, cb) {
      const { email, ...rest } = chunk;
      cb(null, rest);

      // fetch("https://jsonplaceholder.typicode.com/users/1")
      //   .then((res) => res.json())
      //   .then((json) => {
      //     cb(null, { ...chunk, ...json });
      //   })
      //   .catch((err) => {
      //     cb(err);
      //   });
    },
  });

  const activeData = new Transform({
    objectMode: true,
    transform(chunk, enc, cb) {
      if (chunk.isActive === "false") {
        cb(null);
        return;
      }
      console.log(chunk);
      cb(null, chunk);
    },
  });

  await pipeline(readStream, csv({ delimiter: ";" }, { objectMode: true }));

  console.log("pipeline completed");

  // readStream
  //   .pipe(
  //     csv(
  //       {
  //         delimiter: ";",
  //       },
  //       {
  //         objectMode: true,
  //       }
  //     )
  //   )
  //   .pipe(customTransform)
  //   .pipe(activeData)
  //   .on("data", (data) => {
  //     console.log(data);
  //   })
  //   .on("error", (error) => {
  //     console.log(error);
  //   });

  // readStream.on("end", () => {
  //   console.log("reading completed");
  // });

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

// benifit of pipe

// -> help to avoid memory leak
// -> easy to use
// -> complex error management
//  clean code

// can use event listners

// benifit of pipeline
// -> help to avoid memory leak
// -> easier to use
//  clean code
// -> complex error management
// can't use event listners
