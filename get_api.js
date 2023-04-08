const countUrl = 'https://wwatps6x63.execute-api.us-east-1.amazonaws.com/prod'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl,
    {
        //method: 'GET',
        headers: {

            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET"
                }
    }

    )
        .then(res => res.json())
        .then(res => {
        console.log(res)
        countElement.innerHTML = res.body;
    });
}


