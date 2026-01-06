<script lang="ts">
    import { tempSelectors } from "../../data/data.svelte";

    let { currentTemp = $bindable() } = $props();
</script>

<div class="temp-selection">
    <h4 class="input-label">Temperature</h4>
    <div class="temp-selectors">
        {#each tempSelectors as { id, name, color }}
            <input
                class="bidet-temp"
                type="radio"
                id="temp-{name}"
                name="temp-{name}"
                value={name}
                bind:group={currentTemp}
            />
            <label
                class="temp-label"
                style:--color={color}
                style="left: {-57 + id * 25}px;"
                for="temp-{name}"
            >
            </label>
        {/each}
    </div>
</div>

<style>
    .bidet-temp {
        position: relative;
        height: 0;
    }

    .bidet-temp:checked + .temp-label::before {
        outline: 3px solid var(--color);
        outline-offset: 3px;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
        transition:
            outline-offset 100ms ease-in-out,
            box-shadow 100ms ease-in-out;
    }

    .input-label {
        margin: 0 5px;
        font-weight: 600;
    }

    .temp-label::before {
        content: "";
        cursor: pointer;
        display: block;
        background-color: var(--color);
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }

    .temp-selectors {
        display: flex;
        width: 100%;
        height: 30px;
        justify-content: center;
    }

    .temp-selection {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }
</style>
