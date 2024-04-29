import React, { useEffect, useState } from 'react';
import { getProductList } from '../services/Productservice/productservice';
import { Card, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import '../styles/endsection.css';

const Endsection = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productList = await getProductList();
                setProduct(productList);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='end-section'>
            {product.map((prod, index) => (
                <Card className="card" key={index} style={{ minWidth: '250px', maxWidth: '350px' }}>
                    <CardMedia
                        className="card-media"
                        component="img"
                        alt="green iguana"
                        image={prod.imageUrl}
                    />
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {prod.productName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Price: ${prod.productPrice}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Description: {prod.categoryName}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default Endsection;
