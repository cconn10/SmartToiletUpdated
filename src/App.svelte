<script lang="ts">
    import { onMount } from "svelte";
    import MainInterface from "./lib/components/MainInterface.svelte";
    import Phone from "./lib/components/Phone.svelte";
    import ToiletGraphic from "./lib/components/ToiletGraphic.svelte";
    import { toilet as t } from "./lib/data/data.svelte";

    let isBroken: boolean = $state(false);

    onMount(() => {
        const interval = setInterval(() => {
            t.action = "none";
            t.actionMessage = "None";
        }, 3000);
        return () => clearInterval(interval);
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

<MainInterface {isBroken} />

<div class="text-box">
    <h3>Action:</h3>
    <h5 id="action">{t.actionMessage}</h5>
</div>
<div class="situation-buttons">
    <button class="situation-button" onclick={() => (isBroken = !isBroken)}>
        {isBroken ? "Fix " : "Break"} Toilet</button
    >
</div>

<ToiletGraphic />
<Phone />

<style>
    .header-info {
        grid-row: start / span 1;
        grid-column: start / span 1;
    }

    h3 {
        margin: 0 0 5px 0;
    }

    #action {
        text-transform: capitalize;
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

        width: 150px;
        position: relative;
        left: 100px;
        top: 100px;
    }
</style>
