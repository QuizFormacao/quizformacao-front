import React, {useState, Fragment} from "react";

import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ImageChips = () => {
    let data = "t"

    const [text, setText] = useState("");

    const handleOnChangeText = (event) =>{
        setText(event.target.value);
    }

    const handleOnClickAdd = () =>{
        handleOnClick()
        // records.push(text);
        // setRecords(records);
        // setText("");
        //
        // onChange({
        //     target: {
        //         value: records
        //     }});
    }

    const handleOnClick = () =>{

        fetch("http://localhost:8080/user", {
            method: "GET",
        }).then(response => {
            return response.text()
        }).then(result => console.log("result: " + result));
    }

  return(
      <Fragment>
          <List>
              <ListItem>
                  <Chip label="Exemplo" color={'primary'} onDelete={() => {}} />
              </ListItem>
          </List>
          <Fragment>
              <TextField onChange={handleOnChangeText} value={text} variant="standard"/>
              <br/>
              <Button
                  variant="outlined"
                  color="primary"
                  size="medium"
                  onClick={handleOnClickAdd}
              >
                  Adicionar
              </Button>
          </Fragment>
          {/*<Autocomplete*/}
          {/*    disablePortal*/}
          {/*    id="combo-box-demo"*/}
          {/*    options={top100Films}*/}
          {/*    sx={{ width: 300 }}*/}
          {/*    renderInput={(params) => <TextField {...params} label="Movie" />}*/}
          {/*/>*/}
      </Fragment>
  );
};

export default ImageChips;
