/*
Author: Mario Taferner, fhs39954
Date: 08.11.2016

Description: This file checks an given E-mail if it is an valid FH Salzburg e-mail
and returns the degreeProgram, level and graduation year.
*/

export function valid(email) {
	/*
		Any lowercase letters from a to z,
		a dot,
		either mmt- or mma-,
		either b or m,
		exactly 4 digits,
		and the string @fh-salzburg.ac.at 
	*/
	var regex = /[a-z]+\.(mmt-|mma-)(b|m)\d{4}(@fh-salzburg\.ac\.at)/;
	// Test if the email matches the regular Expression
	var test = regex.test(email);
	return test;
}

export function degreeProgram(email) {
	// Check if email is valid
	if (valid(email)) {
		// Check if the email is from MMT or MMA
		var regex = /\.mmt-|\.mma-/;
		// Get the result which is either .mmt- or .mma-
		var course = regex.exec(email)[0];
		// Strip and convert the string to uppercase MMT or MMA
		return (course.slice(1,4).toUpperCase());
	} else {
		return false;
	}
}

export function level(email) {
	// Regular expressions for either mmt or mma Bachelor and Master.
	var baRegex = /[a-z]+\.(mmt-|mma-)(b)\d{4}@(fh-salzburg\.ac\.at)/;
	var maRegex = /[a-z]+\.(mmt-|mma-)(m)\d{4}@(fh-salzburg\.ac\.at)/;

	// If the email is from a bachelor student
	if (baRegex.test(email)) {
		return("BA");
	// If the email is from a master student
	} else if (maRegex.test(email)) {
		return("MA");
	} else {
		return("Neither BA nor MA.");
	}
}

export function graduationYear(email) {
	// Check if email is valid
	if (valid(email)) {
		// get the starting year of the email
		var yearRegex = /\d{4}/;
		// convert the string to integer
		var year = parseInt(yearRegex.exec(email));

		// if the level is Bachelor add 3 years, if it is Master add 2 years
		if (level(email) == "BA") {
			return(year + 3);
		} else if (level(email) == "MA") {
			return(year + 2);
		}
	}
	return false;
}
