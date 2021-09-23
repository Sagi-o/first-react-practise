import { FunctionComponent } from "react";
import { useParams, useHistory, useLocation } from 'react-router-dom';

interface ProductDetailProps {
}

const ProductDetail: FunctionComponent<ProductDetailProps> = () => {
    const { productId } = useParams() as { productId: string };
    const history = useHistory();
    const location = useLocation();

    const backHandler = () => {
        history.replace('/products');
    }

    const queryHandler = () => {
        console.log(location);
        const params = new URLSearchParams(location.search);
        const isAscOrder = params.get('sort') === 'asc';
        history.push(`${location.pathname}?sort=${(isAscOrder ? 'desc' : 'asc')}`);
    }

    return (
        <>
            <p onClick={backHandler}>
                Back
            </p>
            <div onClick={queryHandler}>
                Query Check
            </div>
            <div className="product-detail">
                Product Id: {productId}
            </div>
        </>
    );
}

export default ProductDetail;