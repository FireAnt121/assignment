import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CardComponent = (props) => {

return (
  <div>
    <Card sx={{ maxWidth: '100%', boxShadow: 'none' }}>
      <div className={styles.Card}>
      <CardMedia
        component="img"
        alt="green iguana"
        image= {props.img}
      />
      </div>
      <CardContent sx={{ padding: '0 !important'}}>
        <Box sx={{ display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
          <Typography variant="body1" component="div" sx= {{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: 'bold'}}>
            { props.title }
          </Typography>
          <Typography variant="body1" color="text.primary" sx= {{whiteSpace: 'nowrap', textDecoration: 'underline'}}>
            ${ props.price } total
          </Typography>
        </Box>
        <Box sx={{ display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
          <Typography variant="body1"  color="text.secondary" sx= {{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
            2179 miles away
          </Typography>
          <Typography variant="body2" color="text.secondary" sx= {{whiteSpace: 'nowrap'}}>
            23feb - 24 feb
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </div>
);
        }

Card.propTypes = {

};

Card.defaultProps = { name: "Rahul",
eyeColor: "deepblue",
img: "45"};

export default CardComponent;
