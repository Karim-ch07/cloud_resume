const countUrl = 'https://wwatps6x63.execute-api.us-east-1.amazonaws.com/prod'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        console.log(res)
        countElement.innerHTML = res.prevViewCount;
    });
}


