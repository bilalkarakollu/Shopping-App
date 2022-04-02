import {ChangeEvent} from "react";
import {TextField, Button, Box, CircularProgress} from "@mui/material"
import { useAppSelector, useAppDispatch} from "../../redux/app/hooks";
import { logIn, changeEmail, changePassword } from "../../redux/slices/authSlice";

export default function Login() {

    const dispatch = useAppDispatch();

    const email = useAppSelector(state => state.auth.email);
    const password = useAppSelector(state => state.auth.password);
    const isLoading = useAppSelector(state => state.auth.isLoading);

    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => dispatch(changeEmail(e.target.value))
    const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => dispatch(changePassword(e.target.value))

    const handleSubmit = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        dispatch(logIn({email,password}))
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField type={'email'} value={email} onChange={handleEmailChange} fullWidth autoFocus margin="normal" label="Email" />
            <TextField type={'password'} value={password} onChange={handlePasswordChange} fullWidth margin="normal" label="Password" />

            <Box mt={2.5}>
                <Button disabled={isLoading} type='submit' fullWidth variant="contained" color="primary">
                    Login {isLoading && <CircularProgress sx={{ml:2}} size={20}/>}
                </Button>
            </Box>
        </Box>
    )
}