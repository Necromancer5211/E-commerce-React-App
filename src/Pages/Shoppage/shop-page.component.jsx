import React from 'react';
import './shop-page.styles.scss';
import SHOP_DATA from "./shop-data";
import Collection from "../../Components/Collection/collection.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections : SHOP_DATA
        }
    }
    render() {
        return (
            <div className="shop-page">{
                this.state.collections.map(({id,...otherCollections}) => (
                    <Collection key={id} {...otherCollections}/>
                ))
            }</div>
        )
    }
}

export default ShopPage;