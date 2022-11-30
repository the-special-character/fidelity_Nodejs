// callback hell
// distrubuted catch block

(async (arguments) => {
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({
          email: "hey@yagneshmodh.com",
          password: "Password1!",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const userJSON = await res.json();
      if (!res.ok) {
        throw new Error(userJSON);
      }
      const productsRes = await fetch("http://localhost:3000/660/products", {
        headers: {
          Authorization: `Bearer ${userJSON.accessToken}`,
        },
      });
      const productsJSON = await productsRes.json();
      if (!productsRes.ok) {
        throw new Error(productsJSON);
      }
      console.log(productsJSON);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  };

  fetchProducts();

  console.log("hello");
})();

// fetch('http://localhost:3000/login', {
//     method: "POST",
//     body: JSON.stringify({
//         email: "hey@yagneshmodh.com",
//         password:"Password1!"
//     }),
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     }
// })
// .then(res => {
//     return res.json()
// })
// .then(json => {
//     console.log(json);
//     fetch(" http://localhost:3000/660/products",{
//         headers: {
//             Authorization: `Bearer ${json.accessToken}`
//         }
//     })
//     .then(res => {
//         if(!res.ok)
//         {
//             throw new Error("api failed")
//         }
//         return res.json()
//     })
//     .then(json => {
//         console.log(json);
//     })
//     .catch(err => {
//         console.log(err.message);
//     })

// })
// .catch(err => {
//     console.log(err.message);
// })
