import React from 'react';
import { useEffect, useState } from 'react';

const Hours = () => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState("still loading");

    /*useEffect(()=>{
        setLoading(true);
        fetch('https://4db0tlsrel.execute-api.us-east-2.amazonaws.com/dev/test-func/create',{
            method:'POST',
            mode:"no-cors",
            body:{
                "type":"create",
                "store_id": 2,
                "day_of_week": 3,
                "open_hour": 800,
                "close_hour": 1700
            }
        }).then(response => response.json())
        .then(data => setResponse(data));
    },[]);*/

    return(
        <React.Fragment>
            {isLoading && <h1>Loading. . .</h1>}
            {console.log(response)}
            {!isLoading && <div>
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
            </div>}
        </React.Fragment>
    );
};

export default Hours;