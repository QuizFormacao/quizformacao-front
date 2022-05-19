import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import Routes from './pages/Routes';
import HtmlHead from "./components/HtmlHead";

let theme = createTheme({
    palette: {
        primary: {
            main: '#f38321'
        },
        secondary: {
            main: "#2dad33"
        },
        tertiary: {
            main: "#99ffec"
        },
        background: {
            default: "#f6f5f5",
            light: "#2196f3"
        },
    },
});
theme = responsiveFontSizes(theme);

const App = () => {
    return <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HtmlHead/>
            <Routes/>
        </ThemeProvider>
    </React.StrictMode>
}

ReactDOM.render(<App/>, document.getElementById('root'));
