console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();


var argv = require('yargs')
.command('Create','Account creator',function (yargs){
	yargs.options({
		name: {
			demand: true,
			alias: 'n'
			description:'Enter your name here'
			type:'string'
		
		}
	username: {
		demand: true,
		alias: 'u',
		description:'Account username or email'
		type:'string'
	
	}

	password: {
		demand:true,
		alias:'p'
		description:'Account password'
		type:'string'
	},
	masterPassword: {

		demand: true,
		alias: 'm',
		description:'master password',
		type:'string'
	}
	}).help('help');
})
.command('get','Get an existing account',function (yargs){
yargs.options({
		name: {
			demand: true,
			alias: 'n'
			description:'Enter your name here'
			type:'string'
		},
		masterPassword: {

		demand: true,
		alias: 'm',
		description:'master password',
		type:'string'
	}

	
})
.help('help');
.argv;



function getAccounts(masterPassword){
	//getItemSync to fetch accounts
	//decrypt 
	//return accounts array
	var accounts[];
	if(typeof encryptedAccount !== 'undefined'){

var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
var accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
}

return accounts;
}
function saveAccounts(accounts,masterPassword){
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts),masterPassword)
	//encrypt accounts
	//setItemsync
	//when u encrypt u end up with string
	//return accounts
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);

	storage.setItemSync('accounts', encryptedAccounts.toString());
	return accounts;


}
//used to create accounts.
function createAccount(account, masterPassword){
var accounts = getAccounts(masterPassword);
accounts.push(account);

}
accounts.push(account);

saveAccounts(accounts, masterPassword)
return account;


function getAccount(accountName, masterPassword){
var accounts = getAccounts(masterPassword);
var matchedAccount;

accounts.forEach(function(account){
if(account.name === accountName){
	matchedAccount = account;
}

});

return matchedAccount;
}
if(command==='create'){
var createAccount = createAccount({
	//the reason we are creating a var here is so that everythin
	name:argv.name,
	username:argv.username,
	password:argv.password
}
argv.masterPassword);
);
//takes in an account object
}
else if(command==='get'){
	var fetchedAccount = getAccount(argv.name,argv.masterPassword);
	if(typeof fetchedAccount ==='undefined'){
		console.log('Account not found');
	}else
	{
		console.log('Account found');
        console.log(fetchedAccount);
	}
}


















