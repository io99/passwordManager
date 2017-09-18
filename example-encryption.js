var crypto = require('crypto-js');

var secretMessage = 'I hid the clips under the couch';
var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
//encrypt takes two arguements, message and key
console.log('encryptedMessage:'+ encryptedMessage);
//decrypting below

var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log('Decrypted message'+ decryptedMessage);
console.log(secretMessage.secretName);

//

var secretMessage = {
	name:'Andrew',
	secretName: '007'

 //task, encrypt takes only a string , doesn't know what an object.
 var secretMessageJSON = JSON.stringify(json);

 //decrypt only returns a string.

//#3


var crypto = require('crypto-js');

var secretMessage = 'I hid the clips under the couch';
var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
//Encrypt only takes a string.It doesn't know how to work with an object
//decrypt only returns an object. It Doesn't know how to take that string and turn back into an object

console.log('encryptedMessage:'+ encryptedMessage);


var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
//turned to a string here
console.log('Decrypted message'+ decryptedMessage);
console.log(decryptedMessage.secretName);


var crypto = require('crypto-js');
var secretMesage = 'Check the wallet under the bed';
var secretKey = 'Fuckthisshit99';


var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage),secretMessage);
console.log('The encrypted Message is' + encryptedMessage);

 

var crypto = require('crypto-js');

var secretMessage = 'check the 78th line of my favorite book';
var password = 'thisissomerealshit??840'

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), password);
console.log('the encrypted message is'+ encryptedMessage);


var crypto - require('crypto-js');

var secretMessage = 'check the 66th line of my favorite book';
var password = 'holyfuck';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), password);


var decrypt = crypto.AES.decrypt(JSON.parse(encryptedMessage), passoword);
console.log('The decrypted Message is '+ decryptedMessage);





var crypto = require('crypto-js');

var secretMessage = "my name is Anthony gonzalez";
var secretKey = 'pedro99';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), password);






























































































