import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {title, price, _id} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;


        const order = {
            service: _id,
            serviceName: title,
            price,
            customers: name,
            email,
            phone,
            message
        }

        fetch('https://star-cloud-kitchen-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged) {
                alert('Order placed successfully.');
                form.reset();
            }
        })
        .catch(er => console.error(er));

    }

    return (
        <div>
             <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'>{title}</h2>
                <h4 className='text-3xl'>Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="first name" className="input input-ghost w-full input-bordered" />
                    <input name="lastName" type="text" placeholder="last name" className="input input-ghost w-full input-bordered" />
                    <input name="phone" type="text" placeholder="your phone" className="input input-ghost w-full input-bordered" required/>
                    <input name="email" type="text" placeholder="your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your message"></textarea>
                <input className='btn' type="submit" value="Place your order" />
            </form>
        </div>
    );
};

export default CheckOut;