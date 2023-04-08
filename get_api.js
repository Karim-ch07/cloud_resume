const countUrl = 'https://wwatps6x63.execute-api.us-east-1.amazonaws.com/prod'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://karim-chihani.s3-website-us-east-1.amazonaws.com'
                }
    }

    )
        .then(res => res.json())
        .then(res => {
        console.log(res)
        countElement.innerHTML = res.body;
    });
}


