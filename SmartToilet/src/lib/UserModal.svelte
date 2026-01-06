<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { Users } from "../lib/enum.js";

    const dispatch = createEventDispatcher();

    let users = [
        { id: "john", details: Users.JOHN },
        { id: "betsy", details: Users.BETSY },
        { id: "gustavo", details: Users.GUSTAVO },
        { id: "timo", details: Users.TIMO },
    ];

    function toggleUsers() {
        dispatch("close");
    }

    function changeUser(details: any) {
        console.log(details);
        dispatch("userChanged", {
            user: details,
        });
    }
</script>

<div class="user-menu" id="user-menu">
    <h3 class="user-header">Users</h3>
    {#each users as { id, details }}
        <div
            role="button"
            tabindex="0"
            class="user-select {id}"
            on:click={() => {
                changeUser(details);
            }}
        >
            <i class="fa-solid fa-user fa-2xl user" id="{id}-icon"></i>
            <h4 class="name user" id="{id}-name">{details.firstName}</h4>
        </div>
    {/each}
    <i
        role="button"
        tabindex="0"
        class="fa-solid fa-circle-xmark close-users"
        on:click={toggleUsers}
    ></i>
    <div class="profiles"></div>
</div>

<style>
    .user-menu {
        grid-column: start / end;
        grid-row: line4 / span 2;
        z-index: 100;
        box-shadow: 4px 4px 4px 4px #606060;
        background-color: #c0e8f9;
        padding: 10px 10px;
        display: grid;
        grid-template-columns: 25% 25% 25% 20% 5%;
        grid-template-rows: 20% 10% 10% 20% 20%;
    }

    .user-header {
        grid-column: 1 / span 2;
        grid-row: 1 / 2;
    }

    .close-users {
        grid-column: 4 / 5;
        grid-row: 1 / 2;
        position: relative;
        right: -40px;
        color: rgb(192, 14, 14);
        cursor: pointer;
    }

    .user-select {
        border: #21897e solid 5px;
        background-color: #c0e8f9;
        width: 75px;
        height: 75px;
        border-radius: 100%;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .user {
        margin-top: 20px;
    }

    i {
        position: relative;
        color: #21897e;
        cursor: pointer;
    }
    h3 {
        margin: 0 0 5px 0;
    }

    h4 {
        margin: 5px 0;
    }
    .john {
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
    }

    .timo {
        grid-column: 3 / span 1;
        grid-row: 2 / span 1;
    }

    .gustavo {
        grid-column: 1 / span 1;
        grid-row: 5 / span 1;
    }

    .betsy {
        grid-column: 3 / span 1;
        grid-row: 5 / span 1;
    }
</style>
