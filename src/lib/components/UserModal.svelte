<script lang="ts">
    import { users } from "../data/data.svelte.js";
    import { toilet as t } from "../data/data.svelte.js";
    import { Users } from "../data/enum.js";

    let { usersVisible = $bindable(), locked = $bindable() } = $props();

    let closeModal = () => {
        usersVisible = false;
        locked = false;
    };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="user-menu" id="user-menu">
    {#each users as user}
        <button
            aria-label="user-{user.details.info.firstName}"
            onclick={() => {
                t.activeUser = user.details;
                t.ledColor = user.details.settings.led;
                closeModal();
            }}>{user.details.info.firstName}</button
        >
    {/each}
    <button
        aria-label="user-guest"
        onclick={() => {
            t.activeUser = Users.GUEST;
            closeModal();
        }}>Guest</button
    >

    <button aria-label="close-users-dropdown" onclick={() => closeModal()}>
        <i role="button" tabindex="0" class="fa-solid fa-chevron-up close-users"
        ></i>
    </button>
</div>

<style>
    .user-menu {
        position: absolute;
        top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid white;
        border-radius: 10px;
        box-shadow: 0 0px 4px 0 black;
        z-index: 1000;
    }

    button {
        width: 200px;
        padding: 15px;
        background-color: var(--background);
        color: var(--primary);
        font-weight: 600;
        border: 0;
        pointer-events: all !important;
        cursor: pointer;
    }

    button:hover {
        filter: brightness(75%);
    }

    button:not(:last-of-type) {
        border-bottom: 1px solid var(--secondary-bg);
    }

    button:first-of-type {
        border-radius: 10px 10px 0 0;
    }
    button:last-of-type {
        border-radius: 0 0 10px 10px;
    }
</style>
