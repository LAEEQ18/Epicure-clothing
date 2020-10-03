import {createStore , applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
//import {persistReducer} from 'redux-persist';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
//import thunk from 'redux-thunk';

//import { fetchCollectionsStart} from './shop/shop.sagas';
import rootSaga from '../redux/root-saga';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development')
{
    middlewares.push(logger);
}

 export const store = createStore(rootReducer,applyMiddleware(...middlewares));

 sagaMiddleware.run (rootSaga);
 export const persistor = persistStore(store);


export default {store , persistor}
//export default persistor;