import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import saiful from '../assets/photos/saiful.jpg'
import { Helmet } from 'react-helmet';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bdacinw', 'template_wqzs6t3', form.current, 'rSjIh1ls4nDArK0p7')
            .then((result) => {
                e.target.reset();
                toast.success("Thanks for reaching out")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="hero bg-base-200 my-12">
            <Helmet>
                <title>Saiful | Contact</title>
            </Helmet>



            <div className="hero-content flex-col lg:flex-row">
                {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                <div className="card bg-base-100 shadow-xl mt-6">
                    <figure className="px-10 pt-10">
                        <img src={saiful} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Saiful Islam</h2>
                        <p>H-31, R-19, B-D, Mirpur-6</p>
                        <p>+8801724-219510</p>
                        <p>saifull.islam0708@gmail.com</p>
                    </div>
                </div>

                <div id='contact'>
                    <h2 className='text-center font-semibold text-3xl mt-5 mb-2'>Contact Me</h2>
                    <div className='flex items-center justify-center'>
                        <form className='md:w-1/2 m-4 shadow-lg border p-4 rounded' ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input className='w-full px-3 py-2 border rounded-md border-gray-300' type="text" name="from_name" required />
                            <label>Email</label>
                            <input className='w-full px-3 py-2 border rounded-md border-gray-300' type="email" name="user_email" required />
                            <label>Message</label>
                            <textarea className='w-full h-20 px-3 py-2 border rounded-md border-gray-300' name="message" required />
                            <div className='flex items-center justify-center'>
                                <input className='px-8 py-3 font-semibold rounded-md bg-sky-400 hover:bg-sky-500 hover:text-white text-gray-100' type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;