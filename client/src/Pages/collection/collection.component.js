import React  from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../Components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selector';
//import CollectionPageContainer from './collection.container';
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './collection.styles'

//import { firestore } from '../../firebase/firebase.utils';

import './collection.styles.jsx';

const CollectionPage = ({collection}) => {
   // console.log(collection);
//    unsubscribeFromCollections = null;

//    componentDidMount() {
//        this.unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot =>)
//    }

//    componentWillUnmount() {
//        this.unsubscribeFromCollections()
//    }

    // useEffect(() => {
    //     console.log('I am subscribing');
    //     const unsubscribeFromCollections =firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))

    //     return () => {
    //         console.log('I am unsubscribing');
    //         unsubscribeFromCollections();
    //     };      
    // },[]);

    const {title, items } = collection;
  return(
//   <div className = 'collection-page'>
//         <h2 className='title'>{title}</h2>
//         <div className='items'>
//             {items.map(item => (
//                 <CollectionItem key ={item.id} item ={item}/>
//             ))}
//             </div>
    
    
//     </div>)
    <CollectionPageContainer>
        <CollectionTitle> {title} </CollectionTitle>
        <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};


const mapStateToProps = (state , ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect (mapStateToProps) (CollectionPage);