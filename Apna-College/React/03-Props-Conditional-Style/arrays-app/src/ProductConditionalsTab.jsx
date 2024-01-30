import "./ProductConditionalsTab.css";
import ProductConditionals from "./ProductConditionals.jsx";

export default function ProductConditionalsTab() {
    return (
        <>
            <div className="ProductConditionalsTab">
                <ProductConditionals title="A" price={10000} />
                <ProductConditionals title="B" price={20000} />
                <ProductConditionals title="C" price={30000} />
            </div>
        </>
    );
}