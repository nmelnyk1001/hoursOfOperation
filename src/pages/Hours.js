import React from 'react';
import { useParams } from 'react-router-dom';

const Hours = () => {
    const params = useParams();

    return(
        <React.Fragment>
            <h1>These are the hours for store: {params.storeId}</h1>
            <table>
                <tr>
                    <th>Day of Week</th>
                    <th>Open</th>
                    <th>Close</th>
                </tr>
                <tr>
                    <th>Sunday</th>
                    <th>@todo</th>
                    <th>@todo</th>
                </tr>
                <tr>
                    <th>Monday</th>
                    <th>@todo</th>
                    <th>@todo</th>
                </tr>
                <tr>
                    <th>Tuesday</th>
                    <th>@todo</th>
                    <th>@todo</th>
                </tr>
                <tr>
                    <th>Wednesday</th>
                    <th>@todo</th>
                    <th>@todo</th>
                </tr>
                <tr>
                    <th>Thursday</th>
                    <th>@todo</th>
                    <th>@todo</th>
                </tr>
                <tr>
                    <th>Friday</th>
                    <th>@todo</th>
                    <th>@todo</th>
                </tr>
                <tr>
                    <th>Saturday</th>
                    <th>@todo</th>
                    <th>@todo</th>
                </tr>
            </table>
        </React.Fragment>
    );
};

export default Hours;