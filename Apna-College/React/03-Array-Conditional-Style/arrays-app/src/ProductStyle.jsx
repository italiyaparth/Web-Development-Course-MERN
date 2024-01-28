export default function ProductStyle({ title, price }) {

    let stylesDiv = { backgroundColor: "aqua" };
    let stylesH5 = { backgroundColor: "yellow" };
    let stylesH6 = { backgroundColor: price >= 20000 ? "red" : null };

  return (
    <>
      <div style={stylesDiv}>
        <h5 style={stylesH5}>Product Title: {title}</h5>
        <h6 style={stylesH6}>Product Price: &#8377; {price.toLocaleString("en-IN")}</h6>
      </div>
    </>
  );
}
