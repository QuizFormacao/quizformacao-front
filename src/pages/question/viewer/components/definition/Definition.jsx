import React from "react";
import DefinitionHeader from "./DefinitionHeader";
import DefinitionBody from "./DefinitionBody";

import Paper from '@mui/material/Paper';

const styles = {
    paper:{
        marginLeft: '10px',
        marginRight: '10px',
        padding: '20px',
    }
};

const Definition = () => {
    return(
        <Paper sx={styles.paper} elevation={3}>
            <DefinitionHeader/>
            <DefinitionBody/>
        </Paper>
    )
};
export default Definition;
