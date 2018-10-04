document.querySelector('body').addEventListener('keyup', (event)=> {
	myobj.display(event.key); 
	myobj.operation(event.key);
if (event.key == "=") {
	myobj.cal();
}});

var myobj = {

	val: "",
	screen: "",
	operator:"",
	calpress: 0,

	display(event){

			if(event == 0 || event == 1 || event == 2 || event == 3 || event == 4 || event == 5 || event == 6 || event == 7 || event == 8 || event == 9)

			{

			this.screen += event;

			document.querySelector('#display').value = this.screen;

			this.calpress = 0;

			}

	},/*End of the display func*/

	operation(event){
		if(event == "/" || event == "+" || event == "-" || event == "x")
		{
			this.operator = event;

			this.val = document.querySelector('#display').value;

			this.screen = "";
		}

	},/*End of the operation func*/

	cal(){
		if(this.val != "")
		{

		switch(this.operator)
		{

			case "+": 

			this.calpress++;

			var result =  parseFloat(this.val) + parseFloat(document.querySelector('#display').value);

			if (this.calpress == 1) {
			this.val = document.querySelector('#display').value;
			};

			document.querySelector('#display').value = result;

			this.screen = "";



			break;

			case "-": 

			this.calpress++;

			if(this.calpress == 1)
			{

				var result =  parseFloat(this.val) - parseFloat(document.querySelector('#display').value);

				this.val = document.querySelector('#display').value;

				document.querySelector('#display').value = result;

			}else{

				var result =  parseFloat(document.querySelector('#display').value) - parseFloat(this.val);

					document.querySelector('#display').value = result;

			}

			this.screen = "";

			break;

			case "x": 

			this.calpress++;

			var result =  parseFloat(this.val)*document.querySelector('#display').value;

			if (this.calpress == 1) {
			this.val = document.querySelector('#display').value;
			};

			document.querySelector('#display').value = result;

			this.screen = "";

			break;


			case "/": 

			this.calpress++;

			if (this.calpress == 1) {

			var result =  this.val/document.querySelector('#display').value;

			this.val = document.querySelector('#display').value;

			document.querySelector('#display').value = result;


			}

			else{

				var result =  document.querySelector('#display').value/this.val;

				document.querySelector('#display').value = result;
			}

			this.screen = "";

			break;
			}
		}
		
	},/*End of the cal func*/

	clean(){
		this.val = "";

		this.calpress = 0;

		this.screen = "";

		document.querySelector('#display').value = "";

	}
}/*End of the myobj*/