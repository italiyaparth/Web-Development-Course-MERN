import ProductProps from "./ProductProps.jsx";

export default function ProductPropsTab() {

  let optionsArray = ["hi-tech", "fast", "durable"];
  let optionsObject = {a: "hi-tech", b: "fast", c: "durable"};

  let optionsArrayElements = [<li>"hi-tech"</li>, <li>"fast"</li>, <li>"durable"</li>];
  let optionsArrayElementsMap = ["hi-tech", "fast", "durable"];

  return (
    <>

      <ProductProps title="Laptop" price={50000} />
      <ProductProps title="Mobile" price={10000} />
      <ProductProps title="Bluetooth" />
      <ProductProps title="TV" featuresArray={optionsArray} />
      <ProductProps title="Watch" featuresObject={optionsObject} />
      <ProductProps title="CPU" featuresArrayElements={optionsArrayElements} />
      <ProductProps title="Keyboard" featuresArrayElementsMap={optionsArrayElementsMap} />

    </>
  );
}



/* Output



Product Title: Laptop
Product Price: ₹ 50,000
Product Features Array: unavailable Array
Product Features Object:
Product Features Array of Elements: unavailable Array direct elements
Product Features Array of Elements with Map method:

Product Title: Mobile
Product Price: ₹ 10,000
Product Features Array: unavailable Array
Product Features Object:
Product Features Array of Elements: unavailable Array direct elements
Product Features Array of Elements with Map method:

Product Title: Bluetooth
Product Price: ₹ 5,000
Product Features Array: unavailable Array
Product Features Object:
Product Features Array of Elements: unavailable Array direct elements
Product Features Array of Elements with Map method:

Product Title: TV
Product Price: ₹ 5,000
Product Features Array: hi-techfastdurable
Product Features Object:
Product Features Array of Elements: unavailable Array direct elements
Product Features Array of Elements with Map method:

Product Title: Watch
Product Price: ₹ 5,000
Product Features Array: unavailable Array
Product Features Object: hi-tech fast durable
Product Features Array of Elements: unavailable Array direct elements
Product Features Array of Elements with Map method:

Product Title: CPU
Product Price: ₹ 5,000
Product Features Array: unavailable Array
Product Features Object:
Product Features Array of Elements:
-     "hi-tech"
-     "fast"
-     "durable"
Product Features Array of Elements with Map method:

Product Title: Keyboard
Product Price: ₹ 5,000
Product Features Array: unavailable Array
Product Features Object:
Product Features Array of Elements: unavailable Array direct elements
Product Features Array of Elements with Map method:
-     hi-tech
-     fast
-     durable




*/