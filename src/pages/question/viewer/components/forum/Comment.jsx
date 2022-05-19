import React from "react";
import CommentBottomBar from "./CommentBottomBar";
import CommentHeader from "./CommentHeader";

import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const styles = {
    box:{
        flexGrow: 1
    }
};

const Comment = () =>{
    return (
        <Paper>
            <Box sx={styles.box}>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <CommentHeader/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                        quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <CommentBottomBar/>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
};
export default Comment;
