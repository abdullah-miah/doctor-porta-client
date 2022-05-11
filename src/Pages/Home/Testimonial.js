import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews =  [
        {
            _id:1,
            name: 'Winson Herry' ,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            city: 'califoniya',
            img: people1
        },
        {
            _id:2,
            name: 'Winson Herry' ,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            city: 'califoniya',
            img: people2
        },
        {
            _id:3,
            name: 'Winson Herry' ,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            city: 'califoniya',
            img: people3
        },
    ]
    return (
        <section className='mt-4'>
            <div className='flex justify-between'>
                <div className='mt-3'>
                    <h3 className='text-bold text-2xl text-primary'>Testimonials</h3>
                <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div className='mt-3'>
                    <img className=' w-24 lg:w-48' src={quote}></img>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {
                        reviews.map(review=>
                        <Review 
                        key={review._id}
                        review ={review}
                        >

                        </Review>)
                    }
                </div>
        </section>
    );
};

export default Testimonial;