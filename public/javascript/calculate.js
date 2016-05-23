function reload() {
	location.reload();
}

function goal() {
		var goal = document.getElementById("goal").value;
		var valid = 1;
		if (goal == ""){
			window.alert("Please enter a value!");
			valid = 0;
		}
		if (isNaN(goal)) {
			window.alert("Please enter a valid value!");
			valid = 0;
		}
		var goalnum = Number(goal/100).toFixed(2);
		//window.alert (goal);

		var numarray = document.getElementsByName('numerator');
		var denarray = document.getElementsByName('denominator');
		var percentagearray = document.getElementsByName('percentage');
		var i;
		var result;
		var count= 0;
		var total =0;
		var value =0;
		
		for (i=0;i<numarray.length;i++){
		//alert(Number(numarray[i].value)/Number(denarray[i].value));
		result = Number((Number(numarray[i].value)/Number(denarray[i].value)).toFixed(3));
		//alert(result);
			if (!isNaN(result) && isFinite(result) && numarray[i].value != ""){
				count++;
				total += result;
				percentagearray[i].innerHTML = (100 * result).toFixed(1) + "%";

			}
			else{
				percentagearray[i].innerHTML = "N/A";
			}
		}
		if (valid == 1){
			var restcount = 4 - count;

			if (count > 0 && count<4){
				var goalavg = (4*goalnum - total)/restcount;
				if (goalavg > 1){
					window.alert ("Goal Mean grade is unattainable! Try again.");	
				}
				else if (goalavg < 0){
					goalavg = 0;
					window.alert ("You need a mean grade of "+ goalavg*100+"% to achieve your goal");
				}
				else window.alert ("You need a mean grade of "+ goalavg*100+"% to achieve your goal");
			}
			else if (count ==0) window.alert("You need a mean grade of "+goal+"% to achieve your goal!");
			else document.getElementById('total').innerHTML = (total/count).toFixed(3);
		}

}

function mean(){
		//alert(r1num/r1denom);
		//alert(100* (1/3).toFixed(3));
		var numarray = document.getElementsByName('numerator');
		var denarray = document.getElementsByName('denominator');
		var percentagearray = document.getElementsByName('percentage');
		var i;
		var result;
		var count= 0;
		var total =0;
		var value =0;
		for (i=0;i<numarray.length;i++){
		//alert(Number(numarray[i].value)/Number(denarray[i].value));
		result = Number((Number(numarray[i].value)/Number(denarray[i].value)).toFixed(3));
		//alert(result);
			if (!isNaN(result) && isFinite(result) && numarray[i].value != ""){
				count++;
				total += result;
				percentagearray[i].innerHTML = (100 * result).toFixed(1) + "%";
				value = 1;
			}
			else{
				percentagearray[i].innerHTML = "N/A";
			}
		}
		//var result = r1num/r1denom;
		//document.getElementsByName('percentarray').innerHTML = result;
		if (value == 1){
		document.getElementById('total').innerHTML = (total/count).toFixed(3);
		}
		else{
			document.getElementById('total').innerHTML = "N/A";
		}

}

function average() {
		var numarray = document.getElementsByName('numerator');
		var denarray = document.getElementsByName('denominator');
		var percentagearray = document.getElementsByName('percentage');
		var i;
		var numSum=0
		var denSum=0;
		var value =0;
		for (i=0;i<numarray.length;i++){
			result = Number((Number(numarray[i].value)/Number(denarray[i].value)).toFixed(3));
			if (!isNaN(result) && isFinite(result) && numarray[i].value != ""){
				numSum += Number(numarray[i].value);
				denSum += Number(denarray[i].value);
				percentagearray[i].innerHTML = (100 * result).toFixed(1) + "%";	
				value = 1;	
			}
			else{
				percentagearray[i].innerHTML = "N/A";
			}
		}
		if (value == 1){
		var result = Number(numSum/denSum).toFixed(3);
		document.getElementById('total').innerHTML = result;
		}
		else{
			document.getElementById('total').innerHTML = "N/A";
		}
}


function addRow() {
	//int totalrow = 4;
	var table = document.getElementById("table");
	var row = table.insertRow(0);
	//totalrow++;
	var cell1 = rowinsertCell(0);
	var cell2 = rowinsertCell(1);
	var cell3 = rowinsertCell(2);
	var cell4 = rowinsertCell(3);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
    cell4.innerHTML = "NEW CELL4";
}
/*
function addrow() {
	//int rownum = 0;
	var count = document.getElementById("table").rows.length;
    var table = document.getElementById("table");
    var row = table.insertRow(count-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var c2num = count -1 ;
    n = c2num.toString();
    cell1.innerHTML = "11";
    cell2.innerHTML =  document.getElementsByClassName("otherline");
    cell3.innerHTML = "l2";
		            //cell3.class = "grade";
    cell4.innerHTML = "percentage";
}
/*
function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}
*/
