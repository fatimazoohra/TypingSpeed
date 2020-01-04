
var speed=document.querySelectorAll('span');
var text=document.getElementById('text');
var btn=document.getElementById('btn');

	var sec=0;
	var min=0;
	var hour=0;
	var t;

	function run(){
		sec+=1;

		speed[0].innerText = hour+' h';
		speed[1].innerText = min+' min';
		speed[2].innerText = sec+' s';
		
		
		if(sec>=60){
			min+=1;
			sec=0;
		}
		if(min>=60){
			hour+=1;
			min=0;
		}
	}
	function StartChrono(){
		
		t = setInterval(run,1000);
	}

	function Redemarrer(){
		t=null;
		t = clearInterval(t);
		speed[0].innerHTML = 0+' h';
		speed[1].innerHTML = 0+' min';
		speed[2].innerHTML = 0+' s';
		text.value = 'retapez ici';
	}


















// const prod1=(a,b) => a*b;
// prod1(3,4);


// const prod2=(a) => (b) =>a*b;
// prod2(3);
// prod2(3)(4);

// const comp= (f,g) => (a) => f(g(a));
// let somme=(n) = (n) =>n+1;
// comp(somme,somme)(3);



// const a=[2,5,4,7,8,6];
// let b = a.filter((a) => n%2===0);