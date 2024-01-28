export default function ProductConditionals({ title, price }) {
 return (
    <>

        <h5>Product Title: {title}</h5>
        <h6>Product Price: &#8377; {price.toLocaleString("en-IN")}</h6>
        {price >= 20000 ? <p>Discount of 5%</p> : null}
        {/* OR */}
        {/* {price >= 20000 && <p>Discount of 5%</p>} */} {/* for this output will be same as above */}
        {/* OR */}
        {/* {price >= 20000 ? <p>Discount of 5%</p> : <a>Get Discount</a>} */}

    </>
 );
}