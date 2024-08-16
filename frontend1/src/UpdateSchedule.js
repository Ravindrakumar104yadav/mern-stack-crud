import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker'


const UpdateSchedule = () => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [feed,setFeed]=useState([]);
    const navigate = useNavigate();
    const taskHandle = async () => {
        console.log(task, date);
        let result = await fetch('http://localhost:5500/schedule', {
            method: 'post', body: JSON.stringify({ Task: task, Date: date, Location: location }),
            headers: { 'Content-Type': 'application/json' }
        });
        result = await result.json();

        if (result) {
            alert("Conference schedule added successfuly..");
            setTask('');
            setDate('');
            setLocation('');
        }

    }

    const logoutHandle = () => {
        localStorage.clear();
        navigate('/login');
    }

    useEffect(()=>{
        const getFeedBack=async ()=>{
            let result=await fetch('http://localhost:5500/getFeedback');
            result=await result.json();
            
            setFeed(result);
            


        }

        getFeedBack();

    },[])



    return (
        <div className='update-schedule'>
            <button onClick={logoutHandle}>Logout</button>
            <h1>Update/Add  Schedules</h1>
            <div className='add-conference'>
                <input type="text" placeholder='Enter confernce Name' value={task} onChange={(e) => setTask(e.target.value)} />
                <input type="Date" placeholder='Enter date DD-MM-YYYY' value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="text" placeholder='Enter Location' value={location} onChange={(e) => setLocation(e.target.value)} />
                <button onClick={taskHandle}>Add</button>


            </div>
            <div className='feedback'>
                <h1>Feedbacks</h1>
                <div>
                    <table>
                        <tr>
                            <th>Conference Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Feedbacks</th>
                        </tr>
                        {
                            feed.map(data=>(
                                <tr key={data._id}>
                                    <td></td>
                                    <td>{data.Username}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.Feedback}</td>
                                </tr>
                            ))
                            
                        }
                    </table>
                </div>
            </div>

        </div>
    )
}

export default UpdateSchedule;
