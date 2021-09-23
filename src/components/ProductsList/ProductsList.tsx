import { FunctionComponent } from "react";
import classes from './ProductsLists.module.css';
import { Link } from 'react-router-dom';

interface ProductsListProps {

}

const ProductsList: FunctionComponent<ProductsListProps> = () => {
    return (
        <div className={classes['products-list']}>
            <div>
                <Link to="/product-detail/1">
                    Product 1
                </Link>
            </div>
            <div>
                <Link to="/product-detail/2">
                    Product 2
                </Link>
            </div>
            <div>
                <Link to="/product-detail/3">
                    Product 3
                </Link>
            </div>
        </div>
    );
}

export default ProductsList;