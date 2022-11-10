import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete}) => {

    const {_id, serviceName, customers, phone, price, service, email} = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://star-cloud-kitchen-server.vercel.app/main-dishes/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data));
    }, [service])
    
    

    return (
        <div>
            <tr>
        <th>
          <label>
            <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-12 h-12">
                {   
                    orderService?.img &&
                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                }
              </div>
            </div>
            <div>
              <div className="font-bold">{customers}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">Approving</button>
        </th>
      </tr>
        </div>
    );
};

export default OrderRow;