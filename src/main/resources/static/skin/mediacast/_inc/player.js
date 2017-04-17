function formatTime(time) {
	var remainder = 0;
	var hours = time / (60 * 60);
	remainder = hours - (Math.floor(hours));
	hours = Math.floor(hours);
	var minutes = remainder * 60;
	remainder = minutes - (Math.floor(minutes));
	minutes = Math.floor(minutes);
	var seconds = remainder * 60;
	remainder = seconds - (Math.floor(seconds));
	seconds = Math.floor(seconds);
	var hString = hours < 10 ? "0" + hours : "" + hours;
	var mString = minutes < 10 ? "0" + minutes : "" + minutes;
	var sString = seconds < 10 ? "0" + seconds : "" + seconds;
	if (time < 0 || isNaN(time)) return "00:00";

	if (hours > 0) {
		return hString + ":" + mString + ":" + sString;
	}
	else {
		return mString + ":" + sString;
	}
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}