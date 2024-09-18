function tempChange(sliderValue){
    document.getElementById("temp-display").innerText = "Temperature: " + sliderValue + "\u00b0F";
}

function widthDown() {
    var width = document.getElementById("width-value");
    if(width.innerText > 1)
        width.innerText--;
}

function widthUp() {
    var width = document.getElementById("width-value");
    if(width.innerText < 5)
        width.innerText++;
}
function heightDown() {
    var height = document.getElementById("height-value");
    if(height.innerText > 1)
        height.innerText--;
}

function heightUp() {
    var height = document.getElementById("height-value");
    if(height.innerText < 5)
        height.innerText++;
}

function changeAction(text) {
    document.getElementById("action").innerText = text;
}

function bidet() {
    var temp = document.getElementById("slider").value;
    var bidetMode = document.getElementById("front").checked ? "Front" : "Rear";
    document.getElementById("action").innerText = "Bidet | " + temp + "\u00b0F | " + bidetMode;
}

function sliderChanged(sliderName, sliderId) {
    if(document.getElementById(sliderId).checked == true)
        document.getElementById("action").innerText = sliderName + " Activated";
    else
        document.getElementById("action").innerText = sliderName + " Deactivated";
}

function toggleUsers(isOpen) {
    document.getElementById("user-menu").style.display = isOpen ? "none" : "grid";
}

function closePhonePage(){
    document.getElementById("health-page").style.display = "none";
    document.getElementById("phone-health-button").style.color = "#21897E";
    document.getElementById("water-page").style.display = "none";
    document.getElementById("phone-water-button").style.color = "#21897E";
    document.getElementById("rgb-page").style.display = "none";
    document.getElementById("phone-rgb-button").style.color = "#21897E";
    document.getElementById("defaults-page").style.display = "none";
    document.getElementById("phone-defaults-button").style.color = "#21897E";
}

function openHealth(){
    closePhonePage();
    document.getElementById("health-page").style.display = "grid";
    document.getElementById("phone-health-button").style.color = "#14524C";
}
function openWater(){
    closePhonePage();
    document.getElementById("water-page").style.display = "grid";
    document.getElementById("phone-water-button").style.color = "#14524C";
}
function openRGB(){
    closePhonePage();
    document.getElementById("rgb-page").style.display = "grid";
    document.getElementById("phone-rgb-button").style.color = "#14524C";
}
function openDefaults(){
    closePhonePage();
    document.getElementById("defaults-page").style.display = "grid";
    document.getElementById("phone-defaults-button").style.color = "#14524C";
}

function applyLED(){
    var red = document.getElementById("red-rgb").value;
    var green = document.getElementById("green-rgb").value;
    var blue = document.getElementById("blue-rgb").value;

    red = (red < 16) ? red = "0" + (+red).toString(16) : (+red).toString(16);
    green = (green < 16) ? "0" + (+green).toString(16) : (+green).toString(16);
    blue = (blue < 16) ? "0" + (+blue).toString(16) : (+blue).toString(16);

    document.getElementById("toilet-bowl").style.boxShadow = "#"+ red + green + blue + " 2px 2px 2px 2px";
}

function ledOff() {
    document.getElementById("toilet-bowl").style.boxShadow = null;
}

function connect(isConnected) {
    document.getElementById('connect').style.display = isConnected ? "inline" : "none";
    document.getElementById('disconnect').style.display = isConnected ? "none" : "inline";
    document.getElementById('connected-to').innerText = isConnected ? "Connected to: " : "Connected to: Smith Toilet";
}
function disconnect() {
    document.getElementById
}

function selectUser(name) {
    var user;
    switch (name){
        case "John":
            user = john;
            break;
        case "Timo":
            user = timo;
            break;
        case "Gustavo":
            user = gustavo;
            break;
        case "Betsy":
            user = betsy;
            break;
        default:
            user = guest;
            break;
    }

    document.getElementById('user-label').innerText = "User: " + user.name;

    document.getElementById('health-name').innerText = "Name: " + user.name;
    document.getElementById('health-age').innerText = "Age: " + user.age;
    document.getElementById('health-hydration').innerText = "Hydraton Level: " + user.hydration;
    document.getElementById('bathroom-trips').innerText = "Bathroom Trips Today: " + user.bathroomTrips;
    document.getElementById('weekly-average').innerText = "This Week's Average: " + user.weeklyAvg;

    document.getElementById('seat-height-default').innerText = "Seat Height: " + user.seatHeight;
    document.getElementById('bowl-width-default').innerText = "Bowl Width: " + user.bowlWidth;
    document.getElementById('squat-stool-default').innerText = "Squat Stool: " + (user.stool ? "Enabled" : "Disabled");
    document.getElementById('safety-rails-default').innerText = "Safety Rails: " + (user.rails ? "Enabled" : "Disabled");
    document.getElementById('screen-reader-default').innerText = "Screen Reader: " + (user.reader ? "Enabled" : "Disabled");
    document.getElementById('led-color-default').innerText = "LED Color: " + (user.led != null ? user.led : "None");

    document.getElementById('height-value').innerText = user.seatHeight;
    document.getElementById('width-value').innerText = user.bowlWidth;
    document.getElementById('safety-rails').checked = user.rails;
    document.getElementById('squat-stool').checked = user.stool;
    document.getElementById('screen-reader').checked = us

}

function breakToilet() {
    document.getElementById('leak-warning').style.display = "inline"
}

function fixToilet() {
    document.getElementById('leak-warning').style.display = "none"
}


const john = {
    "name": "John Smith",
    "age": 34,
    "seatHeight": 3,
    "bowlWidth": 5,
    "led": "#DCD0FF",
    "stool": true,
    "rails": false,
    "reader": false,
    "hydration": "Overhydrated",
    "bathroomTrips" : 5,
    "weeklyAvg" : 3
}

const timo = {
    "name": "Timo Smith",
    "age": 4,
    "seatHeight": 1,
    "bowlWidth": 1,
    "led": "#FF0000",
    "stool": true,
    "rails": false,
    "reader": true,
    "hydration": "Normal",
    "bathroomTrips" : 1,
    "weeklyAvg" : 2
}

const gustavo = {
    "name": "Gustavo Smith",
    "age": 77,
    "seatHeight": 5,
    "bowlWidth": 2,
    "led": null,
    "stool": true,
    "rails": true,
    "reader": true,
    "hydration": "Dehydrated",
    "bathroomTrips" : 3,
    "weeklyAvg" : 4
}

const betsy = {
    "name": "Betsy Smith",
    "age": 40,
    "seatHeight": 2,
    "bowlWidth": 3,
    "led": null,
    "stool": false,
    "rails": false,
    "reader": false,
    "hydration": "Normal",
    "bathroomTrips" : 3,
    "weeklyAvg" : 3
}

const guest = {
    "name": "Guest",
    "age": "???",
    "seatHeight": 3,
    "bowlWidth": 3,
    "LED": null,
    "stool": false,
    "rails": false,
    "reader": false,
    "hydration": "Normal",
    "bathroomTrips" : "???",
    "weeklyAvg" : "???"
}