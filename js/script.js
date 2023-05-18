import {mockupDatabase} from './mockupDatabase.js';
import { validation } from './interpolation.js';
const mockup = mockupDatabase;
const searchButton = document.querySelector('#searchButton');
const runButton = document.querySelector('#runButton');
const petrolPrice = 6.8;
let chosenBrandId = 0;
let chosenModelId = 0;
let chosenCity = '';

function calculateDays() {
    var leaseDate = document.getElementById("leaseDate").value;
    var returnDate = document.getElementById("returnDate").value;    
    const dateOne = new Date(leaseDate);
    const dateTwo = new Date(returnDate);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    return days;
}


searchButton.addEventListener('click', ()=>
    {
        
        const inputModel = document.querySelector('#selectModel').value;
        const inputCity = document.querySelector('#selectCity').value;
        mockup.forEach(element => 
            {
                element.brand.model.forEach(e =>
                    {
                        const carFullName = element.brand.name + " " + e.name;
                        
                        if (carFullName === inputModel)
                            {
                                const displayInfo = document.querySelector('#displayInfo');
                                const availability = Object.getOwnPropertyDescriptor(e.availability, `${inputCity}`).value;
                                const category = e.category;
                                const combustion = e.combustion;
                                const pricePerDay = Object.getOwnPropertyDescriptor(e.pricePerDay, `${inputCity}`).value;
                                
                                const content = [carFullName,availability,category,combustion + "l/100km",pricePerDay + "zł"];
                                
                                for(let i = 0 ; i<content.length ; i++)
                                    {
                                        displayInfo.childNodes[(i*4)+3].innerHTML = content[i];
                                    }
                                const img = document.querySelector('#infoHeaderImage');
                                const h2 = document.querySelector('#infoHeaderContent');
                                img.src = `./img/${carFullName}.jpg`;
                                h2.innerHTML = carFullName;
                                img.setAttribute('height','150px');

                                chosenBrandId = element.id;
                                chosenModelId = e.id;
                                chosenCity = inputCity;
                            }
                    })
            })
    })

runButton.addEventListener('click', () =>
    {
        mockup.forEach(element => 
            {
            if (element.id === chosenBrandId)
                {
                    element.brand.model.forEach(e =>
                        {
                            if (e.id === chosenModelId)
                                {
                                    let carFullPrice = 1;
                                    const carFullName = element.brand.name + " " + e.name;
                                    const carClass = e.category;
                                    const availability = Object.getOwnPropertyDescriptor(e.availability, chosenCity).value
                                    const displaySummary = document.querySelector('#displaySummary');
                                    const sliderValue = document.querySelector('#slider').value;
                                    const fullPetrolPrice = ((e.combustion / 100) * sliderValue) * petrolPrice;
                                    const fullBasePrice = Object.getOwnPropertyDescriptor(e.pricePerDay, chosenCity).value * calculateDays();
                                    const yearOfGettingLicence = document.querySelector('#yearOfGettingLicence').value;
                                    const currentYear = new Date().getFullYear();
                                    
                                    carFullPrice = fullBasePrice + fullPetrolPrice;
                                    switch (carClass) 
                                        {
                                            case 'Basic':
                                                carFullPrice = carFullPrice;
                                            break;
                                            case 'Standard':
                                                carFullPrice = carFullPrice * 1.3;
                                            break;
                                            case 'Medium':
                                                carFullPrice = carFullPrice * 1.6;
                                            break;
                                            case 'Premium':
                                                carFullPrice = carFullPrice * 2;
                                            break;
                                        }

                                    if ((currentYear - yearOfGettingLicence) < 5) carFullPrice = carFullPrice * 1.20;
                                    if (availability < 3) carFullPrice = carFullPrice * 1.15; 
                                    if (document.body.childNodes[5].childNodes.length == 18) document.body.childNodes[5].removeChild(document.body.childNodes[5].lastChild);
                                    if ((currentYear - yearOfGettingLicence) < 3 && carClass === 'Premium') 
                                        {
                                            message.innerHTML = "Nie możesz wypożyczać samochodów klasy premium mając prawo jazdy mniej niż 3 lata.";
                                            return;
                                        }
                                        /*
                                    const content = [carFullName,chosenCity,fullBasePrice.toFixed(2) + "zł",fullPetrolPrice.toFixed(2) + "zł",carFullPrice.toFixed(2) + "zł",(carFullPrice * 1.23).toFixed(2) + "zł"]
                                    for(let i = 0 ; i<content.length ; i++)
                                    {
                                        displayInfo.childNodes[(i*4)+6].innerHTML = content[i];
                                    }
                                    */
                                    message.innerHTML = "";
                                    displaySummary.childNodes[6].innerHTML = carFullName;
                                    
                                    displaySummary.childNodes[10].innerHTML = chosenCity;
                                    displaySummary.childNodes[14].innerHTML = calculateDays();
                                    if(isNaN(calculateDays())) displaySummary.childNodes[14].innerHTML = "-";
                                    displaySummary.childNodes[18].innerHTML = fullBasePrice.toFixed(2) + "zł";
                                    if(isNaN(fullBasePrice)) displaySummary.childNodes[18].innerHTML = "-";
                                    displaySummary.childNodes[22].innerHTML = fullPetrolPrice.toFixed(2) + "zł";
                                    displaySummary.childNodes[26].innerHTML = carFullPrice.toFixed(2) + "zł";
                                    if(isNaN(carFullPrice)) displaySummary.childNodes[26].innerHTML = "-";
                                    displaySummary.childNodes[30].innerHTML = (carFullPrice * 1.23).toFixed(2) + "zł";
                                    if(isNaN(carFullPrice)) displaySummary.childNodes[30].innerHTML = "-";
                                    validation();
                                    
                                }
                        })
                }
            })
    })
