import React from 'react'
import { useEffect,useState } from 'react'
import { getProductList } from '../services/Productservice/productservice'
import { Card, CardContent, Typography } from '@mui/material'; 
import CardMedia from '@mui/material/CardMedia';
import '../styles/endsection.css';

const Endsection = () => {
    const[product,setProduct]=useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const productList = await getProductList();
            setProduct(productList);
            console.log(product);
            console.log(JSON.stringify(product))
          } catch (error) {
            console.error('Error fetching products:', error.message);
          }
        };
        fetchProducts();
      }, []); 

  return (
    <div className='end-section'>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' ,justifyContent: 'center'}}>
        {product.slice(0, 3).map((prod, index) => (
          <Card className="card" key={index} style={{ minWidth: '250px', maxWidth: '300px',height: '250px', marginTop:'200px'}}>
             <CardMedia
            component="img"
            alt="green iguana"
            height="140"
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
    </div>
  )
}

export default Endsection