<script lang="ts">
    import { Users } from "../lib/enum.js";
    import { connected } from "../lib/stores.js";

    function toggleConnection() {
        connected.update((n) => (n = !n));
    }

    let isConnected: boolean;

    connected.subscribe((c) => {
        isConnected = c;
    });

    let activePage = "None";

    export let activeUser = Users.GUEST;

    let LEDcolor = "#00FFFFFF";
</script>

<div class="phone">
    <div class="microphone"></div>
    <div class="camera"></div>
    <div class="screen"></div>
    {#if activePage == "health"}
        <div class="phone-page health-page" id="health-page">
            <h2 class="health-header">Health</h2>
            <div class="health-box-one phone-box">
                <h4 id="health-name">
                    Name: {activeUser.firstName}
                    {activeUser.lastName}
                </h4>
                <h4 id="health-age">Age: {activeUser.age}</h4>
                <h4 id="health-hydration">
                    Hydraton Level: {activeUser.hydration}
                </h4>
            </div>
            <div class="health-box-two phone-box">
                <h3 class="bathroom-trips" id="bathroom-trips">
                    Bathroom Trips Today: {activeUser.bathroomTrips}
                </h3>
                <h4 class="bathroom-trips" id="weekly-average">
                    This Week's Average: {activeUser.weeklyAvg}
                </h4>
            </div>
        </div>
    {:else if activePage == "water"}
        <div class="phone-page water-page" id="water-page">
            <h2 class="water-header">Water Usage</h2>
            <div class="water-box phone-box">
                <h3>Water Used This Week:</h3>
                <h2>32 Gallons</h2>
                <h3>Change from Last Week:</h3>
                <h2>4 Fewer Gallons</h2>
            </div>
        </div>
    {:else if activePage == "rgb"}
        <div class="phone-page rgb-page" id="rgb-page">
            <h2 class="rgb-header">LED Color</h2>
            <div class="rgb-box phone-box">
                <input
                    type="number"
                    class="rgb-input"
                    id="red-rgb"
                    min="0"
                    max="255"
                />
                <label for="red-rgb" id="red-rgb-label">Red (0-255)</label>
                <input
                    type="number"
                    class="rgb-input"
                    id="green-rgb"
                    min="0"
                    max="255"
                />
                <label for="green-rgb" id="green-rgb-label">Green (0-255)</label
                >
                <input
                    type="number"
                    class="rgb-input"
                    id="blue-rgb"
                    min="0"
                    max="255"
                />
                <label for="blue-rgb" id="blue-rgb-label">Blue (0-255)</label>
                <!-- <button class="save-rgb rgb-button" on:click={applyLED}>Apply</button>
				<button class="no-rgb rgb-button" on:click={ledOff}>Clear</button> -->
            </div>
        </div>
    {:else if activePage == "defaults"}
        <div class="phone-page defaults-page" id="defaults-page">
            <h2 class="defaults-header">Set Defaults</h2>
            <div class="defaults-box phone-box">
                <h4 id="seat-height-default" class="default-text">
                    Seat Height: 3
                </h4>
                <h4 id="bowl-width-default" class="default-text">
                    Bowl Width: 3
                </h4>
                <h4 id="squat-stool-default" class="default-text">
                    Squat Stool: Disabled
                </h4>
                <h4 id="safety-rails-default" class="default-text">
                    Safety Rails: Disabled
                </h4>
                <h4 id="screen-reader-default" class="default-text">
                    Screen Reader: Disabled
                </h4>
                <h4 id="led-color-default" class="default-text">
                    LED Color: None
                </h4>
            </div>
        </div>
    {/if}

    {#if isConnected}
        <button
            class="connect-button"
            id="disconnect"
            on:click={toggleConnection}>Disconnect</button
        >
        <h4 class="connected-to" id="connected-to">
            Connected to: Smith Toilet
        </h4>
    {:else}
        <button class="connect-button" id="connect" on:click={toggleConnection}
            >Connect</button
        >
        <h4 class="connected-to" id="connected-to">Connected to:</h4>
    {/if}
    <div class="icon-bar">
        <div
            role="button"
            tabindex="0"
            class="phone-health phone-button"
            on:click={() => {
                activePage = "health";
            }}
        >
            <i
                class="fa-solid fa-heart fa-xl phone-button-icon"
                id="phone-health-button"
            ></i>
            <label for="phone-health-button" class="phone-button-label"
                >Health</label
            >
        </div>
        <div
            class="divider divider-one"
            style="color: {activePage == 'health'
                ? '#14524C'
                : '#21897E'} !important"
        ></div>
        <div
            role="button"
            tabindex="0"
            class="phone-water phone-button"
            on:click={() => {
                activePage = "water";
            }}
        >
            <i
                class="fa-solid fa-water fa-xl phone-button-icon"
                id="phone-water-button"
            ></i>
            <label
                for="phone-water-button"
                class="phone-button-label phone-water-label">Water</label
            >
        </div>
        <div class="divider divider-two"></div>
        <div
            role="button"
            tabindex="0"
            class="phone-rgb phone-button"
            on:click={() => {
                activePage = "rgb";
            }}
        >
            <i
                class="fa-solid fa-palette fa-xl phone-button-icon"
                id="phone-rgb-button"
            ></i>
            <label
                for="phone-rgb-button"
                class="phone-button-label phone-rgb-label">LED</label
            >
        </div>
        <div class="divider divider-three"></div>
        <div
            role="button"
            tabindex="0"
            class="phone-defaults phone-button"
            on:click={() => {
                activePage = "defaults";
            }}
        >
            <i
                class="fa-solid fa-gear fa-xl phone-button-icon"
                id="phone-defaults-button"
            ></i>
            <label for="phone-defaults-button" class="phone-button-label"
                >Defaults</label
            >
        </div>
    </div>
</div>

<style>
    .phone {
        height: 500px;
        width: 250px;
        background-color: #202020;
        border: #606060 solid 1px;
        border-radius: 10px;
        grid-column: line5 / end;
        grid-row: line2 / end;
        z-index: -2;
        display: grid;
        grid-template-columns: 5% 25% 15% 5% 5% 15% 25% 5%;
        grid-template-rows: 10px 20px 320px 60px 20px 70px 10px;
    }

    .microphone {
        position: relative;
        height: 5px;
        width: 25px;
        border-radius: 16px;
        background-color: #404040;
        grid-column: 4 / 6;
        margin-top: 10px;
    }

    .camera {
        position: relative;
        height: 5px;
        width: 5px;
        border-radius: 100%;
        background-color: #404040;
        grid-column: 6 / 7;
        margin-top: 10px;
        margin-left: 5px;
    }

    .screen {
        position: relative;
        height: 450px;
        border: #202020 solid 1px;
        border-radius: 5px;
        background-image: linear-gradient(0deg, #c0e8f9, #24beff);
        grid-column: 2 / 8;
        grid-row: 3 / 7;
        display: flex;
        justify-items: center;
    }

    .connect-button {
        height: 50%;
        grid-column: 3 / 7;
        grid-row: 4 / 5;
        color: white;
        background-color: #21897e;
        border-radius: 50px;
        margin-top: 10px;
        z-index: 4;
    }

    .connected-to {
        z-index: 4;
        position: relative;
        top: -12px;
        margin: 0 10px 0 20px;
        grid-column: 1 / 9;
        grid-row: 5 / 6;
    }

    .phone-box {
        background-color: #20539b;
        color: white;
        width: 90%;
        border-radius: 10px;
        box-shadow: #202020 1px 1px 1px 1px;
        padding: 10px;
    }

    .phone-page {
        grid-column: 2 / 8;
        grid-row: 2 / 4;
        width: 90%;
        height: 100%;
        z-index: 5;
        padding: 0 10px;
    }

    .health-page {
        display: grid;
        grid-template-columns: 10% 80% 10%;
        grid-template-rows: 10% 5% 25% 5% 25% 5% 25%;
        row-gap: 5px;
    }
    .health-header {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        margin-bottom: 5px;
    }
    .health-box-one {
        grid-column: 1 / 4;
        grid-row: 3 / 5;
    }
    .health-box-two {
        grid-column: 1 / 4;
        grid-row: 5 / 8;
        height: 75%;
    }
    .bathroom-trips {
        margin: 20px 0;
    }
    .water-page {
        display: grid;
        grid-template-columns: 10% 80% 10%;
        grid-template-rows: 10% 5% 40% 5% 40%;
    }

    .water-header {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        margin-bottom: 5px;
    }
    .water-box {
        grid-column: 1 / 4;
        grid-row: 3 / 6;
    }
    .rgb-page {
        display: grid;
        grid-template-columns: 10% 80% 10%;
        grid-template-rows: 10% 5% 25% 5% 25% 5% 25%;
    }
    .rgb-header {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        margin-bottom: 5px;
    }
    .rgb-box {
        grid-column: 1 / 4;
        grid-row: 3 / 6;
        display: grid;
        grid-template-columns: 20% 20% 10% 20% 30%;
        grid-template-rows: 20% 20% 20% 20% 20%;
        row-gap: 5px;
    }
    .rgb-input {
        width: 40px;
        height: 20px;
    }

    #red-rgb-label {
        grid-column: 1 / span 5;
        grid-row: 1 / span 1;
    }
    #red-rgb {
        grid-column: 5 / span 1;
        grid-row: 1 / span 1;
    }
    #green-rgb-label {
        grid-column: 1 / span 5;
        grid-row: 2 / span 1;
    }
    #green-rgb {
        grid-column: 5 / span 1;
        grid-row: 2 / span 1;
    }
    #blue-rgb-label {
        grid-column: 1 / span 5;
        grid-row: 3 / span 1;
    }
    #blue-rgb {
        grid-column: 5 / span 1;
        grid-row: 3 / span 1;
    }
    .rgb-button {
        width: 60px;
        height: 30px;
        margin-bottom: 10px;
        border-radius: 16px;
        background-color: #21897e;
        color: white;
        z-index: 5;
    }
    .no-rgb {
        grid-column: 1 / span 1;
        grid-row: 4 / span 1;
    }
    .save-rgb {
        grid-column: 4 / span 1;
        grid-row: 4 / span 1;
    }

    .defaults-page {
        display: grid;
        grid-template-columns: 10% 80% 10%;
        grid-template-rows: 10% 5% 40% 5% 40%;
    }
    .defaults-header {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        margin-bottom: 5px;
    }
    .defaults-box {
        grid-column: 1 / 4;
        grid-row: 3 / 6;
    }
    .default-text {
        margin: 15px 0;
    }
    .icon-bar {
        position: relative;
        height: 50px;
        width: 223px;
        margin: 1px 0 0 1px;
        background-color: #d9d9d9;
        border-radius: 5px;
        grid-column: 2 / 9;
        grid-row: 6 / 7;
        display: grid;
        grid-template-columns: 20px 40px 10px 40px 10px 40px 10px 40px 10px;
        grid-template-rows: 10px 20px 10px 10px;
    }

    .phone-button {
        display: inline-block;
        position: relative;
        gap: 10px;
        z-index: 100;
    }

    .phone-button-label {
        font-size: 10px;
    }

    .phone-button-icon {
        margin-left: 5px;
        z-index: 101;
    }

    .phone-health {
        grid-column: 2 / 3;
        grid-row: 2 / 5;
    }
    .phone-water {
        grid-column: 4 / 5;
        grid-row: 2 / 3;
    }
    .phone-water-label {
        position: relative;
        left: 3px;
    }
    .phone-rgb {
        grid-column: 6 / 7;
        grid-row: 2 / 3;
    }
    .phone-rgb-label {
        position: relative;
        left: 9px;
    }

    .phone-defaults {
        grid-column: 8 / 9;
        grid-row: 2 / 3;
    }
    .divider {
        height: 25px;
        width: 1px;
        border-radius: 1px;
        background-color: #808080;
    }
    .divider-one {
        grid-column: 3 / 4;
        grid-row: 2 / 5;
    }
    .divider-two {
        grid-column: 5 / 6;
        grid-row: 2 / 5;
    }
    .divider-three {
        grid-column: 7 / 8;
        grid-row: 2 / 5;
    }

    h4 {
        margin: 5px 0;
    }
    h3 {
        margin: 0 0 5px 0;
    }

    button {
        background: #fdfdfd;
        border: #606060 1px solid;
        border-radius: 15px;
        font-weight: 600;
        margin: 5px 0;
        box-shadow: #202020 1px 1px 0 0;
    }

    button:hover {
        background: #dfdfdf;
        cursor: pointer;
    }

    i {
        position: relative;
        color: #21897e;
        cursor: pointer;
    }
</style>
