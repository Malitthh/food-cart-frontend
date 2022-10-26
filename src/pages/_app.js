import '../styles/globals.css';
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from "react-redux";
import { store, persistor } from '../store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
            <ToastContainer />
        </PersistGate>
    </Provider>
    )
}

export default App