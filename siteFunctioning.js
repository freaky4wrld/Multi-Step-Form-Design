const selectedPageBtn = document.querySelectorAll('.circle-btn');
const personalInfoForm = document.getElementById('personal-info-form')
const allInputFields = Array.from(personalInfoForm.elements).slice(1,Array.from(personalInfoForm.elements).length-1);
const emailSection = allInputFields[1];

// Providing the sidebar button a selected feature
selectedPageBtn.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        removeSelectedBtn(selectedPageBtn);
        e.target.classList.add('selected-btn');
    })
})
// to remove the selected class of all buttons
function removeSelectedBtn(array){
    for (let index = 0; index < array.length; index++) {
        array[index].classList.remove('selected-btn');
    }
}

