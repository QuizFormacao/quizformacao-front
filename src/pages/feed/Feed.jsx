import React from 'react';
import TopBar from "../../components/TopBar";
import Post from "./components/Post";
import {Typography} from "@mui/material";

const Feed = () => {
    return (
        <TopBar>
            <Typography variant="h4" color={'primary'} sx={{margin: '1% 5%'}}>Meu Feed</Typography>
            <Post/>
            <Post/>
        </TopBar>
    );
}

export default Feed;