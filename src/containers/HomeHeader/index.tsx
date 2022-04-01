import { Box } from '@mui/material';
export default function HomeHeader() {
    return (
        <>
            <Box
                component="img"
                sx={{
                    height: 700,
                    width: '100%',
                    maxHeight: { xs: 233, md: 700 },
                    maxWidth: { xs: 1, md: 1 },
                    objectFit: 'cover',
                }}
                alt="shopping"
                src="/img/shopping-bg.jpeg"
            />
        </>
    )
}