const nextButtons = document.querySelectorAll(".next-button");
const previousButtons = document.querySelectorAll(".previous-button");
const containers = document.querySelectorAll(".container");

nextButtons[0].addEventListener('click', ()=>
    {
        containers[0].classList.add('hidden');
        containers[1].classList.add('show');
        containers[1].classList.remove('hidden');
    })

nextButtons[1].addEventListener('click', ()=>
{
    containers[1].classList.remove('show');
    containers[1].classList.add('hidden');
    containers[3].classList.add('show');
    containers[3].classList.remove('hidden');
})

export function validation()
{
            containers[3].classList.remove('show');
            containers[3].classList.add('hidden');
            containers[4].classList.add('show');
            containers[4].classList.remove('hidden');
}


previousButtons[0].addEventListener('click', ()=>
    {
        containers[1].classList.remove('show');
        containers[1].classList.add('hidden');
        containers[0].classList.add('show');
        containers[0].classList.remove('hidden');
    })

previousButtons[1].addEventListener('click', ()=>
{
    containers[3].classList.remove('show');
    containers[3].classList.add('hidden');
    containers[1].classList.add('show');
    containers[1].classList.remove('hidden');
})

previousButtons[2].addEventListener('click', ()=>
{
    containers[4].classList.remove('show');
    containers[4].classList.add('hidden');
    containers[3].classList.add('show');
    containers[3].classList.remove('hidden');
})