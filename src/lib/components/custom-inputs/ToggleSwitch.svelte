<script lang="ts">

    let { checked = $bindable(), leftText, rightText } = $props()

</script>


<div class="bidet-input">
    <label
        class="input-label {!checked ? 'active' : 'inactive'}"
        for="bidet"
    >
        {leftText}
    </label>
    <label class="switch" for="bidet">
        <input
            type="checkbox"
            id="bidet"
            name="bidet"
            bind:checked
        />
        <span class="switch-slider"></span>
    </label>
    <label
        class="input-label {checked ? 'active' : 'inactive'}"
        for="bidet"
    >
        {rightText}
    </label>
</div>

<style>
    
    .bidet-input {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .input-label {
        margin: 0 5px;
        font-weight: 600;
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
        background-color: #20539b;
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
</style>