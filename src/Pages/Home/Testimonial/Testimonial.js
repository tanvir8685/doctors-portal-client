import React from 'react';
import pic from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';


const Testimonial = () => {
    const reviews=[
        {
            _id:1,
            name:'Tanvir Hridoy',
            comment:'He is one of the best doctor i loves his treatment he is a very gentela and polite ',
            location:'Cumilla',
            img:people1
        },
        {
            _id:2,
            name:'Tanvir Hridoy',
            comment:'He is one of the best doctor i loves his treatment he is a very gentela and polite ',
            location:'Cumilla',
            img:people2
        },
        {
            _id:3,
            name:'Tanvir Hridoy',
            comment:'He is one of the best doctor i loves his treatment he is a very gentela and polite',
            location:'Cumilla',
            img:people3
        }
    ]
    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className='text-4xl'>What Our Pataint Says</h2>

                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={pic} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review=><Review
                    key={review._id}
                    review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;