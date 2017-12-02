var passwd;
var lockPasswd;
var offpasswd = "a8c4647e79f9629cefa02e0d5c7046d8aedcf072aebb09a770760431e1418957";

var loginCycle = function(){
	$("#loginInput").focus();
	
	$("#loginForm").submit(function(e){
		passwd = $("#loginInput").val();
		lockPasswd = CryptoJS.SHA256(passwd);
		//alert(lockPasswd);
		
		if(lockPasswd == offpasswd){
			$("#login").css("display", "none");
			$("#mainPage").attr("id", "");
			e.preventDefault();
			$("#custSearch").focus();
		}
		else{
			loginCycle();
		}
	/* tested, works 12/1/17 WT*/
	//	alert($("#loginInput").val());

	});
}

var checkField = function(){
	
}

$(document).ready(function(){

	loginCycle();
	
	$("#clrBtn").click(function(){
		clrall();
	});
	
	$("#savBtn").click(function(){
	/*	var inputs = $("#frm").find("input");
		inputs.each(function( index ){
			$(this).val( index );
		});
	*/
	
		
	});
	
	var clrall = function(){
		var inputs = $("#frm").find("input");
		inputs.each(function(){
			$(this).val("");
		});
	
	}
	
});