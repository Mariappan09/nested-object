const person={
		first_name:'monica',
		last_name:'geller',
		phone:'915-996-9739',
		email:'monica@gmail.com',
		address:{
			street:{
						street_num:'495',
						street_name:'grove strret',
						},
			city:'NEW YORK',
			country:'USA',
		},
};
for(let a in person){
	if(person[a] instanceof Object){
		for(let b in person[a]){
		if(person[a][b] instanceof Object){
			for(let c in person[a][b]){
			document.write(`${a} ==> ${person[a][b][c]} <br>`);
		}
	}
	else{
		document.write(`${b} ==> ${person[a][b]}<br>`);
}
	}
	}
else{
	document.write(`${a} ==> ${person[a]}<br>`);
}
}