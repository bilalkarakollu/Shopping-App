import { Box, Typography, Grid, Button } from "@mui/material";
import { useAppDispatch } from "../../redux/app/hooks";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {addProductController, removeProductController} from "../../redux/slices/basketSlice";

interface Rating {
    rate:number,
    count:number
}

interface BasketItem {
    id:number,
    title:string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating:Rating
    quantity?:number
}

interface PropsType {
    product:BasketItem
}

export default function BasketItem(props:PropsType){

    const product = props.product
    const dispatch = useAppDispatch();

    const handleAddProduct = (product:BasketItem) => {
        dispatch(addProductController(product))
    }

    const handleRemoveProduct = (productId:number) => {
        dispatch(removeProductController(productId))
    }

    return(
        <Grid container spacing={2} my={3} py={1} alignItems={'center'} justifyContent={'center'} border={'1px solid #e8e8e8'}>
            <Grid item xs={12} sm={6}>
                <Box height={'280px'}>
                    <Box component={'img'} src={product.image} alt={product.title} width={'100%'} height={'100%'} sx={{objectFit:'contain', objectPosition:'center'}}/>
                </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Typography fontSize={'large'} fontWeight={'bold'}>
                    {product.title}
                </Typography>
            </Grid>
            <Grid item xs={4} sm={2} textAlign={'center'}>
                <Box display={'flex'}>
                    <Button size={'small'} variant={'outlined'} onClick={()=> handleRemoveProduct(product.id)}>
                        <RemoveOutlinedIcon fontSize={'small'}/>
                    </Button>
                    <Typography fontSize={'large'} fontWeight={'bold'} py={1} px={1}>
                        {product.quantity}
                    </Typography>
                    <Button size={'small'} variant={'outlined'} onClick={()=> handleAddProduct(product)}>
                        <AddOutlinedIcon fontSize={'small'}/>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}