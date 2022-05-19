import React, {useState, Fragment} from "react";

import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const styles = {
    textField: {
        width:'100%'
    },
};

const TextChips = ({onChange, name}) => {

    const [records,setRecords] = useState([]);
    const [text, setText] = useState("");

    const handleOnChangeText = (event) =>{
        setText(event.target.value);
    }

    const handleOnClickAdd = () =>{
        records.push(text);
        setRecords(records);
        setText("");

        onChange({
        target: {
            value: records
        }});
    }

    const handleOnDelete = (element) => {
        let index = records.indexOf(element);
        records.splice(index, 1);
        setRecords(records);
        onChange({
            target: {
                value: records
            }
        });
    }

    return(
        <Fragment>
            <Box>
                <Grid container spacing={2}>
                {
                    records.map(element =>
                       (<Grid item xs={12} md={'auto'} key={name + "-" + element} >
                            <Chip label={element}  color={'primary'} onDelete={() => {handleOnDelete(element)}} />
                       </Grid>)
                    )
                }
                </Grid>
            </Box>
            <Fragment>
                <TextField onChange={handleOnChangeText} value={text} variant="standard" style={styles.textField}/>
                <br/>
                <Button
                    variant="outlined"
                    color="primary"
                    size="medium"
                    onClick={handleOnClickAdd}
                    style={{marginTop:'10px'}}
                >
                    Adicionar
                </Button>
            </Fragment>
        </Fragment>
      );
};

export default TextChips;
