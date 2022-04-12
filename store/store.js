import { createStore } from "redux";
import { reducer } from "./reducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig,reducer);

// export default () => {
//     let store = createStore(persistedReducer);
//     let persistor = persistStore(store);
//     return {store,persistor};

// }





const store = createStore(reducer);

export default store;