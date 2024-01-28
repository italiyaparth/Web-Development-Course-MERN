import "./ProductStyleTab.css";
import ProductStyle from "./ProductStyle.jsx";

export default function ProductStyleTab() {
    return (
        <>
            <div className="ProductStyleTab">
                <ProductStyle title="A" price={10000} />
                <ProductStyle title="B" price={20000} />
                <ProductStyle title="C" price={30000} />
            </div>
        </>
    );
}