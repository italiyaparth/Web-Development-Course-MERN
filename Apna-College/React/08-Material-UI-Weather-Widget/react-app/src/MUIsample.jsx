import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import IconButton from "@mui/material/IconButton";

export default function MUIsample() {
    return (
        <>
            <h2>Material UI Demo</h2>

            <h3>Button</h3>
            <Button variant="text">Click Me!</Button>
            <Button variant="contained">Click Me!</Button>
            <Button variant="outlined">Click Me!</Button>
            <Button variant="outlined" color="error" size="small">Click Me!</Button>
            <Button variant="outlined" color="success" size="medium">Click Me!</Button>

            <h3>Button with Icon</h3>
            <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>

            <h3>Icon Button</h3>
            <IconButton color="primary"> <DeleteIcon/> </IconButton>
            <IconButton> <AddShoppingCartIcon/> </IconButton>
        </>
    );
}