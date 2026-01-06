<script lang="ts">
    import {
        toilet as t,
        maintenanceButtons,
        options,
    } from "../data/data.svelte";
    import UserModal from "../components/UserModal.svelte";
    import TempSelector from "./custom-inputs/TempSelector.svelte";
    import ToggleSwitch from "./custom-inputs/ToggleSwitch.svelte";

    let { isBroken = $bindable() } = $props();

    let currentTemp = $state("medium");
    let bidetMode = $state(true);

    let bidetMessage = () =>
        "Bidet | " + currentTemp + " | " + (bidetMode ? "Rear" : "Front");

    let setAction = (name: string, message: string) => {
        (t.action = name), (t.actionMessage = message);
    };

    let usersVisible = $state(false);
    let locked = $state(false);
</script>

<div class="ui-border {locked ? 'locked' : ''}">
    {#if locked}
        <div class="locked-filter" style:z-index={usersVisible ? 3 : 1}></div>
    {/if}
    <div class="top-row">
        <i
            class="{isBroken
                ? 'fa-solid fa-triangle-exclamation fa-xl fa-fade'
                : ''} leak-warning"
        ></i>

        <button
            class="user-label row"
            id="user-label"
            onclick={() => {
                usersVisible = true;
                locked = true;
            }}
        >
            User: {t.activeUser.info.firstName}
            <i class="fa-solid fa-sort-down"></i>
        </button>

        {#if usersVisible}
            <UserModal bind:usersVisible bind:locked />
        {/if}

        <button
            class="lock-button"
            aria-label="lock"
            onclick={() => (locked = !locked)}
        >
            <i
                class="fa-solid fa-lock{locked ? '' : '-open'} icon"
                style="color: var(--{locked ? 'danger' : 'success'});"
            ></i>
        </button>
    </div>

    <button
        class="main-button action-button"
        onclick={() => setAction("flush", "Flush")}>Flush</button
    >

    <div class="interface-section">
        <h4 class="section-label">Bidet</h4>
        <div class="main-features interface-border col">
            <button
                class="main-button bidet action-button"
                onclick={() =>
                    setAction(
                        "bidet-" + (bidetMode ? "rear" : "front"),
                        bidetMessage()
                    )}>Bidet</button
            >

            <ToggleSwitch
                bind:checked={bidetMode}
                leftText="Front"
                rightText="Rear"
            />

            <TempSelector bind:currentTemp />
        </div>
    </div>

    <div class="interface-section">
        <h4 class="section-label">Maintenance</h4>
        <div class="maintenance interface-border row">
            {#each maintenanceButtons as { className, label, actionText }}
                <button
                    class="maintenance-button action-button {className}"
                    onclick={() => setAction(className, actionText)}
                    >{label}</button
                >
            {/each}
        </div>
    </div>

    <div class="interface-section">
        <h4 class="section-label">Options</h4>
        <div class="accessibility interface-border col">
            {#each options as option (option.id)}
                <label
                    class="option-label {option.active ? 'active' : 'inactive'}"
                    for={option.name}
                >
                    <input
                        type="checkbox"
                        id={option.name}
                        name={option.name}
                        class="option-check"
                        bind:checked={option.active}
                    />
                    {option.name}
                </label>
            {/each}
        </div>
    </div>
</div>

<style>
    .ui-border {
        background-color: var(--background);
        border: black 5px solid;
        border-radius: 10px;
        height: 100%;
        width: 100%;
        padding: 1em;
        grid-row: line2 / end;
        grid-column: start / span 1;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .locked {
        pointer-events: none;
        position: relative;
        z-index: -1;
    }

    .locked-filter {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .top-row {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .user-label {
        margin: 5px;
        border: none;
        background: none;
        font-size: 20px;
        font-weight: 700;
        color: var(--primary);
        display: inherit;
        justify-content: space-around;
        width: 200px;
    }

    .leak-warning {
        color: var(--danger);
        min-width: 25px;
        display: flex;
        align-items: center;
    }

    .interface-section {
        width: 100%;
    }

    .section-label {
        margin-left: 10px;
        color: var(--secondary);
    }

    .interface-border {
        width: 100%;
        padding: 10px;
        background-color: var(--secondary-bg);
        border: var(--secondary) 3px solid;
        border-radius: 10px;
        display: flex;
        align-items: center;
    }

    .col {
        flex-direction: column;
        gap: 10px;
    }
    .row {
        flex-direction: row;
    }

    .main-features {
        column-gap: 10px;
    }

    .main-button {
        height: 3em;
        width: 100%;
    }

    .option-label {
        font-size: 20px;
        font-weight: 600;
    }

    .option-check {
        height: 0;
        width: 0;
    }

    .action-button {
        background: var(--primary);
        color: var(--background);
        border: none;
        border-radius: 15px;
        font-weight: 600;
        margin: 5px 0;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
    }

    .action-button:hover {
        filter: brightness(0.75);
        cursor: pointer;
    }

    .lock-button {
        width: 30px;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 2;
        pointer-events: all !important;
    }

    .maintenance {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .maintenance-button {
        height: 60px;
        width: 47%;
    }
</style>
