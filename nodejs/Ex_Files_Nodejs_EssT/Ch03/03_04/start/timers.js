var waitTime = 3000,
	currentTime = 0,	
	waitInterval = 500,
	percentWaited = 0;

function writeWaitingPercent(p){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting ... ${p}`);
}

var interval = setInterval(function(){
	currentTime += waitInterval;
	percentWaited = Math.floor()
	console.log(`waiting ${currentTime/1000}  seconds ... ` );
},waitInterval);

setTimeout(function(){
			clearInterval(interval);
			writeWaitingPercent(100);
		console.log("  Percent  -- Done ");
},waitTime);
process.stdout.write("\n\n\n")
writeWaitingPercent(percentWaited);