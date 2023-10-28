async function getVisitors() {
    const visitors = document.getElementById('visitors');   // To get visitors element

    let response = await fetch("https://wwjcx7tyxrbjmbkf3vc3teo3mu0qrvhq.lambda-url.ca-central-1.on.aws/"); // To call the API
    let data = await response.json();   // To convert the response into JSON format
    
    visitors.textContent = `👀 Views: ${data}`; // To update the visitors element    
}
getVisitors();
