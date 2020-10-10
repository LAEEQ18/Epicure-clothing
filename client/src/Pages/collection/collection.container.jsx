import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';


import { selectIsCollectionsLaoded} from '../../redux/shop/shop.selector';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector ({
    isLoading: state => !selectIsCollectionsLaoded(state)
});

const CollectionPageContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;