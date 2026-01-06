<script lang="ts">
    import { toilet as t } from "../data/data.svelte";
</script>

<div class="graphic-background">
    <div class="toilet-body">
        <div class="graphic-interface">
            <div class="graphic-button"></div>
            <div class="graphic-interface-section"></div>
            <div class="graphic-interface-section"></div>
            <div class="graphic-interface-section"></div>
        </div>
        <div class="tank"></div>
        <div
            class="bowl"
            id="toilet-bowl"
            style:box-shadow="0 1px 10px 0 {t.ledColor}"
        >
            <div class="inner-bowl">
                {#if t.action === "flush"}
                    <div class="flush"></div>
                {:else}
                    <div class="water"></div>
                {/if}
                {#if t.action === "bidet-rear"}
                    <div class="bidet rear"></div>
                {:else if t.action === "bidet-front"}
                    <div class="bidet front"></div>
                {:else if t.action === "unclog"}
                    <div class="unclog"></div>
                {:else if t.action === "clean-bowl"}
                    <div class="clean"></div>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    .graphic-background {
        height: 300px;
        width: 300px;
        background-color: #6f6f6f;
        grid-row: line3 / span 1;
        grid-column: line3 / span 1;
    }

    .graphic-interface {
        background-color: #d2e3df;
        position: relative;
        top: 190px;
        height: 70px;
        width: 25px;
        border: #1f1f1f 2px solid;
        border-radius: 10%;
    }

    .graphic-interface-section {
        background-color: var(--secondary);
        position: relative;
        margin: 3px 0;
        top: 10px;
        left: 2px;
        height: 12px;
        width: 17px;
    }

    .graphic-button {
        background-color: var(--primary);
        position: relative;
        margin: 3px 0;
        top: 10px;
        left: 2px;
        height: 5px;
        width: 17px;
    }

    .toilet-body {
        position: relative;
        top: -60px;
        left: 50px;
    }
    .tank {
        background-color: #d2e3df;
        position: relative;
        left: 25px;
        top: 20px;
        height: 50px;
        width: 150px;
        border: #1f1f1f 2px solid;
        border-radius: 10%;
        z-index: 100;
    }
    .bowl {
        background-color: #d2e3df;
        position: relative;
        left: 25px;
        height: 200px;
        width: 150px;
        border: #1f1f1f 2px solid;
        border-radius: 50%;
    }
    .inner-bowl {
        background-color: #b0c9c3;
        position: relative;
        left: 30px;
        top: 30px;
        height: 140px;
        width: 90px;
        border-radius: 50%;
    }
    .water {
        background-color: #68e4fa;
        position: relative;
        left: 30px;
        top: 30px;
        height: 50px;
        width: 30px;
        border-radius: 50%;
    }
    .flush {
        background-color: #68e4fa;
        position: relative;
        left: 40px;
        top: 30px;
        height: 20px;
        width: 15px;
        border-radius: 50%;
    }

    .bidet {
        background-color: #68e4fa;
        position: absolute;
        left: 40px;
        top: 10px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        width: 10px;
        border-radius: 5px;
    }

    .front {
        height: 100px;
    }

    .rear {
        height: 50px;
    }

    .clean {
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;
        height: 140px;
        width: 90px;
        border-radius: 50%;
    }

    .unclog {
        background-color: #cf5b5b;
        position: absolute;
        left: 30px;
        top: 30px;
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }
    .unclog::after {
        content: "";
        display: block;
        position: relative;
        left: 50%;
        top: 50%;
        background-color: #bea17f;
        height: 10px;
        width: 10px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
</style>
