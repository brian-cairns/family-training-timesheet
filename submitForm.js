//Create Functional Unit Class and Event Arrays

let dates = [];
let timeIns = [];
let timeOuts = [];
let ams = [];
let pms = [];
let PDs = [];
let FTs = [];
let supers = [];
let timeRegEx = new RegExp('(1[0-2]|0?[1-9]):([0-5]?[0-9])/g') 
class TimeEntry {
    constructor(date, timeIn, timeOut, am, pm, total, activity) {
      this.date = date;
      this.timeIn = timeIn;
      this.timeOut = timeOut;
      this.am = am
      this.pm = pm
      this.activity = activity
      this.total = total
  }
 
}

let submit = document.getElementById('submit')
console.log(submit)
const formName = 'familyTrainingTimesheet'
console.log('form: ' + formName)
let newForm = {}
let timeSheet = createTimeSheet()

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

function createTimeSheet() {
	let sheet = []
  for (let i = 0; i < 14; i++) {
    let entry = new TimeEntry()
    sheet.push(entry)
  }
  return sheet
}

//Create Event Handlers
for (let i = 0; i < 14; i++) {
	console.log(i)
  dates[i] = document.getElementById(`date${i + 1}`)
  dates[i].addEventListener('change', (e) => {
    timeSheet[i].date = e.target.value
  })
  timeIns[i] = document.querySelector(`input#timeIn${i + 1}`)
  timeIns[i].addEventListener('change', (e) => {
    let time = e.target.value
    if (time.test(timeRegEx)) {
      timeIns[i].style.color = 'black'
      timeSheet[i].timeIn = e.target.value
      timeSheet[i].total = calculateEntryHrs(timeSheet[i].timeIn, timeSheet[i].timeOut, timeSheet[i].am, timeSheet[i].pm)
      document.getElementById(`total${i+1}`).innerHTML = timeSheet[i].total
    }
    else {
      timeIns.style.color = 'red'
      return
    }
    
  })
  ams[i] = document.getElementById(`AM${i + 1}`)
  ams[i].addEventListener('change', (e) => {
    timeSheet[i].am = e.target.value
    timeSheet[i].total = calculateEntryHrs(timeSheet[i].timeIn, timeSheet[i].timeOut, timeSheet[i].am, timeSheet[i].pm)
    document.getElementById(`total${i+1}`).innerHTML = timeSheet[i].total
  })
  pms[i] = document.getElementById(`PM${i + 1}`)
  pms[i].addEventListener('change', (e) => {
    timeSheet[i].pm = e.target.value
    timeSheet[i].total = calculateEntryHrs(timeSheet[i].timeIn, timeSheet[i].timeOut, timeSheet[i].am, timeSheet[i].pm)
    document.getElementById(`total${i+1}`).innerHTML = timeSheet[i].total
  })

  timeOuts[i] = document.querySelector(`input#timeOut${i + 1}`)
  timeOuts[i].addEventListener('change', (e) => {
    let time = e.target.value
    if (time.test(timeRegEx)) {
      timeOuts[i].style.color = 'black'
      timeSheet[i].timeOut = e.target.value
      timeSheet[i].total = calculateEntryHrs(timeSheet[i].timeIn, timeSheet[i].timeOut, timeSheet[i].am, timeSheet[i].pm)
      document.getElementById(`total${i+1}`).innerHTML = timeSheet[i].total
    }
    else {
      timeOuts[i].style.color = 'red'
      return
    }
  })

  PDs[i] = document.getElementById(`PD${i + 1}`)
  PDs[i].addEventListener('change', (e) => {
    timeSheet[i].activity == 'PD' ? timeSheet[i].activity = '' : timeSheet[i].activity = 'PD'
  })

  FTs[i] = document.getElementById(`FT${i + 1}`)
  FTs[i].addEventListener('change', (e) => {
    timeSheet[i].activity == 'FT' ? timeSheet[i].activity = '' : timeSheet[i].activity = 'FT'
  })

  supers[i] = document.getElementById(`super${i + 1}`)
  supers[i].addEventListener('change', (e) => {
    timeSheet[i].activity == 'supervision' ? timeSheet[i].activity = '' : timeSheet[i].activity = 'supervision'
  })

}

let calc = document.getElementById('calculate')
calc.addEventListener('click', () => {
  console.log('click')
  hours = calculateHours()
  document.getElementById('finalTotal').innerHTML = `${hours} Hours`
  newForm.timeSheet
  newForm.totalHours = hours
})

function calculateEntryHrs(timeIn, timeOut, am, pm) {
  if(timeRegEx.test(timeIn) && timeRegEx.test(timeOut)) { 
  let start = timeIn.parse(':');
  let end = timeOut.parse(':');
  let startHrs = parseInt(start[0])
  let startMin = parseInt(start[1]);
  let endHrs = parseInt(end[0])
  let endMin = parseInt(end[1])
  if (am == pm || endHrs == 12) {
      let ttlHrs = endHrs - startHrs
      let ttlMin = endMin - startMin
      ttlHrs += ttlMin
      ttlHrs = Math.floor((ttlHrs * 100 + .5))
      return ttlHrs/100
    }
    let ttlHrs = 12*endHrs - startHrs
    let ttlMin = endMin - startMin
    ttlHrs += ttlMin
    ttlHrs = Math.floor((ttlHrs * 100 + .5))
    return ttlHrs/100
} else {return 0}
} 


function calculateHours() {
	let hours = 0
  for (let i = 0; i < 14; i++) {
    if (!timeSheet[i].date) {
      return hours
    }
    hours += timeSheet[i].total
    console.log(hours)
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

