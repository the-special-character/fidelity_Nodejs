const fs = require("fs");
const { faker } = require("@faker-js/faker");
const path = require("path");

const writeStream = fs.createWriteStream("./data/import.csv");

writeStream.write("name;email;age;salary;isActive\n");

for (let i = 0; i < 10000; i++) {
  const firstName = faker.name.firstName();
  const email = faker.internet.email(firstName);
  const age = faker.datatype.number({ min: 10, max: 100 });
  const salary = faker.random.numeric(4, { allowLeadingZeros: true });
  const isActive = faker.datatype.boolean();
  const arr = [firstName, email, age, salary, isActive];
  writeStream.write(`${arr.join(";")}\n`);
}

writeStream.end();
