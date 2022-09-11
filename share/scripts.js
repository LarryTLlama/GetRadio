window.onload = async function() {
	let id = location.search.split("?q=")[1];
	if(!id) { return window.location = "../"}
	
	$.getJSON(`https://de1.api.radio-browser.info/json/stations/byuuid/${id}`, function(data) {
		console.log(data)
		document.getElementById('name').innerText = data[0] ? data[0].name : "We couldn't match that id to a station"
		document.getElementById('desc').innerText = data[0] ? `Tags: ${data[0].tags.replace(',', ', ')}` : "We can't provide details for this station in a preview here. You can try opening it in-app anyway, but we don't think it'll work.";
		document.getElementById('buttonContent').innerText = data[0] ? `Open ${data[0].name}` : `Open anyway`;
		document.getElementById('site').href = data[0] ? data[0].homepage : "../"
		document.getElementById('thingymabob').href = "getradio://" + id;
		//document.getElementById('')
	})
}