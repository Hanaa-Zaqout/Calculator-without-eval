/*
add
subtract
multiply
divide
*/
console.log(equation);
function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}
//main function
function operate() {
	//turn the equation into a list of strings
	var equation = display.value; //input
	if (equation != "") {
		var numList = equation.split(" ");
		var a = Number(numList[0]);

		for (i = 1; i < numList.length - 1; i++) {
			var operation = numList[i];
			var b = Number(numList[i + 1]);
			//avoid dividing by zero
			if (operation == "/" && b == 0) {
				calculator.display.value = "";
				alert("you can't divide by zero!!");
				throw new Error("Something went badly wrong!");
			} else {
				switch (operation) {
					case "+":
						a = add(a, b);
						break;
					case "-":
						a = subtract(a, b);
						break;
					case "*":
						a = multiply(a, b);
						break;
					case "/":
						a = divide(a, b);
						break;
				}
			}
		}

		//round the decimal
		var strA = a.toString();
		var newStrA = "";

		if (strA.includes(".")) {
			loc = strA.indexOf(".") + 6;
			for (i = 0; i < loc; i++) {
				newStrA += strA[i];
				if (newStrA[i] >= 5 && i == loc - 1) {
					var last = (1 + Number(strA[i])).toString();
					newStrA += last;
				}
			}
			calculator.display.value = newStrA;
		} else {
			//display the result on the screen
			calculator.display.value = a;
		}
	} else {
		alert("enter Something!");
	}
}

//convert the number the user has typed into the calculator into different currencies:
function ShekelsintoUSDollars() {
	var equation = display.value; //input
	if (equation != "") {
		calculator.display.value = (Number(equation) * 0.29).toString() + "$";
	}
}
function DollarsintoShekels() {
	var equation = display.value; //input
	if (equation != "") {
		calculator.display.value = (Number(equation) * 3.42).toString() + "₪";
	}
}
function ShekelsintoEuros() {
	var equation = display.value; //input
	if (equation != "") {
		calculator.display.value = (Number(equation) * 0.25).toString() + "€";
	}
}
function EurosintoShekels() {
	var equation = display.value; //input
	if (equation != "") {
		calculator.display.value = (Number(equation) * 4.03).toString() + "₪";
	}
}
