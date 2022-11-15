import React from 'react';

const DetailCard = ({review}) => {
    const {userName,serviceName, userImg, reviewMsg} = review;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
        <div className="card-body">
            
                <div >
                    <img className="w-10 rounded-full" src={userImg} alt='profileimg' />
                </div>
            
            <h2 className="card-title">{userName}</h2>
            <h2 className="card-title">{serviceName}</h2>

            <p>review mwssage: {reviewMsg}</p>
        </div>
        </div>
    );
};

export default DetailCard;