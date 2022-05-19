import React, {useState} from "react";

import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';

const ReferenceItem = ({onEdit, onRemove, elementText}) => {
    const [editableOn, setEditable] = React.useState(true);
    const [text, setText] = useState(elementText);

    const handleOnClick = () => {
        setEditable(!editableOn);
        onEdit(text);
    };
    const handleOnDelete = () => {
        onRemove();
    };
    const handleOnChangeText = (event) =>{
        setText(event.target.value);
    };

    return <ListItem>
            {editableOn ?
                <h5>{text}</h5> :
                <TextField onChange={handleOnChangeText} value={text} fullWidth multiline/>
            }
            <IconButton onClick={handleOnClick}>
                {editableOn ?
                    <EditIcon/> :
                    <SaveIcon />
                }
            </IconButton>
            <IconButton onClick={handleOnDelete}>
                <DeleteIcon/>
            </IconButton>
    </ListItem>
};

export default ReferenceItem;
