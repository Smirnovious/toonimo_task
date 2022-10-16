import React from 'react'
import Hours from '../../utils/day_hours.json'
import DATA from '../../utils/MOCK_DATA.json'
import moment from 'moment';
import { hoursOfTheDay } from '../../utils/taskPlacer';
import { useEffect } from 'react';
import { taskTimePlacer } from '../../utils/taskPlacer';
import { useState } from 'react';
import { taskPlacer } from '../../utils/taskPlacer';
const Calender = () => {
    const [hours, setHours] = useState([]);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setHours(hoursOfTheDay());
        setTasks(DATA);
    }, [])

  return (
    <>
    <div className='w-1/2 mx-auto text-2xl'>{moment().format("MMM Do YY")}</div>
    <table className="relative table-auto w-1/2">
     <tbody className=''>
        {hours.map((hour) => {
            return (
        <tr key={hour.id} className='border-2 text-black h-16 z-1'>
            <td className='text-black w-full h-full flex flex-row justify-between'>
            <p>{hour.time}</p>
            </td>
            <td>
             {taskPlacer(tasks, hours)}
            </td>
        </tr>
            )
        })}
           

  
    </tbody>
    </table>
    </>
  )
}

export default Calender

  
                    {/* if(taskTimePlacer('16:00', '20:00', data.time)){  
                    return (
                <div className='top-0 right-0 absolute border-2 w-fit p-2 bg-red-200 h-fit 
                flex flex-col justify-center items-center z-10' key={index}>
                    <p className='font-bold text-xl z-10'>{data.task}</p>
                    <p>{`Location: ${data.location}`}</p>
                    <p>{`Exact Time: ${data.time}`}</p>
                </div>
                    )
                    } else {
                        return null
                    }
                })} */}


            