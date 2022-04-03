import { useState, useEffect } from 'react';
import { Grid, Container, Box, Typography, Button } from '@mui/material';
import Placeholder from "../Placeholder";
import Product from "../Product";
import axios from 'axios';

export default function Products(){

    useEffect(() => {
            getProduct()
        getCategorys()
        },
        [])

    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [selectCategory, setSelectCategory] = useState('')

    const getProduct = async () => {
        try {
            const products = await axios.get('https://fakestoreapi.com/products')
            setProducts(products.data)
        }catch (e:any){
            console.log(e.code)
        }
    }

    const getCategorys = async () => {
        try {
            const category = await axios.get('https://fakestoreapi.com/products/categories')
            setCategorys(category.data)
        }catch (e:any){
            console.log(e.code)
        }
    }

    var placeholderCard:any = [];
    for(var i = 0; i < 16; i++){
        placeholderCard.push(<Grid item xs={6} md={3}><Placeholder mx={1} width={'100%'} height={350}/></Grid>)
    }

    const productController = () => {
        if(products.length > 0){
            // @ts-ignore
           return products.filter(product => product.category.includes(selectCategory.toLowerCase())).map(product => <Product key={product.id} product={product}/>)
        }else{
            return placeholderCard
        }
    }

    return(
        <Container maxWidth={'lg'}>
            <Box my={3} borderBottom={'1px solid #e8e8e8'}>
                <Typography component={'h1'} textAlign={'center'} fontSize={'xxx-large'} fontWeight={'bold'}>
                    Products
                </Typography>
            </Box>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} my={3}>

                {
                    categorys.length > 0 ?
                        (
                            <>
                                <Button onClick={() => setSelectCategory('')} variant={'outlined'} sx={{textTransform:'capitalize', mx:1, backgroundColor: selectCategory === '' ? '#e8e8e8' : '', my:[1,1,0,0]}}>All</Button>
                                {categorys.map((category, index) => <Button key={index} onClick={() => setSelectCategory(category)} variant={'outlined'} sx={{textTransform:'capitalize', mx:1, backgroundColor: selectCategory === category ? '#e8e8e8' : '', my:[1,1,0,0]}}>{category}</Button>)}
                            </>
                        )
                        :
                        (
                            <>
                                <Placeholder mx={1} width={80} height={60}/>
                                <Placeholder mx={1} width={80} height={60}/>
                                <Placeholder mx={1} width={80} height={60}/>
                                <Placeholder mx={1} width={80} height={60}/>
                                <Placeholder mx={1} width={80} height={60}/>
                            </>
                        )
                }
            </Box>
            <Grid container spacing={3} minHeight={'100vh'} mb={10}>
                {productController()}
            </Grid>
        </Container>
    )
}