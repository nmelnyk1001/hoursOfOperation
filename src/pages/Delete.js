import React from 'react';
import { useParams } from 'react-router-dom';

const Delete = () => {
    const params = useParams();

    return(
        <React.Fragment>
            <h1>{params.storeId} was successfully deleted.</h1>
        </React.Fragment>
    );
};

export default Delete;