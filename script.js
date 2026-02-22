let Interview = [];
let Rejected = [];
let currentStatus = 'All';

let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount')


let mainContainer = document.querySelector('main');
let filteredSection = document.getElementById('filtered-section')
let jobCard = document.getElementById('job-cards');
let jobNumberElement = document.getElementById('job-number');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const deleteElement = document.querySelectorAll('.delete');

// for(let del of deleteElement){
//     del.addEventListener('click', function(event){
//         let parentElementOfDelete = event.target.parentNode.parentNode.parentNode.parentNode;
//         parentElementOfDelete.remove();
//         calculateCount();
//     })

    
// }


function calculateCount(){
    jobNumberElement.innerText = jobCard.childElementCount;
    totalCount.innerText = jobCard.childElementCount; 
    interviewCount.innerText = Interview.length;
    rejectedCount.innerText = Rejected.length;
}   

calculateCount();


function toggleBtn(id){

    currentStatus = id;

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allFilterBtn.classList.add('bg-white', 'text-[#64748B]', 'border-gray-200');
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]', 'border-gray-200');
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]', 'border-gray-200');

    const selected = document.getElementById(id);

    if (selected) {
        selected.classList.add('bg-[#3B82F6]', 'text-white');
        selected.classList.remove('bg-white', 'text-[#64748B]', 'border-gray-200');
    } else {
        console.error(`Element with ID '${id}' not found.`);
    }
    
    if(id == 'all-filter-btn'){
        jobCard.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    }
    else if(id == 'interview-filter-btn'){
        jobCard.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderInterview();
    }
    else if (id == 'rejected-filter-btn') {
        jobCard.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }
    
}

toggleBtn('all-filter-btn');

mainContainer.addEventListener('click', function(event){

    if(event.target.classList.contains('interview-btn')){
        const parrentNode = event.target.parentNode.parentNode;


    const companyName = parrentNode.querySelector('.company-name').innerText;
    const workRole = parrentNode.querySelector('.work-role').innerText;
    const deletebtn = parrentNode.querySelector('.delete').innerText;
    const workInfo = parrentNode.querySelector('.work-info').innerText;
    const statusInfo = parrentNode.querySelector('.status').innerText = 'Interview';
    const responsibility = parrentNode.querySelector('.responsibility').innerText;

    const obj1 = {
        companyName,
        workRole,
        deletebtn,
        workInfo,
        statusInfo : 'Interview',
        responsibility
    }

    const jobFilter1 = Interview.find(item => item.companyName === obj1.companyName)

    if(!jobFilter1){
        Interview.push(obj1);
    }

     Rejected = Rejected.filter(item => item.companyName != obj1.companyName)

        if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }

        calculateCount();

    }

    else if(event.target.classList.contains('rejected-btn')){
        const parrentNode = event.target.parentNode.parentNode;


    const companyName = parrentNode.querySelector('.company-name').innerText;
    const workRole = parrentNode.querySelector('.work-role').innerText;
    const deletebtn = parrentNode.querySelector('.delete').innerText;
    const workInfo = parrentNode.querySelector('.work-info').innerText;
    const statusInfo = parrentNode.querySelector('.status').innerText = 'Rejected';
    const responsibility = parrentNode.querySelector('.responsibility').innerText;

    const obj2 = {
        companyName,
        workRole,
        deletebtn,
        workInfo,
        statusInfo : 'Rejected',
        responsibility
    }

    const jobFilter2 = Rejected.find(item => item.companyName === obj2.companyName)

    if(!jobFilter2){
        Rejected.push(obj2);
    }

        Interview = Interview.filter(item => item.companyName != obj2.companyName)

        if(currentStatus == 'interview-filter-btn'){
            renderInterview();
        }
    
    calculateCount();    
    }

    else if(event.target.closest('.delete')){
    const card = event.target.closest('.card');
    const companyName = card.querySelector('.company-name').innerText;

   
    card.remove();

    Interview = Interview.filter(item => item.companyName !== companyName);
    Rejected = Rejected.filter(item => item.companyName !== companyName);

    calculateCount();
}
})

