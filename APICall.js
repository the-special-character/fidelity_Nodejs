const getCartAndProducts = async () => {
  try {
    console.time("api");
    const res = await Promise.allSettled([
      fetch("http://localhost:3000/products"),
      fetch("http://localhost:3000/cart"),
    ]);

    const resJSON = await Promise.allSettled(
      res.map((x) => {
        if (x.status === "fulfilled") {
          return x.value.json();
        }
        return { error: true, message: x.reason.json() };
      })
    );

    console.log(resJSON);

    // console.log(resJSON);

    // const productsRes = await fetch('http://localhost:3000/products');
    // const productsJson = await productsRes.json();
    // if(!productsRes.ok) {
    //     throw new Error(productsJson)
    // }
    // console.log(productsJson);
    // const cartRes = await fetch('http://localhost:3000/cart');
    // const cartJson = await cartRes.json();
    // if(!cartRes.ok) {
    //     throw new Error(cartJson)
    // }
    // console.log(cartJson)
    console.timeEnd("api");
  } catch (error) {}
};

getCartAndProducts();
