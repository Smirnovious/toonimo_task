import moment from 'moment';

export const hoursOfTheDay = () => {
let fromTime = moment('00:00', 'HH:mm');
let toTime = moment('23:00', 'HH:mm');
let duration = moment.duration(toTime.diff(fromTime));
let diff = duration.hours();
let hoursOfTheDay = [];

for (let i = 0; diff > i; i++) {
  let result = moment(fromTime).add(i, 'hours').format('HH:mm')
  hoursOfTheDay.push({id: i, time: result})
}
return hoursOfTheDay

}

// export const taskTimePlacer = (hourBefore, hourAfter, task) => {
//     if(task > hourBefore && task < hourAfter) {
//         return true
//     }
//     return false
//     console.log('false')
// }

export const taskPlacer = (tasks, hoursOfTheDay) => {
    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].time === hoursOfTheDay[i].time) {
             return (
                <div className="task" key={i}>
                    <p>{tasks[i].task}</p>
                </div>
            )
        } else
          return (
                <div className="task" key={i}>
                    <p>Empty</p>
                </div>
            )
    }
    }
