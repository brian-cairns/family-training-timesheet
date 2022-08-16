class TimeEntry {
    constructor(date, timeIn, timeOut, total, PD, FT, supervision) {
        this.date = date;
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.total = total;
        this.PD = PD
        this.FT = FT
        this.supervision = supervision
    }
}

let submit = document.getElementById('submit')
console.log(submit)
const formName = 'familyTrainingTimesheet'
console.log('form: ' + formName)
let newForm = {}
let timesheet = createTimesheet()

function createTimesheet() {
  let sheet = []
  for (i = 0; i < 6; i++) {
    let day = new TimeEntry;
    sheet.push(day)   
  }
  return sheet
}

let staffName = document.querySelector('input#staffName')
staffName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.staffName = e.target.value;
  console.log(newForm.staffName);
  })

let clientName = document.querySelector('input#clientName')
clientName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.clientName = e.target.value;
  console.log(newForm.clientName);
  })

let timePeriod = document.querySelector('input#timePeriod')
timePeriod.addEventListener('change', (e) => {
	console.log('changed')
	newForm.timePeriod = e.target.value;
  console.log(newForm.timePeriod);
  })  

let date1 = document.querySelector('input#day')
date1.addEventListener('change', (e) => {
  timesheet[0].date = document.getElementById('day').value;
  console.log(timesheet[0])
})

let timeIn1 = document.querySelector('input#in')
timeIn1.addEventListener('change', (e) => {
  timesheet[0].timeIn = document.getElementById('in').value;
  console.log(timesheet[0])
})

let timeOut1 = document.querySelector('input#out')
timeOut1.addEventListener('change', (e) => {
  timesheet[0].timeOut = document.getElementById('out').value;
  console.log(timesheet[0])
})

let total1 = document.querySelector('input#ttl1')
total1.addEventListener('change', (e) => {
  timesheet[0].total = document.getElementById('ttl1').value;
  console.log(timesheet[0])
})

let date2 = document.querySelector('input#day2')
date2.addEventListener('change', (e) => {
  timesheet[1].date = document.getElementById('day2').value;
  console.log(timesheet[1])
})

let timeIn2 = document.querySelector('input#in2')
timeIn2.addEventListener('change', (e) => {
  timesheet[1].timeIn = document.getElementById('in2').value;
  console.log(timesheet[1])
})

let timeOut2 = document.querySelector('input#out2')
timeOut2.addEventListener('change', (e) => {
  timesheet[1].timeOut = document.getElementById('out2').value;
  console.log(timesheet[1])
})

let total2 = document.querySelector('input#ttl2')
total2.addEventListener('change', (e) => {
  timesheet[1].total = document.getElementById('ttl2').value;
})

let date3 = document.querySelector('input#day3')
date3.addEventListener('change', (e) => {
  timesheet[2].date = document.getElementById('day3').value;
  console.log(timesheet[2])
})

let timeIn3 = document.querySelector('input#in3')
timeIn3.addEventListener('change', (e) => {
  timesheet[2].timeIn = document.getElementById('in3').value;
  console.log(timesheet[2])
})

let timeOut3 = document.querySelector('input#out3')
timeOut3.addEventListener('change', (e) => {
  timesheet[2].timeOut = document.getElementById('out3').value;
  console.log(timesheet[2])
})

let total3 = document.querySelector('input#ttl3')
total3.addEventListener('change', (e) => {
  timesheet[2].total = document.getElementById('ttl3').value;
})

let date4 = document.querySelector('input#day4')
date4.addEventListener('change', (e) => {
  timesheet[3].date = document.getElementById('day4').value;
  console.log(timesheet[3])
})

let timeIn4 = document.querySelector('input#in4')
timeIn4.addEventListener('change', (e) => {
  timesheet[3].timeIn = document.getElementById('in4').value;
  console.log(timesheet[3])
})

let timeOut4 = document.querySelector('input#out4')
timeOut4.addEventListener('change', (e) => {
  timesheet[3].timeOut = document.getElementById('out4').value;
  console.log(timesheet[3])
})

let total4 = document.querySelector('input#ttl4')
total4.addEventListener('change', (e) => {
  timesheet[3].total = document.getElementById('ttl4').value;
})

let date5 = document.querySelector('input#day5')
date5.addEventListener('change', (e) => {
  timesheet[4].date = document.getElementById('day5').value;
  console.log(timesheet[4])
})

let timeIn5 = document.querySelector('input#in5')
timeIn5.addEventListener('change', (e) => {
  timesheet[4].timeIn = document.getElementById('in5').value;
  console.log(timesheet[4])
})

let timeOut5 = document.querySelector('input#out5')
timeOut5.addEventListener('change', (e) => {
  timesheet[4].timeOut = document.getElementById('out5').value;
  console.log(timesheet[4])
})

let total5 = document.querySelector('input#ttl5')
total5.addEventListener('change', (e) => {
  timesheet[4].total = document.getElementById('ttl5').value;
})

let date6 = document.querySelector('input#day6')
date6.addEventListener('change', (e) => {
  timesheet[5].date = document.getElementById('day6').value;
  console.log(timesheet[5])
})

let timeIn6 = document.querySelector('input#in6')
timeIn6.addEventListener('change', (e) => {
  timesheet[5].timeIn = document.getElementById('in6').value;
  console.log(timesheet[5])
})

