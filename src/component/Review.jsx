import * as React from 'react';
import '../styleSheet/Review.css';
import ReviewOne from '../assests/ReviewOne.webp';
import { reviews } from './Data.js';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Review() {
  return (
    <section className='review' id='review'>
      <div className='review-container'>
        {reviews.map((review) => (
          <div className='review-main' key={review.id}>
            <div className='review-flex'>
              <Stack direction='row' spacing={2}>
                <Avatar alt='Remy Sharp' src={ReviewOne} sx={{ width: 56, height: 56 }} />
              </Stack>

              <Box>
                <Rating name='read-only' value={review.rating} readOnly />
              </Box>
            </div>
            <div className='review-data'>
              <h1 className='review-heading'>{review.name}</h1>
              <p className='review-para'>
               {review.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
