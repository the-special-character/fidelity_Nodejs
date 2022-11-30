const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p1 resolve");
    }, 5000);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p2 resolve");
    }, 2000);
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p3 resolve");
    }, 3000);
  });
};

const fetchData = async () => {
  try {
    // login api
    console.time("race");
    const res = await Promise.any([p1(), p2(), p3()]);
    console.log(res);
    console.timeEnd("race");
  } catch (error) {
    console.log(error);
  }
};

fetchData();

// All
// AllSettled
// Race
// Any