let timeOut6 = document.querySelector('input#out6')
timeOut6.addEventListener('change', (e) => {
  timesheet[5].timeOut = document.getElementById('out6').value;
  console.log(timesheet[5])
})

let total6 = document.querySelector('input#ttl6')
total6.addEventListener('change', (e) => {
  timesheet[5].total = document.getElementById('ttl6').value;
})

let PD1 = document.querySelector('input#PD1')
PD1.addEventListener('change', (e) => {
  timesheet[0].PD = document.getElementById('PD1').checked
})

let FT1 = document.querySelector('input#FT1')
FT1.addEventListener('change', (e) => {
  timesheet[0].FT = document.getElementById('FT1').checked
})

let supervision1 = document.querySelector('input#supervision1')
supervision1.addEventListener('change', (e) => {
  timesheet[0].supervision = document.getElementById('supervision1').checked
})

let PD2 = document.querySelector('input#PD2')
PD2.addEventListener('change', (e) => {
  timesheet[1].PD = document.getElementById('PD2').checked
})

let FT2 = document.querySelector('input#FT2')
FT2.addEventListener('change', (e) => {
  timesheet[1].FT = document.getElementById('FT2').checked
})

let supervision2 = document.querySelector('input#supervision2')
supervision2.addEventListener('change', (e) => {
  timesheet[1].supervision = document.getElementById('supervision2').checked
})

let PD3 = document.querySelector('input#PD3')
PD3.addEventListener('change', (e) => {
  timesheet[2].PD = document.getElementById('PD3').checked
})

let FT3 = document.querySelector('input#FT3')
FT3.addEventListener('change', (e) => {
  timesheet[2].FT = document.getElementById('FT3').checked
})

let supervision3 = document.querySelector('input#supervision3')
supervision3.addEventListener('change', (e) => {
  timesheet[2].supervision = document.getElementById('supervision3').checked
})

let PD4 = document.querySelector('input#PD4')
PD4.addEventListener('change', (e) => {
  timesheet[3].PD = document.getElementById('PD4').checked
})

let FT5 = document.querySelector('input#FT5')
FT5.addEventListener('change', (e) => {
  timesheet[4].FT = document.getElementById('FT5').checked
})

let supervision5 = document.querySelector('input#supervision5')
supervision5.addEventListener('change', (e) => {
  timesheet[4].supervision = document.getElementById('supervision5').checked
})

let PD6 = document.querySelector('input#PD6')
PD6.addEventListener('change', (e) => {
  timesheet[5].PD = document.getElementById('PD6').checked
})

let FT6 = document.querySelector('input#FT6')
FT6.addEventListener('change', (e) => {
  timesheet[5].FT = document.getElementById('FT6').checked
})

let supervision6 = document.querySelector('input#supervision6')
supervision6.addEventListener('change', (e) => {
  timesheet[5].supervision = document.getElementById('supervision6').checked
})

let calc = document.getElementById('calculateTtlHrs')
calc.addEventListener('click', (e) => {
  console.log('click')
  hours = calculateHours()
  document.getElementById('totalHours').innerHTML = `${hours} Hours`
  newForm.totalHours = hours
})

function calculateHours() {
	console.log(timesheet)
  let hours = 0
  for (let i = 0; i < 6; i++) {
    if (!timesheet[i].total) {
      return hours
    }
    let time = parseFloat(timesheet[i].total)
    console.log(hours, time)
    hours = hours + time
  }
  return hours
 }

let printForm = document.getElementById('printToPDF')
printForm.style.display = 'none'

document.getElementById('submit').addEventListener("click", async (event) => {
  submitForm(newForm, formName)
})

async function submitForm(data, form) {
  const document = {
    'form': form,
    'data': data
  }
  console.log(document)
  fetch('https://pffm.azurewebsites.net/form', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(document)
  })
    .then(response => response.json())
    .then(data => respond(data)) 
    .catch((err) => showError(err))
}

function respond(data) {
  let id = data.key
  if (id) {
    showSuccess(id)
    let name = newForm.clientName	  
    sendNotification(id, name, 'family', 'not urgent')	  
    sendNotification(id, newForm.staffName, 'family', 'not urgent')
    sendNotification(id, 'admin', 'family', 'not urgent')
  } else {
    showError(data.error)
  }
}

function showSuccess(id) {
  document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
  printForm.style.display = 'inline';
  printForm.addEventListener('click', (e) => {
  location.href = `phoenix-freedom-foundation-backend.webflow.io/completed-forms/family-training-timesheet?id=${id}`
  })
}


function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}

async function sendNotification(id, recipient, type, priority) {
  let message = `You have a new <br/><a href=phoenix-freedom-foundation-backend.webflow.io/completed-forms/family-training-timesheet?id=${id}>IISS Session Note</a>`
  console.log(message)
  const url = 'https://pffm.azurewebsites.net/notices'
  let notification = {
    'name': recipient,
    'notice': message,
    'type': type,
    'priority': priority
  }
  const header = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
  }
  
  fetch(url, {
    method: "POST",
    headers: header,
    body: JSON.stringify(notification)
  })
    .then(() => console.log('notice sent'))
    .catch(console.error)
}
