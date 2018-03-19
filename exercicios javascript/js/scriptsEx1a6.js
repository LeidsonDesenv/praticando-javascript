
	var today = new Date();
	var days = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();
  document.querySelector("#dia").innerHTML += " " + days[ today.getDay() ];
	//document.getElementById("dia").innerHTML += " " + days[ today.getDay() ];
	document.querySelector("#hora").innerHTML = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	document.querySelector("#fulldate").innerHTML = day + "-"+ month + "-" + year;

//function que move uma animação da esquerda para a direita
  document.querySelector("#btnAnimation").addEventListener('click', moveBox);
	function moveBox(){
		let  anime = document.getElementById("animation");
		let itemPosition = 0;
		let id = setInterval(frame, 5);
		function frame(){
			if(itemPosition == 450){
				clearInterval(id);
			}
			else{
				itemPosition++;
				anime.style.left = itemPosition + "px";
			}
		}
	}
 /*function  que retorna o ano onde Janeiro começa em uma segunda
@param startYear ano inicial do intervalo
@param endYear ano final do intervalo
 */
	function getJanuaryStartInMonday(startYear, endYear){
		var years = "";
		for (var year = startYear; year <= endYear; year++) {
			var day = new Date(year, 0, 1);
			if(day.getDay() === 1){
				years += "Janeiro do ano "+ year + " começa em uma segunda\n";
			}
		}
		alert(years);
	}
//gera um número aleatório de 0 a 10 e compara com o informado pelo usuário
  document.querySelector("#btnPalpite").addEventListener('click', compareRandomNumber);
	function compareRandomNumber(){
		var shot = prompt("Digite seu palpite");
		var number = Math.floor(Math.random() * 10);
		if(shot == number){
			alert("Acertou Miserávi");
		}else {
			alert("Caiu no numero "+ number +"\nMais sorte na próxima vez");
		}
	}

	/*calcula quantos dias falta até o natal
	@param result retorna o valor para um campo de texto informado pelo usuário
	*/
  document.querySelector("#btnNatal").addEventListener('click', function(){ howManyDayUntilChristmas('resposta') });
	function howManyDayUntilChristmas(result){
		var today = new Date();
		var christmasDay = new Date(today.getFullYear() , 11, 25);
		var one_day = 1000 * 60 * 60 * 24;
		var remainingDays = Math.ceil( (christmasDay.getTime() - today.getTime() ) / one_day );
		document.getElementById(result).innerHTML = "Faltam " + remainingDays + " dias para o natal";
	}

	/*calcula de várias formas 2 numeros
@param number1 primeiro numero para calculo
@param number2 segundo numero para calculo
@parm text texto de retorno
	*/
	function calcManyWays(number1 , number2, text){

			var num1 = document.getElementById(number1).value;
			var num2 = document.getElementById(number2).value;
			if(isNaN(num1) || isNaN(num2)){
				document.getElementById(text).innerHTML = "O valores precisam ser numéricos";
			}
			else{
				var resultSum = parseFloat(num1) + parseFloat(num2);
				var resultSub =  parseFloat(num1) - parseFloat(num2);
				var resultMult =  parseFloat(num1) * parseFloat(num2);
				var resultDiv = 0;
				if(num2 != 0){
					 resultDiv = parseFloat(num1) / parseFloat(num2);
				}else {
					resultDiv = "Obs.: Impossível divisão por 0";
				}
				document.getElementById(text).innerHTML ="A soma é "+resultSum +
				", a subtração é "+ resultSub +
				", a multiplicação é "+ resultMult +
				", e a divisão é "+ resultDiv;
		}
	}
