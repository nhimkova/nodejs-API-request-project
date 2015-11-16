var request = require('request');

//http://www.reddit.com/r/todayilearned/top.json
function todayILearned(timeframe){
	if (!timeframe){
		timeframe = 'day';
	}
	request.get({
	url : 'http://www.reddit.com/r/todayilearned/top.json?sort=top&t=' + timeframe,
	json : true
	}, function (error, response, body) {
	if (error){
		console.log('Something went wrong');
	}
	body.data.children.forEach(function (child){
		console.log(child.data.title);
	});
});
}

module.exports = todayILearned;

