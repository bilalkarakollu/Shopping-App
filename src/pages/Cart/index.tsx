import {useAppSelector, useAppDispatch} from "../../redux/app/hooks";
import BasketItem from "../../components/BasketItem";
import { Box, Typography } from "@mui/material";

export default function Cart(){

    const dispatch = useAppDispatch();
    const basketItems = useAppSelector(state => state.basket.basketItems)

    return(
        <div>
            {basketItems.length > 0 ? basketItems.map(item => <BasketItem product={item}/>)
                :
                (
                    <Box my={5}>
                        <Typography fontSize={'xxx-large'} fontWeight={'bold'} textAlign={'center'}>
                            Cart is Empty
                        </Typography>
                    </Box>
                )
            }
        </div>
    )
}