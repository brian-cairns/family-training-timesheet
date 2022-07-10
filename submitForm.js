let submit = document.getElementById('submit')
console.log(submit)
const formName = 'consultationFeeSummary'
console.log('form: ' + formName)
let newForm = {}

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

class TimeEntry {
    constructor(date, timeIn, timeOut, total, service) {
        this.date = date;
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.total = total;
        this.service = service
    }
}

async function getTimesheet() {
    let timeSheet = []
    for (let i = 1; i < 7; i++) {
        if (document.getElementById(`date${i}`).value = '') {
            i = 7;
            return timeSheet
        } else {
            let item = new TimeEntry
            item.date = document.getElementById(`date${i}`)
            item.timeIn = document.getElementById(`timeIn${i}`)
            item.timeOut = document.getElementById(`timeOut${i}`)
            item.total = document.getElementById(`total${i}`)
            if (document.getElementById(`PD${i}`).isChecked) { item.service = 'PD' }
            if (document.getElementById(`$FT${i}`).isChecked) { item.service = 'FT' } else { item.service = 'Supervision' }
            timeSheet.push(item)
        }
    } 
}

function calculateTotalHours(timesheet) {
    let hours = 0
    timesheet.forEach((entry) => {
        hours = hours + entry.total
    })
    return hours
}

document.getElementById('submit').addEventListener("click", async (event) => {
    const timesheet = await getTimesheet();
    newForm.timesheet = timesheet
    setTimeout(() => {
        document.getElementById('totalHours').innerHTML = calculateTotalHours(timesheet)
    }, 2000)
  submitForm(newForm, 'consultationFeeSummary')
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
    .then((response) => {
      if (response.status == 200) {
      showSuccess()
      } else {
        showError(response.body)
      }
    })
    .catch((err) => showError(err))
}


function showSuccess() {
    document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}