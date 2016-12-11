export function es5(cb) {
  setTimeout(function() {
    cb(null, 10)
  }, 1)
}

export function es6() {
	return new Promise((res, rej) => res(cb(null, 10)))
}
