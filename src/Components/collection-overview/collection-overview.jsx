import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview';
import {selectCollectionsForPreivew} from '../../redux/shop/shop.selector';

import './collection-overview.styles.scss' ;

const CollectionsOverview = ({collections}) => (
    <div className = 'collection-overview'>
        {
        collections.map(({id,...otherCollectionProps}) => (
            <CollectionPreview key ={id}{...otherCollectionProps}></CollectionPreview>
        ))
    }

    </div>
);

const mapStateToProps = createStructuredSelector ({
    collections:selectCollectionsForPreivew
});

export default connect(mapStateToProps)(CollectionsOverview);