import React from "react";
import ForumHeader from "./ForumHeader";
import Comment from "./Comment";

import Paper from '@mui/material/Paper';

const styles = {
    paper:{
        marginTop:'10px',
        padding: '20px',
        marginLeft:'10px',
        marginRight:'10px',
    },
};

const Forum = () =>{
    return(
            <Paper sx={styles.paper} elevation={3}>
                <ForumHeader/>
                <Comment/>

            </Paper>
    )
};
export default Forum;
