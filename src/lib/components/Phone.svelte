<script lang="ts">
    import {
        toilet as t,
        iconButtons,
        phone,
        toilet,
    } from "../data/data.svelte.js";
    import { Pages } from "../data/enum.js";
</script>

<div class="phone">
    <div class="phone-elements">
        <div class="microphone"></div>
        <div class="camera"></div>
    </div>
    <div class="content">
        <h4 class="connect">{"Connected to: " + phone.device}</h4>

        <h2 class="header">
            {phone.activePage != Pages.NONE
                ? phone.activePage.display_text
                : "Hello, " + t.activeUser.info.firstName + "!"}
        </h2>

        {#if phone.activePage.id === Pages.HEALTH.id}
            <div class="phone-page">
                <div class="phone-box">
                    <h4 id="health-name">
                        {t.activeUser.info.firstName}
                        {t.activeUser.info.lastName}
                    </h4>
                    <h4 id="health-age">Age: {t.activeUser.info.age}</h4>
                </div>
                <div class="phone-box">
                    <h4 id="health-hydration" class="phone-box-label">
                        Hydration Level
                    </h4>
                    <h4>{t.activeUser.health.hydration}</h4>
                </div>
                <div class="phone-box">
                    <h4 class="phone-box-label" id="bathroom-trips">
                        Bathroom Trips Today
                    </h4>
                    <h4>{t.activeUser.health.bathroomTrips}</h4>
                    <h4 class="phone-box-label" id="weekly-average">
                        This Week's Average
                    </h4>
                    <h4>{t.activeUser.health.weeklyAvg}</h4>
                </div>
            </div>
        {:else if phone.activePage.id === Pages.WATER.id}
            <div class="phone-page" id="water-page">
                <div class="phone-box">
                    <h4>Water Used This Week</h4>
                    <h4>32 Gallons</h4>
                </div>

                <div class="phone-box">
                    <h4>Change from Last Week</h4>
                    <h4>4 Fewer Gallons</h4>
                </div>

                <div class="phone-box">
                    <h4>Average Weekly Cost</h4>
                    <h4>0.12 USD</h4>
                </div>
            </div>
        {:else if phone.activePage.id === Pages.LED.id}
            <div class="phone-page" id="rgb-page">
                <div class="phone-box">
                    <label for="color-picker" class="rgb-label"
                        >Choose Color</label
                    >
                    <input
                        type="color"
                        name=""
                        id="color-picker"
                        bind:value={t.ledColor}
                    />
                    <button
                        class="no-rgb"
                        onclick={() => (toilet.ledColor = "transparent")}
                        >Turn Off Lights</button
                    >
                </div>
            </div>
        {:else if phone.activePage.id === Pages.DEFAULTS.id}
            <div class="phone-page" id="defaults-page">
                <div class="phone-box">
                    <h4 id="seat-height-default" class="default-text">
                        Seat Height: {t.activeUser.settings.seatHeight}
                    </h4>
                    <h4 id="bowl-width-default" class="default-text">
                        Bowl Width: {t.activeUser.settings.bowlWidth}
                    </h4>
                    <h4 id="squat-stool-default" class="default-text">
                        Squat Stool: {t.activeUser.settings.stool
                            ? "Yes"
                            : "No"}
                    </h4>
                    <h4 id="safety-rails-default" class="default-text">
                        Safety Rails: {t.activeUser.settings.rails
                            ? "Yes"
                            : "No"}
                    </h4>
                    <h4 id="screen-reader-default" class="default-text">
                        Screen Reader: {t.activeUser.settings.reader
                            ? "Yes"
                            : "No"}
                    </h4>
                    <h4
                        id="led-color-default"
                        class="default-text"
                        style:display="flex"
                        style:align-items="center"
                        style:gap="5px"
                    >
                        LED Color:
                        {#if t.activeUser.settings.led !== "none"}<div
                                style:width="10px"
                                style:height="10px"
                                style:background-color="background-color: {t
                                    .activeUser.settings.led}"
                                style:border="1px solid white"
                            ></div>
                        {:else}
                            None
                        {/if}
                    </h4>
                </div>
            </div>
        {/if}
    </div>
    <div class="icon-bar">
        {#each iconButtons as { name, iconClass, page }}
            <button
                class="phone-{name} nav-button"
                aria-label="{name}-button"
                onclick={() => (phone.activePage = page)}
            >
                <i class="fa-solid {iconClass} icon"></i>
                <p class="icon-label">{name}</p>
            </button>
        {/each}
    </div>
</div>

<style>
    .phone {
        height: 500px;
        width: 250px;
        background-color: var(--background);
        border: #202020 solid 5px;
        border-radius: 40px;
        grid-column: line5 / end;
        grid-row: line2 / end;
        z-index: -2;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .phone-box {
        width: 100%;
        padding: 15px;
        background-color: var(--secondary);
        border-radius: 10px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
    }

    .phone-elements {
        display: flex;
        background-color: #202020;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        gap: 5px;
        padding: 3px;
        margin-top: 5px;
    }

    .phone-page {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .microphone {
        position: relative;
        height: 10px;
        width: 25px;
        border-radius: 16px;
        background-color: #404040;
        z-index: 4;
    }

    .camera {
        position: relative;
        height: 10px;
        width: 10px;
        border-radius: 100%;
        background-color: #404040;
    }

    .content {
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .connect {
        color: var(--primary);
        font-weight: 600;
        background-color: transparent;
        border: none;
        border-radius: 50px;
        margin-top: 10px;
        z-index: 4;
        cursor: pointer;
    }

    .header {
        color: var(--text);
        text-transform: capitalize;
        margin-bottom: 5px;
    }
    .defaults-box {
        grid-column: 1 / 4;
        grid-row: 3 / 6;
    }
    .default-text {
        margin: 10px 0;
    }

    .icon {
        display: flex;
    }

    .icon-bar {
        height: 10%;
        width: 100%;
        background-color: #20539b;
        border-radius: 0 0 35px 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }

    .icon-label {
        text-transform: capitalize;
        font-size: x-small;
    }

    .nav-button {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: #fafafa;

        border: none;
        background-color: transparent;
        box-shadow: none;
        cursor: pointer;
    }

    .no-rgb {
        background-color: var(--primary);
        color: white;
        font-weight: 600;
        padding: 10px;
        border: none;
        border-radius: 10px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
    }

    .rgb-label {
        font-size: 24px;
        font-weight: 600;
    }
</style>
