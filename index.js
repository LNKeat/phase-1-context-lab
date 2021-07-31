/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */  
function createEmployeeRecord (emp) {
    return  {
        firstName: emp[0],
        familyName: emp[1],
        title: emp[2],
        payPerHour: emp[3],
        timeInEvents: [],
        timeOutEvents: []
   }
}

function createEmployeeRecords(emps){
   return emps.map((emp) => {
    return createEmployeeRecord(emp)
   })
}

function createTimeInEvent(timeStamp){
  let [date, time] = timeStamp.split(' ')
  this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(time),
      date: date
  })
  return this
//   emp.timeInEvents.push({
//           type: 'TimeIn',
//           time: time,
//           date: date
//       })
//   return emp
}

function createTimeOutEvent(timeStamp){
    let [date, time] = timeStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(time),
        date: date
    })
    return this
  }

  //calculates the hours worked when given an 
  //employee record and a date
  function hoursWorkedOnDate(dateInput){
    const timeInObj = this.timeInEvents.find((obj) => obj.date === dateInput)
    const timeOutObj = this.timeOutEvents.find((obj) => obj.date === dateInput)
    //console.log('in: ', timeInObj, 'out: ', timeOutObj)
    return (timeOutObj.hour - timeInObj.hour)/ 100
  }

//   multiplies the hours worked by the employee's rate per hour
  function wagesEarnedOnDate(dateInput){
    // const wage = this.payPerHour
    // const hours = hoursWorkedOnDate.call(this, dateInput)
    // console.log('wage: ', wage, 'hours: ', hours)
    return this.payPerHour * hoursWorkedOnDate.call(this, dateInput)
  }

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function findEmployeeByFirstName(srcArray, firstNameStr){
  return srcArray.find((emp) => (emp.firstName === firstNameStr))
}

function calculatePayroll(empsRecords){
    return empsRecords.reduce((total, curVal) => total + allWagesFor.call(curVal), 0)
}

