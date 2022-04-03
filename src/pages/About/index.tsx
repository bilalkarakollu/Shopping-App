import { Grid, Container, Typography, Button, Box } from "@mui/material";
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <Container maxWidth={'lg'}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                   <Box my={8}>
                       <Typography variant={'h1'} fontSize={'xxx-large'} fontWeight={'bold'}>About Us</Typography>
                       <Typography variant={'body1'} my={4} lineHeight={2}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim officiis, quas. Beatae corporis dicta, ducimus ea eius enim, eos eum hic illo ipsum iusto nam odit perferendis repellat, saepe sequi.
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque inventore mollitia quisquam quod repellat sequi similique totam. Aliquid at dicta dolores harum impedit laboriosam nulla perspiciatis sed voluptate, voluptates.
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque cum dolores et eum expedita ipsum nisi nobis possimus, quisquam repudiandae rerum, sequi temporibus ullam velit. Inventore mollitia officiis quaerat!
                       </Typography>
                       <Link to={'/contact'}>
                           <Button fullWidth variant={'contained'}>
                               Contact Us
                           </Button>
                       </Link>
                   </Box>
                </Grid>
                <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'}>
                    <Box component={'img'} src={'/img/about.png'} width={'80%'} height={'100%'} sx={{objectFit:'contain', objectPosition:'center'}}/>
                </Grid>
            </Grid>
        </Container>
    )
}