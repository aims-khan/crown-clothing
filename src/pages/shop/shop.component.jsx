import React from 'react';

import { Route } from 'react-router-dom';


// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { selectCollections } from '../../redux/shop/shop.selectors';

// import CollectionPreview from '../../components/collection-preview/collection-preview.component';

//this component is also changed from class to function just like did with directory to move the hardcoded data to redux

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../category/collection.component';


const ShopPage = ({ match }) => (

    // const {collections} = this.state;

    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        
        {/* // collections.map(({ id, ...otherCollectionProps }) => (
        //     <CollectionPreview key={id} { ...otherCollectionProps } />
        // )) */}
    </div>
);



// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })


export default ShopPage;