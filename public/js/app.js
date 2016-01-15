

$(document).ready(function(){

	$("#tableArea").on('click', '.complete', function(event){
		console.log(this);
		console.log(event);


	} )


});



var duties=[];

$( "#duty" ).keypress(function(e) {
	var code = e.keyCode || e.which;
  if(code == 13 && duty.value!=='') {  //If Enter is pressed then save duty
		duties.push(duty.value);
		$( "<li>" + $( "ul.dutiesTable" ).append( duty.value) + "</li>");
		duty.value='';

		var tableArea = document.getElementById('tableArea');
		var tr = [];

		/*Load images for done-modify-delete*/
		var checkImage = document.createElement("IMG");
		checkImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/50/Yes_Check_Circle.svg");
		checkImage.setAttribute("height", "18");
		checkImage.setAttribute("width", "18");
		checkImage.setAttribute("alt", "check");
		checkImage.setAttribute("class", "complete");
		checkImage.style.cursor = "pointer";

		var modifyImage = document.createElement("IMG");
		modifyImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/6/67/Feedbin-Icon-home-edit.svg");
		modifyImage.setAttribute("height", "18");
		modifyImage.setAttribute("width", "18");
		modifyImage.setAttribute("alt", "modify");
		modifyImage.setAttribute("class", "modify");
		modifyImage.style.cursor = "pointer";

		var deleteImage = document.createElement("IMG");
		deleteImage.setAttribute("src", "http://cdn4.iconfinder.com/data/icons/simplicio/128x128/notification_error.png");
		deleteImage.setAttribute("height", "15");
		deleteImage.setAttribute("width", "15");
		deleteImage.setAttribute("alt", "delete");
		deleteImage.setAttribute("class", "delete");
		deleteImage.style.cursor = "pointer";

		tr[duties.length-1] = document.createElement('tr');
		var td1 = document.createElement('td'); //done image
		var td2 = document.createElement('td'); //modify image
		var td3 = document.createElement('td'); //delete image
		var td4 = document.createElement('td'); //description

		//load each element on the talbe that displays the duties
		td1.appendChild(checkImage);
    td2.appendChild(modifyImage);
	  td3.appendChild(deleteImage);
		td4.appendChild(document.createTextNode(duties[duties.length-1]));

		tr[duties.length-1].appendChild(td1);
		tr[duties.length-1].appendChild(td2);
		tr[duties.length-1].appendChild(td3);
		tr[duties.length-1].appendChild(td4);

		tableArea.appendChild(tr[duties.length-1]);
	}
});


function buttonClicked(){
	var tableArea = $("#tableArea");
	var i,j;
  if (tableArea != null) { //Check which option is clicked
    for (i = 0; i < tableArea.rows.length; i++) {
        for (j = 0; j < tableArea.rows[i].cells.length; j++)
        tableArea.rows[i].cells[j].onclick = function () {
					  var altAttr= $(this).find('img').attr('alt');
            switch (altAttr) {
							case "check":
							  deleteDuty(this.closest('tr'));
								var nextTd= $(this).closest('td').next();
								nextTd=nextTd.closest('td').next();
								nextTd=nextTd.closest('td').next();
								doneDuty(nextTd);
								break;
							case "modify":
								deleteDuty(this.closest('tr'));
								var nextTd= $(this).closest('td').next();
								nextTd=nextTd.closest('td').next();
								modifyDuty(nextTd);
								break;
							case "delete":
								deleteDuty(this.closest('tr'));
								break;
							default:
								break;
						};
        };
    }
}
};


function doneDuty(dutyDescr){
	var doneArea = document.getElementById('doneArea');
	var node = document.createElement("LI");
  node.appendChild(document.createTextNode(dutyDescr.html()));
  doneArea.appendChild(node);
};

function modifyDuty(dutyDescr){
 	dutyNew = document.getElementById("duty");
 	dutyNew.value = dutyDescr.html();
};

function deleteDuty(duty){
	 duty.remove();
};
