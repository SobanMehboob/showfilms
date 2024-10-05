import React from 'react';
import '../styleSheet/Contact.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import contact from '../assests/contact-img.jpg';
import AOS from 'aos';
AOS.init();

const Contact = () => {
  

  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is not valid').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), 
  });

  
  const onSubmit = (data) => {
    console.log(data);
 
  };

  return (
    <section className='contact' id='contact'>
      <div className='contact-main'>
        <div className='contact-left'  data-aos="fade-down-right">
          <img className='contact-img' src={contact} alt="Contact" />
        </div>
        
        <div className='contact-right' data-aos="fade-down-left">
          
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                {...register('message')}
                className={errors.message ? 'input-error' : ''}
              />
              {errors.message && <p className="error-message">{errors.message.message}</p>}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
