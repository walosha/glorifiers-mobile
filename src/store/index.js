import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import AsyncStorage from "@react-native-community/async-storage";
import { rootReducer } from "./reducers";

const logger = createLogger({
  colors: false,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(...middlewares));
let persistor = persistStore(store);

export { store, persistor };
