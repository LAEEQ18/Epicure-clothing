import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

/*const COLLECTION_ID_MAP = {
    hats : 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}*/
// we also dont need collection id map after creating object

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);
// for converting object in to array
export const selectCollectionsForPreivew = createSelector(

    [selectCollections] ,

    collections => collections ? Object.keys(collections).map(key => collections[key]) : []

);

export const selectCollection = memoize((collectionUrlParam) => 

createSelector(
    [selectCollections],
   // after creating an object we dont use .find an array function collections => collections.find( collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    collections => (collections?collections[collectionUrlParam] :null)
   )
);