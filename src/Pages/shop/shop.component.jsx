import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionOverview from '../../Components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection.component';
import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.action';

import WithSpinner from '../../Components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner (CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    constructor () {
        super();
        this.state= {
            loading : true
        }
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} =this.props;
        const collectionRef = firestore.collection('collections');

        // fetch(
        //     'https://firestore.googleapis.com/v1/projects/crown-db-bef58/databases/(default)/documents/collections'
        //     )

        //     .then(response => response.json())
        //     .then(collections => console.log(collections));


        collectionRef.get().then(
            snapShot => {

                const collectionsMap =   convertCollectionsSnapshotToMap(snapShot);
                updateCollections(collectionsMap);
                this.setState({loading :false});
                //console.log(collectionsMap);
               }
        )
            
    }

render(){
   const {match} = this.props;
   const {loading} = this.state;

        console.log(match);
        return(<div className = 'shop-page'> 
          
        <Route exact
         path = {`${match.path}`} 
         render = { props => (
         <CollectionOverviewWithSpinner isLoading ={loading} {...props} /> 
         )} 
        />
        <Route
         path = {`${match.path}/:collectionId`}
         render = { props => (
        <CollectionPageWithSpinner isLoading ={loading} {...props} /> 
        )} 
        />

        </div>);
}

}
 
const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)
    (ShopPage);