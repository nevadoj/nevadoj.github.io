async function getUserLocation() {
    const url = "http://ip-api.com/json";
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        const userLocationText = document.getElementById("visitor");
        userLocationText.textContent = "Last visitor from: " + result.city + ", " + result.country;
    }
    catch (error) {
        console.log(error);
    }
}

getUserLocation();