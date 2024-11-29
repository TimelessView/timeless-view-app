import { configureStore } from '@reduxjs/toolkit';
import navigationSlice from '@/store/slices/NavigationSlice';

/*  IMPORTANT
     HOW TO USE IT:
     You should WRAP the components that should be able to use your slices
     in "Provider store={store}"

     IT CAN BE DONE E.G. IN MAIN.TSX
        ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
        <Provider store={store}>
           <App />
        </Provider>
        </React.StrictMode>
);
*/

// import your slice
// import cartSlice from './cart-slice.ts';

const store = configureStore({
  reducer: {
    navigation: navigationSlice
  }
});

export default store;

// IMPORTANT:
//  In order to use dispatch and useSelector correctly, create hooks.ts file, and inject the snippet
// by invoking "reduxHooks".
// or inject in manually
/*
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store.ts';

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
*/
// INFO: how to use them in a Component: invoke "cuseDispatch" snippet, or inject
// it manually
/*
  const dispatch = useCartDispatch();

  function handleAddToCart() {
    dispatch(cartActions.addToCart({ id, title, price }));
  }

  ...
  const items = useCartSelector((state) => state.cart.items);
*/

// type for accessing useSelector variables
export type RootState = ReturnType<typeof store.getState>;
// type for accessing reducers(action functions) in your store
export type AppDispatch = typeof store.dispatch;
