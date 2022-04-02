import { TextField, Button, Box } from "@mui/material"

export default function Register(){
    return(
        <Box component="form">
            <TextField fullWidth autoFocus margin="normal" label="Email" />
            <TextField fullWidth margin="normal" label="Password" />

            <Box mt={2.5}>
                <Button type='submit' fullWidth variant="contained" color="primary">
                    Register
                </Button>
            </Box>
        </Box>
    )
}