<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import UserModal from "./UserModal.svelte";
    import { Users } from "../lib/enum.js";

    const dispatch = createEventDispatcher();

    export let isBroken;

    function changeAction(t: string) {
        dispatch("action", {
            actionText: t,
        });
    }

    let bidetTemp = 95;
    let bidetMode = "Rear";

    function bidetMessage() {
        return "Bidet | " + bidetTemp + "\u00b0F | " + bidetMode;
    }

    let safetyRails = false;
    let squatStool = false;
    let screenReader = false;

    let height = 5;
    let width = 3;

    function widthDown() {
        if (width > 1) width--;
    }

    function widthUp() {
        if (width < 5) width++;
    }

    function heightDown() {
        if (height > 1) height--;
    }

    function heightUp() {
        if (height < 5) height++;
    }

    let usersVisible = false;

    export let activeUser = Users.GUEST;

    function toggleUsers() {
        usersVisible = !usersVisible;
    }

    function changeUser(event: any) {
        activeUser = event.detail.user;
        console.log("Foo");
        dispatch("userChanged", {
            user: event.detail.user,
        });
    }
</script>

<div class="ui-border">
    <h3 class="user-label" id="user-label">User: {activeUser.firstName}</h3>
    {#if isBroken}
        <i
            class="fa-solid fa-triangle-exclamation fa-xl fa-fade"
            id="leak-warning"
        ></i>
    {/if}

    <div class="main-features interface-section">
        <button
            class="main-button flush-one"
            on:click={() => {
                changeAction("Little Flush");
            }}
        >
            <i class="fa-solid fa-1 fa-2xl main-ui-icon"></i>
            Flush
        </button>
        <button
            class="main-button flush-two"
            on:click={() => {
                changeAction("Big Flush");
            }}
        >
            <i class="fa-solid fa-2 fa-2xl main-ui-icon"></i>
            Flush
        </button>
        <button
            class="main-button bidet"
            on:click={() => {
                changeAction(bidetMessage());
            }}
        >
            <i class="fa-solid fa-shower fa-2xl main-ui-icon"></i>
            Bidet
        </button>
        <div class="temperature">
            <h4 id="temp-display">Temperature: {bidetTemp}&#176;F</h4>
            <input
                type="range"
                min="86"
                max="100"
                bind:value={bidetTemp}
                class="slider"
                id="slider"
            />
        </div>
        <div class="bidet-front bidet-radio">
            <input
                type="radio"
                id="front"
                name="bidet-radio"
                bind:group={bidetMode}
                value="Front"
            />
            <label for="front">Front</label>
        </div>
        <div class="bidet-rear bidet-radio">
            <input
                type="radio"
                id="rear"
                name="bidet-radio"
                bind:group={bidetMode}
                value="Rear"
                checked
            />
            <label for="rear">Rear</label>
        </div>
    </div>

    <div class="maintenance interface-section">
        <button
            class="maintenance-button unclog"
            on:click={() => {
                changeAction("Unclogging");
            }}>Unclog</button
        >
        <button
            class="maintenance-button clean-bowl"
            on:click={() => {
                changeAction("Cleaning Bowl");
            }}>Clean Bowl</button
        >
        <button
            class="maintenance-button clean-bidet"
            on:click={() => {
                changeAction("Cleaning Bidet");
            }}>Clean Bidet</button
        >
    </div>

    <div class="accessibility interface-section">
        <h4 class="height-select-header">Height</h4>
        <h4 class="width-select-header">Width</h4>
        <div class="height-select size-select">
            <i
                class="fa-solid fa-circle-chevron-left fa-xl main-ui-icon"
                on:click={heightDown}
            ></i>
            <h4 id="height-value">{height}</h4>
            <i
                class="fa-solid fa-circle-chevron-right fa-xl main-ui-icon"
                on:click={heightUp}
            ></i>
        </div>
        <div class="width-select size-select">
            <i
                class="fa-solid fa-circle-chevron-left fa-xl main-ui-icon"
                on:click={widthDown}
            ></i>
            <h4 id="width-value">{width}</h4>
            <i
                class="fa-solid fa-circle-chevron-right fa-xl main-ui-icon"
                on:click={widthUp}
            ></i>
        </div>
        <div class="rails-switch toggle-switch">
            <label class="switch" for="safety-rails">
                <input
                    type="checkbox"
                    name="safety-rails"
                    id="safety-rails"
                    bind:checked={safetyRails}
                />
                <span class="switch-slider"></span>
            </label>
            <h4>Safety Rails</h4>
        </div>
        <div class="stool-switch toggle-switch">
            <label class="switch" for="squat-stool">
                <input
                    type="checkbox"
                    name="squat-stool"
                    id="squat-stool"
                    bind:checked={squatStool}
                />
                <span class="switch-slider"></span>
            </label>
            <h4>Squat Stool</h4>
        </div>
        <div class="screen-reader-switch toggle-switch">
            <label class="switch" for="screen-reader">
                <input
                    type="checkbox"
                    name="screen-reader"
                    id="screen-reader"
                    bind:checked={screenReader}
                />
                <span class="switch-slider"></span>
            </label>
            <h4>Screen Reader</h4>
        </div>
    </div>

    <button class="users" on:click={toggleUsers}>
        <i class="fa-solid fa-user fa-2xl main-ui-icon"></i>
        Users
    </button>
    {#if usersVisible}
        <UserModal on:close={toggleUsers} on:userChanged={changeUser} />
    {/if}
</div>

<style>
    .ui-border {
        background-color: #dfdfdf;
        border: black 1px solid;
        height: 100%;
        width: 100%;
        padding: 1em;
        grid-row: line2 / end;
        grid-column: start / span 1;
        display: grid;
        grid-template-columns: [start] 25% [line2] 10% [line3] 30% [line4] 10% [line5] 25% [end];
        grid-template-rows: [start] 7% [line2] 33% [line3] 15% [line4] 33% [line5] 12% [end];
    }

    .user-label {
        grid-column: line2 / end;
        grid-row: start / span 1;
        margin: 5px;
    }

    #leak-warning {
        grid-column: start / span 1;
        grid-row: start / span 1;
        position: relative;
        top: 15px;
        left: 30px;
        color: #f47174;
    }

    .interface-section {
        margin: 10px 0;
        padding: 5px;
        background-color: #c0e8f9;
        border: #c6c6c6 2px solid;
        border-radius: 10px;
        grid-column: start / end;
    }

    .main-features {
        grid-row: line2 / span 1;
        display: grid;
        grid-template-columns: [start] 33% [line2] 33% [line3] 33% [end];
        grid-template-rows: [start] 100px [line2] 50px [line3] 50px [line4] 100px [end];
        column-gap: 10px;
    }

    .main-ui-icon {
        margin: 5px 5px 20px 5px;
    }

    .main-button {
        height: 80px;
        width: 80px;
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

    input[type="radio"],
    label {
        cursor: pointer;
    }

    .flush-one {
        grid-column: start / span 1;
        grid-row: start / span 1;
    }
    .flush-two {
        grid-column: line2 / span 1;
        grid-row: start / span 1;
    }

    .bidet {
        grid-column: start / span 1;
        grid-row: line2 / span 1;
    }

    .bidet-front {
        grid-column: line2 / span 1;
        grid-row: line3 / span 1;
    }
    .bidet-rear {
        grid-column: line3 / span 1;
        grid-row: line3 / span 1;
    }
    .bidet-radio {
        display: flex;
        align-content: center;
    }
    .bidet-radio * {
        height: 20px;
        width: 20px;
        font-weight: 600;
    }

    .temperature {
        grid-column: line2 / span 2;
        grid-row: line2 / span 1;
    }
    .slider {
        background-color: #20539b;
        width: 150px;
    }

    h4 {
        margin: 5px 0;
    }
    h3 {
        margin: 0 0 5px 0;
    }

    .maintenance {
        grid-row: line3 / span 1;
        display: flex;
        align-items: center;
        column-gap: 10px;
    }

    .maintenance-button {
        height: 60px;
        width: 80px;
    }

    .accessibility {
        grid-row: line4 / span 1;
        display: grid;
        grid-template-columns: [start] 8% [line2] 30% [line3] 8% [line4] 30% [end];
        grid-template-rows: [start] 25px [line2] 25px [line3] 50px [line4] 50px [line5] 50px [end];
    }

    .size-select * {
        display: inline;
    }
    .width-select-header {
        grid-column: line2 / span 1;
        grid-row: start / span 1;
    }
    .width-select {
        grid-column: start / span 2;
        grid-row: line2 / span1;
    }

    .height-select-header {
        grid-column: line4 / span 1;
        grid-row: start / span 1;
    }
    .height-select {
        grid-column: line3 / span 2;
        grid-row: line2 / span 1;
    }
    .rails-switch {
        grid-column: start / end;
        grid-row: line3;
    }
    .stool-switch {
        grid-column: start / end;
        grid-row: line4;
    }
    .screen-reader-switch {
        grid-column: start / end;
        grid-row: line5;
    }

    .toggle-switch {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 54px;
        height: 27px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .switch-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #bfbfbf;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
    }
    .switch-slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
    }

    input:checked + .switch-slider {
        background-color: #20539b;
    }

    input:focus + .switch-slider {
        box-shadow: 0 0 1px #20539b;
    }

    input:checked + .switch-slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .users {
        height: 80px;
        width: 80px;
        grid-column: line4 / end;
        grid-row: line5 / span 1;
    }
</style>