function renderInterview(){
    filteredSection.innerHTML = '';

    for(let i of Interview){

        let div = document.createElement('div');
        div.className = 'card bg-white rounded-lg p-7 mb-[20px] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105'
        div.innerHTML = `<!-- first card [first div] -->
                <div class="flex justify-between">
                    <div class="space-y-1">
                        <h3 class="company-name font-semibold text-[1.5rem]">${i.companyName}</h3>
                        <p class="work-role text-gray-500">${i.workRole}</p>
                    </div>

                    <div>
                        <span class="delete cursor-pointer border border-gray-500 p-2 rounded-full"><i
                                class="fa-regular fa-trash-can"></i></span>
                    </div>
                </div>
                <!-- first card [second div] -->
                <div class="text pt-5">
                    <p class="work-info text-gray-500">${i.workInfo}</p>
                </div>

                <!-- first card [third div] -->
                <div class="pt-5 space-y-3 sm:space-y-2">
                    <button class="status bg-[#EEF4FF] text-[#002C5C] font-medium py-4 px-3 rounded-lg">${i.statusInfo}</button>
                    <p class="responsibility text-gray-600">${i.responsibility}</p>
                </div>

                <!-- first card [fourth div] -->
                <div class="pt-5 flex gap-2">
                    <button class="interview-btn py-2 px-3 border-2 border-[#10B981] text-[#10B981] rounded-lg cursor-pointer transition-all duration-300 ease-in-out 
                hover:shadow-2xl hover:-translate-y-1 hover:scale-105">Interview</button>
                    <button class="rejected-btn py-2 px-3 border-2 border-[#EF4444] text-[#EF4444] rounded-lg cursor-pointer        transition-all duration-300 ease-in-out 
                hover:shadow-2xl hover:-translate-y-1 hover:scale-105">Rejected</button>
                </div>
`
        filteredSection.appendChild(div)
    }

    
}



function renderRejected(){
    filteredSection.innerHTML = '';

    for(let i of Rejected){

        let div = document.createElement('div');
        div.className = 'card bg-white rounded-lg p-7 mb-[20px] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105'
        div.innerHTML = `<!-- first card [first div] -->
                <div class="flex justify-between">
                    <div class="space-y-1">
                        <h3 class="company-name font-semibold text-[1.5rem]">${i.companyName}</h3>
                        <p class="work-role text-gray-500">${i.workRole}</p>
                    </div>

                    <div>
                        <span class="delete cursor-pointer border border-gray-500 p-2 rounded-full"><i
                                class="fa-regular fa-trash-can"></i></span>
                    </div>
                </div>
                <!-- first card [second div] -->
                <div class="text pt-5">
                    <p class="work-info text-gray-500">${i.workInfo}</p>
                </div>

                <!-- first card [third div] -->
                <div class="pt-5 space-y-3 sm:space-y-2">
                    <button class="status bg-[#EEF4FF] text-[#002C5C] font-medium py-4 px-3 rounded-lg">${i.statusInfo}</button>
                    <p class="responsibility text-gray-600">${i.responsibility}</p>
                </div>

                <!-- first card [fourth div] -->
                <div class="pt-5 flex gap-2">
                    <button class="interview-btn py-2 px-3 border-2 border-[#10B981] text-[#10B981] rounded-lg cursor-pointer transition-all duration-300 ease-in-out 
                hover:shadow-2xl hover:-translate-y-1 hover:scale-105">Interview</button>
                    <button class="rejected-btn py-2 px-3 border-2 border-[#EF4444] text-[#EF4444] rounded-lg cursor-pointer        transition-all duration-300 ease-in-out 
                hover:shadow-2xl hover:-translate-y-1 hover:scale-105">Rejected</button>
                </div>
`
        filteredSection.appendChild(div)
    }

    
}

