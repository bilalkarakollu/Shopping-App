import {Box, Button, Container, Grid, Typography, TextField } from "@mui/material";

export default function Contact() {
    return (
        <Container maxWidth={'lg'}>
            <Box my={4} borderBottom={'1px solid #e8e8e8'}>
                <Typography textAlign={'center'} variant={'h1'} fontWeight={'bold'} fontSize={['xx-large','xxx-large']}>
                    Have a question?
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'}>
                    <Box my={8} display={'flex'} justifyContent={'center'}>
                        <Box component={'img'} src={'/img/mail.png'} width={'80%'} height={'100%'} sx={{objectFit:'contain', objectPosition:'center'}}/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box my={8} component={'form'} action={'mailto: karakollubilal@gmail.com'} method={'post'}>
                            <TextField fullWidth type={'text'} margin={'normal'} label={'Full Name'} required/>
                            <TextField fullWidth type={'email'} margin={'normal'} label={'Email'} required/>
                            <TextField multiline rows={4} fullWidth type={'text'} margin={'normal'} label={'Message'} required/>
                            <Button sx={{mt:3}} fullWidth type={'submit'} variant={'contained'}>Submit</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}