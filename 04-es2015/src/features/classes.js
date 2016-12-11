export function es5(val) {
  var C = function(hello) {
    this.hello = hello
  }
  C.prototype.say = function() {
    return this.hello
  }

  var o = new C(val)
  return o.say()
}

export function es6(val) {

  class C {
	constructor(word) {
	  this.word = word
	}	

	say() {
	  return this.word
	  }
	}

	var o = new C(val).say()
	return o
}
