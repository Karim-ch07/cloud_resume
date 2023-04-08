const countUrl = 'https://u38uaetxc0.execute-api.us-east-1.amazonaws.com/prod/visitorcounter'
const countElement = document.getElementById('count');
const counter = 0
updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.prevViewCount;
    });
}


