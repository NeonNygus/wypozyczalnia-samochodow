import {mockupDatabase} from './mockupDatabase.js';
const mockup = mockupDatabase;
const leaseDate = document.querySelector('#leaseDate');
const returnDate = document.querySelector('#returnDate');
const yearOfGettingLicence = document.querySelector('#yearOfGettingLicence');
const selectModel = document.querySelector('#selectModel');
const selectCity = document.querySelector('#selectCity');
const sliderImages = document.querySelectorAll('.sliderImage');
const slideGallery = document.querySelector('#slideGallery');

function listOptions(){
    
    mockup.forEach(element => {
        element.brand.model.forEach(e =>
            {
                const node = document.createTextNode(element.brand.name + " " + e.name)
                const option = document.createElement("option");
                option.appendChild(node);
                selectModel.appendChild(option);
                option.setAttribute('value', element.brand.name + " " + e.name)
            })
    })

    for (let i=0; i < Object.keys(mockup[0].brand.model[0].availability).length ; i++)
        {
            const node = document.createTextNode(Object.keys(mockup[0].brand.model[0].availability)[i])
            const option = document.createElement("option");
            option.appendChild(node);
            selectCity.appendChild(option);
            option.setAttribute('value', Object.keys(mockup[0].brand.model[0].availability)[i])
        }
}
listOptions();


function setDates()
{
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10)
    {
        dd = '0' + dd;
    }
    
    if (mm < 10)
    {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    leaseDate.setAttribute("min", today);
    returnDate.setAttribute("min", today);
    yearOfGettingLicence.setAttribute("max", yyyy);
}
setDates();

sliderImages.forEach(e => {
   
    e.addEventListener('click', ()=>
    {
        sliderImages.forEach(e =>
            {
                if (e.classList.contains('selectedImage'))
                        {
                            e.classList.remove('selectedImage')
                        }
            })
        
        const value = e.getAttribute('value');
        selectModel.value = value;
        e.classList.add('selectedImage');
    })
})
   

document.body.addEventListener("click", (e) => {
    if (!slideGallery.contains(e.target)) {
       sliderImages.forEach(e => {
            if (e.classList.contains('selectedImage'))
                {
                    e.classList.remove('selectedImage')
                }
            })
    }
    

})
