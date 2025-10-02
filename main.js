async function getUserLocation() {
    const url = "https://ipinfo.io/json";
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        const userLocationText = document.getElementById("visitor");
        userLocationText.textContent = "Latest visitor from: " + result.city + ", " + result.region;
    }
    catch (error) {
        console.log(error);
    }
}

getUserLocation();