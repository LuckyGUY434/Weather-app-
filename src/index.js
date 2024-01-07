import { asynchData } from "./asyncData"
import "./style.css"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('location-form')
    asynchData()

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const inputData = document.getElementById('location-data').value
        asynchData(inputData)
    })
})