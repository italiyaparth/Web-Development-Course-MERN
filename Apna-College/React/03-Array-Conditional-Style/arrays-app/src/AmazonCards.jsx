import "./AmazonCards.css";

export default function AmazonCards({
  title,
  description,
  oldPrice,
  newPrice,
}) {

  const newDescription = description.map((element) => <li>{element}</li>);

  return (
    <>
      <div className="AmazonCards">

        <h5 className="title"><b>{title}</b></h5>

        <div>
            <h6 className="newDescription">{newDescription}</h6>

            <div className="Price">
                <h5>
                    <sup>&#8377;</sup>
                    <s>{oldPrice.toLocaleString("en-IN")}</s>
                    &nbsp;
                    <sup>&#8377;</sup>
                    <b>{newPrice.toLocaleString("en-IN")}</b>
                </h5>
            </div>

        </div>
        
      </div>
    </>
  );
}
