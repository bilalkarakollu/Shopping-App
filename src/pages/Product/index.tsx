import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/app/hooks";
import { addProductController } from "../../redux/slices/basketSlice";
import { Skeleton, Box, Grid, Container, Typography, Button} from "@mui/material";
import axios from "axios";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

interface Rating {
    rate:number,
    count:number
}

interface ProductType {
    id:number,
    title:string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating?:Rating
}

const PropsType = {
    id:0,
    title:'',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating:{
        "rate": 0,
        "count": 0
    }
}

export default function Product(){

    const { id } = useParams();
    const dispatch = useAppDispatch();

    const [product, setProduct] = useState(PropsType);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProduct();
    },[id])

    const getProduct = async () => {
        try {
            const data = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(data.data)
            setLoading(false)
        }catch (e:any){
            console.log(e)
        }
    }

    return(
        <Container maxWidth={'lg'} sx={{my:5}}>
            <Grid container spacing={3} minHeight={'90vh'} alignItems={'center'}>
                <Grid item xs={12} md={6}>
                    {!loading ?
                        <Box component={'img'} src={product.image} width={'100%'} height={'100%'} maxHeight={'50vh'} sx={{objectFit:'contain', objectPosition:'center'}}/>
                        :
                        <Skeleton width={'100%'} height={'80vh'}/>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        {!loading ?
                            <Typography fontSize={'xx-large'} fontWeight={'bold'} color={'lightgray'} textTransform={'uppercase'}>{product.category}</Typography>
                            :
                            <Skeleton width={'100%'} height={60}/>
                        }
                    </Box>
                    <Box>
                        {!loading ?
                            <Typography fontSize={'xx-large'}>{product.title}</Typography>
                            :
                            <Skeleton width={'100%'} height={60}/>
                        }
                    </Box>
                    <Box my={1} display={'flex'} alignItems={'center'}>
                        {!loading ?
                            <>
                                <Typography fontSize={'large'} fontWeight={'bold'}> {product.rating.rate} </Typography>
                                <StarRoundedIcon color={'warning'}/> ({product.rating.count})
                            </>
                            :
                            <Skeleton width={'100%'} height={60}/>
                        }
                    </Box>
                    <Box my={1}>
                        {!loading ?
                            <Typography fontSize={'xx-large'} fontWeight={'bold'}>${product.price}</Typography>
                            :
                            <Skeleton width={'100%'} height={60}/>
                        }
                    </Box>
                    <Box mt={4}>
                        {!loading ?
                            <Typography fontSize={'medium'}>{product.description}</Typography>
                            :
                            <Skeleton width={'100%'} height={100}/>
                        }
                    </Box>
                    <Box mt={6}>
                        {!loading ?
                            <Button onClick={() => dispatch(addProductController(product))} variant={'outlined'} fullWidth> Add Cart </Button>
                            :
                            <Skeleton width={'100%'} height={100}/>
                        }
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}