let totalElement = document.getElementById('total');
let jobCard = document.getElementById('job-cards').childElementCount;
let jobNumberElement = document.getElementById('job-number');

jobNumberElement.innerText = jobCard;
totalElement.innerText = jobCard;    