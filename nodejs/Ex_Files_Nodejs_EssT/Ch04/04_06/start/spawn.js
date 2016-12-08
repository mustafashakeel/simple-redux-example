var spawn = require("child_process").spawn,
	cp = spawn("node", ["alwaysTalking"]);
	cp.stdout.on("data", function(){
		console.log("Child Process has ended ");
		process.exit();
	});

	setTimeout(function(){
		cp.stdin.write("stop");
	},4000)