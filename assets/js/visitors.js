async function getVisitors() {
    const visitors = document.getElementById('visitors');   // To get visitors element

    let response = await fetch("https://aofmbtyxiw2nzuazg3dudlk2sq0gmuyv.lambda-url.ap-south-1.on.aws/"); // To call the API
    let data = await response.json();   // To convert the response into JSON format
    
    visitors.textContent = `👀 Views: ${data}`; // To update the visitors element    
}
getVisitors();
