console.log("Its working");

let a = "Fizz";
let b = "Buzz";


for (i=0; i<=30; i++) {
	if (i % 15 == 0) {
		console.log(a+b);
	} else  if (i % 5 == 0) {
		console.log(b);
	} else if (i % 3 == 0) {
		console.log(a);
	} else {
		console.log(i);
		}
}
