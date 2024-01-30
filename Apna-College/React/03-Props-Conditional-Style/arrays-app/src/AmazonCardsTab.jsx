import "./AmazonCardsTab.css";
import AmazonCards from "./AmazonCards.jsx";
import AmazonCardsTabData from "./AmazonCardsTabData.jsx";

export default function AmazonCardsTab() {

  const sample = AmazonCardsTabData().map((element) => (
    <AmazonCards
      title={element.title}
      description={element.description}
      oldPrice={element.oldPrice}
      newPrice={element.newPrice}
    />
  ));

  return (
    <>
        <div className="AmazonCardsTab">

            <h5 className="AmazonCardsTabHeading">Blockbuster Deals on Computer Accessories | Shop Now</h5>
            <div className="AmazonCardsTabContainer">
                {sample}
            </div>

        </div>
    </>
  );
}
