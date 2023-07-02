import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from './utils/redux/store.jsx'
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../src/utils/theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <Router>
            <CssBaseline />
            <App />
        </Router>
    </ThemeProvider>
    </Provider>
  /* </React.StrictMode>, */
)