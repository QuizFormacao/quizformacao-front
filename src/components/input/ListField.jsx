import React, {useEffect, useState} from "react";
import {IconButton, List, ListItem, ListSubheader, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from "@mui/icons-material/Delete";

const ListField = ({list, onChange, label, sx}) => {
    let [items, setItem] = useState([]);

    const onEdit = (text, index) => {
        items[index] = text;
        let copy = JSON.parse(JSON.stringify(items));
        onChange({target: {value: copy}})
    }

    const onRemove = (index) => {
        items.splice(index, 1);
        let copy = JSON.parse(JSON.stringify(items));
        copy.pop();
        onChange({target: {value: copy}})
    }

    useEffect(() => {
        let copy = JSON.parse(JSON.stringify(list));
        copy.push('');
        setItem(copy);
    }, [list]);

    return (
        <List sx={sx} subheader={
            label &&
            <ListSubheader id="nested-list-subheader" sx={{textAlign: 'start', padding: '20px 0 15px', lineHeight: 0}}>
                {label}
            </ListSubheader>
        }
        >
            {items.map((item, index) => (
                <ItemField onEdit={(text) => onEdit(text, index)}
                           onRemove={() => onRemove(index)}
                           initialValue={item}
                           key={item+index}
                />
            ))}
        </List>
    );
}

const ItemField = ({onEdit, onRemove, initialValue}) => {
    const [editableOn, setEditable] = useState(Boolean(initialValue));
    const [value, setValue] = useState(initialValue);

    const handleOnClick = () => {
        setEditable(!editableOn);
        onEdit(value);
    };

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return <ListItem sx={{paddingLeft: 0, paddingRight: 0}}>
        <TextField size={"small"} variant={"outlined"} onChange={onChange} value={value} fullWidth multiline/>
        {editableOn?
            <>
                <IconButton onClick={onRemove}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton onClick={handleOnClick}>
                    <SaveIcon/>
                </IconButton>
            </>
        :
            <IconButton onClick={handleOnClick}>
                <AddIcon/>
            </IconButton>
        }
    </ListItem>
};

export default ListField;
