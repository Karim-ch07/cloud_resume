const countUrl = 'https://dm7lnllf0i.execute-api.us-east-1.amazonaws.com/prod/visitorcounter'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.visits;
    });
}


