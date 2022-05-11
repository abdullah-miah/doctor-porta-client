import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title"></h2>
          <p>{review.reviews}</p>
          <div className='flex items-center mt-3'>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review.img} />
            </div>
            </div>
            <div className='ml-4'>
                <h1>{review.name}</h1>
                <p>{review.city}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;