import {ChangeEvent} from 'react'
import { TextField, Button, Box, CircularProgress } from "@mui/material"
import {useAppDispatch, useAppSelector} from "../../redux/app/hooks";
import { changeName, changeEmail, changePassword, register } from '../../redux/slices/authSlice'

export default function Register(){

    const dispatch = useAppDispatch();

    const name = useAppSelector(state => state.auth.name);
    const email = useAppSelector(state => state.auth.email);
    const password = useAppSelector(state => state.auth.password);
    const isLoading = useAppSelector(state => state.auth.isLoading);

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => dispatch(changeName(e.target.value));
    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => dispatch(changeEmail(e.target.value));
    const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => dispatch(changePassword(e.target.value));

    const handleSubmit = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        dispatch(register({name, email, password}))
    }

    return(
        <Box component="form" onSubmit={handleSubmit}>
            <TextField type={'text'} value={name} onChange={handleNameChange} fullWidth autoFocus margin="normal" label="Name" />
            <TextField type={'email'} value={email} onChange={handleEmailChange} fullWidth margin="normal" label="Email" />
            <TextField type={'password'} value={password} onChange={handlePasswordChange} fullWidth margin="normal" label="Password" />

            <Box mt={2.5}>
                <Button disabled={isLoading} type='submit' fullWidth variant="contained" color="primary">
                    Register {isLoading && <CircularProgress sx={{ml:2}} size={20}/>}
                </Button>
            </Box>
        </Box>
    )
}