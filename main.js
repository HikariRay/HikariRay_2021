function main() {
	const numberToWord = {
	    "1": "One",
	    "2": "Two",
	    "3": "Three",
	    "4": "Four",
	    "5": "Five",
	    "6": "Six",
	    "7": "Seven",
	    "8": "Eight",
		"9": "Nine",
		"0": "Zero",
	}

	// parse numbers from the input
	const args = process.argv.slice(2);
	const result = [];
	for (const arg of args) {
		const convertedNumber = []
		for (const char of arg) {
			convertedNumber.push(numberToWord[char]);
		}
		result.push(convertedNumber.join(""));
	}
	console.log(result.join(","));
}

if (require.main === module) {  
    main();  
} 