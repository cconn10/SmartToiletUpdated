<script lang="ts">
    import { Users } from "./lib/enum.js";
    import { connected } from "./lib/stores.js";

    import MainInterface from "./lib/MainInterface.svelte";
    import Phone from "./lib/Phone.svelte";
    import ToiletGraphic from "./lib/ToiletGraphic.svelte";

    let isBroken: boolean = false;

    function toggleBreak() {
        isBroken = !isBroken;
    }

    let action = "None";

    function updateAction(event: any) {
        action = event.detail.actionText;
    }

    let activeUser = Users.GUEST;

    function changeUser(event: any) {
        activeUser = event.detail.user;
    }

    let phoneConnected: boolean;

    connected.subscribe((c) => {
        phoneConnected = c;
    });
</script>

<div class="header-info">
    <h1>Smart Toilet</h1>
    <h3>Colin Conn</h3>
    <a
        href="https://sites.google.com/view/colinconn/ui/user-interface-1/smart-object"
        target="_blank"
    >
        Project Write-up
    </a>
</div>

<MainInterface
    {isBroken}
    on:action={updateAction}
    on:userChanged={changeUser}
/>

<div class="text-box">
    <h3>Action:</h3>
    <h5 id="action">{action}</h5>
</div>
<div class="situation-buttons">
    <button class="situation-button" on:click={toggleBreak}
        >Toggle Broken Toilet</button
    >
</div>

<ToiletGraphic />
{#if phoneConnected}
    <Phone {activeUser} />
{:else}
    <Phone />
{/if}

<style>
    .header-info {
        grid-row: start / span 1;
        grid-column: start / span 1;
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

    .text-box {
        border: #606060 1px solid;
        height: 100px;
        grid-column: line3 / span 1;
        grid-row: line2 / span 1;
        padding: 10px;
    }
    .situation-button {
        grid-column: line3 / span 1;
        grid-row: start / span 1;

        width: 100px;
        height: 50px;
        position: relative;
        left: 100px;
        top: 100px;
    }
</style>
