import { combineReducers, createStore } from "redux";
import listReducer from "./listReducer";
import taskReducer from "./taskReducer";
import { persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    list: listReducer,
    task: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persist = () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}

export default persist;
