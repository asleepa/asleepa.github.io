const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const apiType = urlParams.get("api_type")
const accessKey = urlParams.get("access_key")

if (typeof(apiType) == "string" && apiType == "arcanium_key") {
    if (typeof(accessKey) == "string" && accessKey == process.env.API_ACCESS_KEY) {
        const element = document.getElementById("api")
        element.innerHTML = process.env.ARCANIUM_KEY
    }
}