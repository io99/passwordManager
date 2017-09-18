var argv = require('yargs')
.command('hello','greets the user',function (yargs){
	yargs.options({
		name: {
			demand: true,
			alias: 'n'
			description:'Your first name goes here'
		}
	lastName: {
		demand: true,
		alias: 'l',
		description:'your last name goes here'
	}
	});
})
//this is how u create commands and validate
//command takes 3 arguements 
//first is name, u want the user to type
//quick description of the command
//third is an arguement of a function
//Instead of typing --name Andrew, we can use --name n, thats the use of alias.
.help('help');
//help takes one arguement.help is the only global option
//we can also add help for indiviual commands
.argv;
var command = argv._[0]

console.log(argv); 

if(command === 'hello'&& typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined');
{
	console.log('Hello'+ argv.name + ' '+argv.lastname+'!');
}

if(command==='hello'&& typeof argv.name !== 'undefined'){
console.log('Hello' + argv.name+ '!');
}
else if(command === 'hello'){
	console.log('Hello world');
}











/*.command('hello','Greets the user',function (yargs){
yargs.options({
  name: {
demand:true,
alias:'n',
description: 'Your first name goes here'
    }

});
//options takes one arguement which is an object.

})
//command takes three arguements. The first one is 
//hello
.argv;
.help('help');
*/
//this is called chaining
//var command = argv._[0];
//even this is chaining
/*var argv = require('yargs').argv;
//stores all the arguements passed into the program
//we need to access the .argv property.
var command = argv._[0];
//when we run node example-args.js hello, nothing happens.
//no errors nor anything else.
// after checking with console.log, it returns something esle
//the most impoortant is the underscore key whose value is an array.
//and the array stores all the commands passed in
//in this case the only command passed in is Hello, which we did through the command line
//If we wanted to make our program use this hello command we can 
//do something like this if(argv.[0]=== 'hello'){console.log(Helloworld)}
//output hello world prints
//if we print it without hello, it prints nothing except the underscore key
// what of we want more info from the user?
// What to do that we can use command line arguements once again.
//we can use command line arguements once again.
// if we want a username from the user, then use 
// node example-args.js hello --name Andrew   
//


console.log(argv); 

if(command === 'hello'&&& typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined');
{
	console.log('Hello'+ argv.name + ' '+argv.lastname+'!');
}
if(command==='hello'&& typeof argv.name !== 'undefined'){
console.log('Hello' + argv.name+ '!');
}
else if(command === 'hello'){
	console.log('Hello world');
}

