<div class="graphic-background">
	<div class="toilet-body">
		<div class="graphic-interface">
			<div class="graphic-interface-section"></div>
			<div class="graphic-interface-section"></div>
			<div class="graphic-interface-section"></div>
		</div>
		<div class="tank"></div>
		<div class="bowl" id="toilet-bowl">
			<div class="inner-bowl"></div>
		</div>
	</div>
</div>

<style>
	.text-box {
		border: #606060 1px solid;
		height: 100px;
		grid-column: line3 / span 1;
		grid-row: line2 / span 1;
		padding: 10px;
	}
	.situation-button {
		width: 100px;
		height: 50px;
		position: relative;
		left: 100px;
		top: 100px;
	}
	.situation-buttons {
		grid-column: line3 / span 1;
		grid-row: start / span 1;
	}

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
		background-color: steelblue;
		position: relative;
		margin: 3px 0;
		top: 5px;
		left: 2px;
		height: 15px;
		width: 20px;
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
</style>
