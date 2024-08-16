import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { set } from 'react-datepicker/dist/date_utils';
const Schedule = () => {

    const [item, setItem] = useState([]);
    const [fdata,setFdata]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [conference,setConference]=useState('');
    const navigate=useNavigate();

    useEffect(() => {
        const getSchedule = async () => {
            let result = await fetch('http://localhost:5500/getItem');

            result = await result.json();
            setItem(result);
            setConference(result.Task);
            

        }

        getSchedule();

    }, [])

    
    const feedbackHandle=async ()=>{
        console.log("hello",fdata);
        let  auth=localStorage.getItem("user");
        auth=JSON.parse(auth);
        setName(auth.Name);
        setEmail(auth.Email);

        let result=await fetch('http://localhost:5500/feedback',{
            method:'post',body:JSON.stringify({Conference:conference,Username:name,Email:email,Feedback:fdata}),
            headers:({'Content-Type':'application/json'})
        })
        result=await result.json();
        if(result)
        {
            alert("Your feedback saved successfuly.");
            setFdata('');
        }



    }

    const logoutHandle=()=>{
        localStorage.clear();
        navigate('/login');

    }

    return (
        <div className='schedule-page'>
            <button onClick={logoutHandle}>Logout</button>
            <h1>Conference Schedules</h1>
            <div className='schedule-container'>
                <table>
                    <tr>
                        <th>Conferece Name</th>
                        <th>Date</th>
                        <th>Feedback</th>
                    </tr>

                    {

                        item.map(data => (
                            <tr key={data._id}>
                                <td>{data.Task}</td>
                                <td>{data.Date}</td>
                                <td><textarea placeholder='Writer here your Feedback' value={fdata} onChange={(e)=>setFdata(e.target.value)}></textarea><button onClick={feedbackHandle}>Feedback</button></td>
                            </tr>

                        )
                        )
                    }
                </table>

            </div>

        </div>
    )
}

export default Schedule;
