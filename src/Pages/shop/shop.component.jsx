import React , {useEffect}from 'react';
import {Route} from 'react-router-dom';
//import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import CollectionOverviewContainer from '../../Components/collection-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
//import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {  fetchCollectionsStart } from '../../redux/shop/shop.action';
// import { selectIsCollectionsLaoded} from '../../redux/shop/shop.selector';
//import WithSpinner from '../../Components/with-spinner/with-spinner.component'

//const CollectionOverviewWithSpinner = WithSpinner (CollectionOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({fetchCollectionsStart, match}) =>  {
    // constructor () {
    //     super();
    //     this.state= {
    //         loading : true
    //     }
    // }
    // unsubscribeFromSnapshot = null;

    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart]);
    // componentDidMount() {

    //     const {fetchCollectionsStart} = this.props;
    //     fetchCollectionsStart();


        // const {updateCollections} =this.props;
        // const collectionRef = firestore.collection('collections');

        // fetch(
        //     'https://firestore.googleapis.com/v1/projects/crown-db-bef58/databases/(default)/documents/collections'
        //     )

        //     .then(response => response.json())
        //     .then(collections => console.log(collections));


        // collectionRef.get().then(
        //     snapShot => {

        //         const collectionsMap =   convertCollectionsSnapshotToMap(snapShot);
        //         updateCollections(collectionsMap);
        //         this.setState({loading :false});
        //         //console.log(collectionsMap);
        //        }
        // )

        return(<div className = 'shop-page'> 
          
        <Route exact
         path = {`${match.path}`} 
        //  
        component={CollectionOverviewContainer} 
        />
        <Route
         path = {`${match.path}/:collectionId`}
        //  render = { props => (
        // <CollectionPageWithSpinner isLoading ={!isCollectionsLoaded} {...props} /> 
        // )} 
        component={CollectionPageContainer }

        />

        </div>);
            
    }


  // const {match } = this.props;
  // const {loading} = this.state;

        //console.log(match);



// const mapStateToProps = createStructuredSelector ({
//     //isCollectionFetching : selectIsCollectionFetching,
//     isCollectionsLoaded : selectIsCollectionsLaoded

// })
 
const mapDispatchToProps = dispatch => ({
    // updateCollections : collectionsMap =>
    // dispatch(updateCollections(collectionsMap))

    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)
    (ShopPage);