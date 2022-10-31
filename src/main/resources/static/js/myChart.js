var chartDataStr = decodeHtml(chartData);
var chartJsonArray = JSON.parse(chartDataStr);

var arrayLength = chartJsonArray.length;

var numericData = [];
var labelData = [];

for(var i=0; i < arrayLength; i++){
	numericData[i] = chartJsonArray[i].value;
	labelData[i] = chartJsonArray[i].label;
}

new Chart(document.getElementById("myPieChart"), {
	type: "pie",
	data : {
    	labels: labelData,
   		datasets: [{
      		label: 'My First dataset',
      		backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],

      		data: numericData
    }]
  },
  
  //configuration options go here
  options: {
	  title: {
		  display: true,
		  text: 'Project Statuses'
	  }
  }
});

// [{"value": 1, "label": "Completed"},{"value": 1, "label": "Completed"},{"value": 1, "label": "Completed"}]
function decodeHtml(html) {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
}