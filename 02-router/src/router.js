import $ from 'jquery'

const routes = new Map();


function goto(path) {

	// changes the url in the browser
	var stateObj = { pathname: path }
	history.pushState(stateObj, '', path)

	// compares if there is a route which is equal of the current path
	for (const [route, fn] of routes.entries()) {

		let pathSplit = path.split('/')
		let routeSplit = route.split('/')


		if (routeSplit[1] == pathSplit[1]) {
			let params = pathSplit.splice(2, pathSplit.length)
			return fn(...params)
		}

	}

	// checks if the path has an assigned function and
	// calls the functions which render the template
	if ($.isFunction(routes.get(path))){
		routes.get(path)()
	}

	// if no assigned function is found, show the error page
	if (routes.has('*')) {
		return routes.get('*')()
	}

}


function init() {

	let path = window.location.pathname
	goto(path)

	// Gets all desired links and binds the goto function to it
	let links = $('a:not([target="_blank"], [rel="external"], [rel="download"], [download], [href^="http://"], [href^="https://"])')

	links.click(function(e){
		e.preventDefault()
      	goto(e.target.pathname)
	})

}


export default function(route, fn) {

	// if route has params
	if (route && fn) {
		routes.set(route, fn)
	}

	// if route has no params
	else {
		init()
	}

}