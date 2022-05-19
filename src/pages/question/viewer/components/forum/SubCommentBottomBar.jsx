import React from "react";
import { AiOutlineLike,AiOutlineDislike} from "react-icons/ai";
import { RiReplyLine } from "react-icons/ri";

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const styles = {
    barColor:{
        height:'50px',
        marginBottom:'-2%'
    },
    defaultColor:{
        color: '#777678',
    },
    buttonFontSize:{
        fontSize:10,
        color: '#777678',
        marginTop:'2%',
    },
    color:{
        color:'#2196f3'
    },
};

const SubCommentBottomBar = () =>{
    const [likes, setLikes] = React.useState(0);
    const [dislikes,setDislikes] = React.useState(0);
    const [seeMore,setSeeMore] = React.useState(false);

    const handleSeeMore = () =>{
        setSeeMore(!seeMore)
    };

    const moreLikes = () =>{
        setLikes(likes + 1)
    };
    const moredislike = () =>{
        setDislikes(dislikes + 1)
    };

    return(
        <List>
            <ListItem sx={styles.barColor}>
                <Grid container>
                    <Grid item md={1} xs={1}>
                        <IconButton onClick={moreLikes} >
                            <Badge sx={likes > 0 ? styles.color: styles.defaultColor} badgeContent={likes}>
                                <AiOutlineLike size={20}/>
                            </Badge>
                        </IconButton>
                    </Grid>

                    <Grid item md={2} xs={2}>
                        <IconButton onClick={moredislike} >
                            <Badge sx={dislikes > 0 ? styles.color : styles.defaultColor} badgeContent={dislikes}>
                                <AiOutlineDislike size={20}/>
                            </Badge>
                        </IconButton>
                    </Grid>

                    <Grid item md={6} xs={6} >
                        <Button variant={"text"} sx={styles.buttonFontSize} size={"small"} startIcon={ <RiReplyLine size={20}/>}>
                            Responder
                        </Button>
                    </Grid>
                </Grid>
            </ListItem>
        </List>
    )
};
export default SubCommentBottomBar;
