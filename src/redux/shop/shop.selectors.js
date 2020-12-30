import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
); 

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
) //This selector is added because we changed the collections to object instead of array which throws erro in collection over because of the map fucntion, as map function is for array

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections], 
    collections => collections[collectionUrlParam]
);