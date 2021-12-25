import React,{ useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardComponent from '../Card/Card';
import Navigation from '../Navigation/Navigation';
import Skeleton from '@mui/material/Skeleton';

function Home(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return(
  // <div className={styles.Home}>
  <div className="custom-container">
    <Navigation />
    <div>
    <Box className="custom-grid-container" sx={{mt:1}}>
      {isLoaded && items.map(item => (
            <Box className="custom-grid-item">
                  <CardComponent img={item.image} title={item.title} price={item.price}/>  
          </Box>   
      ))}
      {!isLoaded && [1,2,3,4,5,6,7,8,9,10].map(item => (
          <Box className="custom-grid-item">
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
            </Box> 
      ))}
    </Box>
    </div>
  </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
