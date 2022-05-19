import React from "react";
import SubCommentBottomBar from "./SubCommentBottomBar";
import CommentHeader from "./CommentHeader";

import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

const mockForum = {
    items:[
        {
            text: "testo nivel 1",
            items: [
                {
                    text: "texto nivel 2",
                },
                {
                    text: "texto nivel 2",
                }
            ]
        },
        {
            text: "testo nivel 1",
            items: [
                {
                    text: "texto nivel 2",
                },
                {
                    text: "texto nivel 2",
                }
            ]
        }
    ]
};

const styles = {
    commentPosition: {
        marginTop: '-3%',
    },
    paper:{
      width:'auto',
        marginLeft: '5%',
        marginRight:'5%',
        marginTop:'3%'
    },
};

const SubComment = () =>{

    return <div sx={styles.paper}>
        <List>
           <CommentHeader/>
            <ListItem sx={styles.commentPosition}>
                est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
            </ListItem>
            <SubCommentBottomBar/>
        </List>
    </div>
};
export default SubComment;
