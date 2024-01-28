export default function ProductProps({
  title,
  price = 5000,
  featuresArray = "unavailable Array",
  featuresObject = {},
  featuresArrayElements = "unavailable Array direct elements",
  featuresArrayElementsMap = "unavailable"
}) {

    let newFeaturesArrayElementsMap;
    if (featuresArrayElementsMap !== "unavailable") {
        
        newFeaturesArrayElementsMap = featuresArrayElementsMap.map((feature) => <li>{feature}</li>);
    }

  return (
    <>
      <h5>Product Title: {title}</h5>
      <h6>Product Price: &#8377; {price.toLocaleString("en-In")}</h6>
      <h6>Product Features Array: {featuresArray}</h6>    {/* hi-techfastdurable */}
      <h6>Product Features Object: {featuresObject.a} {featuresObject.b} {featuresObject.c}</h6>   {/* hi-tech fast durable */}
      <h6>Product Features Array of Elements: {featuresArrayElements}</h6>    {/* -"hi-tech" -"fast" -"durable" */}
      <h6>Product Features Array of Elements with Map method: {newFeaturesArrayElementsMap}</h6>    {/* -hi-tech -fast -durable */}
    </>
  );
}
