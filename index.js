// @flow
var bla = require('./bla');

var str: string = 'hello world!';

function text(arg: string) {
    return "Hello world";
}

text(str);

bla(str);

function test() {
    return (
	<div>
	    "hello world"
	</div>
    );
}
