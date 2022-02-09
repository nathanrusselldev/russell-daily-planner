var currentDateTime = moment().format('hh:mm:ss a');
var displayTime = document.getElementById("currentDay")
var eventDescription = document.getElementById("eventDescr")
var scheduleHour = document.querySelector(".singleHour").textContent
var saveButtonArray = document.querySelectorAll(".saveBtn")
var textAreaArray = document.querySelectorAll(".description")
var hourArray = [9,10,11,12,13,14,15,16,17]
var currentHour = moment().format('H')

function renderCurrentTime() {
    displayTime.textContent = currentDateTime
    console.log (scheduleHour)
    
}
renderCurrentTime()


for (i = 0; i < textAreaArray.length; i++) {
    
    var thisHour = hourArray[i]
    console.log(currentHour + " vs " + thisHour)

    
    if (currentHour > thisHour) {
        textAreaArray[i].classList.add("past")
    }
    else if (thisHour > currentHour) {
        textAreaArray[i].classList.add("future")
    }
    else {
        textAreaArray[i].classList.add("present")
    }
    // Targets the save button and takes the text in the previous element - saving it in local storage.
    saveButtonArray[i].addEventListener('click', function(event) {
        // alert("you clicked it")
        console.log(event.target.id)
        console.log(event.target.previousElementSibling.value)
        var text = event.target.previousElementSibling.value
        localStorage.setItem(event.target.id , text)
        
    
    })

    //Load the values saved in localstorage and apply to their corresponding text area.

    var savedText = localStorage.getItem(hourArray[i])
    console.log(savedText)
    textAreaArray[i].value=savedText
}

