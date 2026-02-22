let Interview = [];
let Rejected = [];


let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount')


let jobCard = document.getElementById('job-cards');
let jobNumberElement = document.getElementById('job-number');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


function calculateCount(){
    jobNumberElement.innerText = jobCard.childElementCount;
    totalCount.innerText = jobCard.childElementCount; 
    interviewCount.innerText = Interview.length;
    rejectedCount.innerText = Rejected.length;
}   

calculateCount();


function toggleBtn(id){

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allFilterBtn.classList.add('bg-white', 'text-[#64748B]', 'border-gray-200');
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]', 'border-gray-200');
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]', 'border-gray-200');

    const selected = document.getElementById(id);
    selected.classList.add('bg-[#3B82F6]', 'text-white');
    selected.classList.remove('bg-white', 'text-[#64748B]', 'border-gray-200')
    
    
}


toggleBtn()