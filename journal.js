const Journal = [
	{
		title: 'I love doing sport',
		content:
			'This is mostly important especially for young people. It helps us to stay healthy and keeps us fit.',
	},
	{
		title: 'I wil forgive you',
		content:
			'Listenning to music is one of my favorite activity. I really enjoy it, really often in my free time. My favorite singer is Arion joy.',
	},
	{
		title: 'Everyone is special',
		content:
			'You are only one in life. In  other words, your identity, your humman character, your own life is incomparable in life.',
	},
];
let continueProgram = 'yes';
while (continueProgram === 'yes') {
	let list = Number(
		prompt(
			'Choose (1) for listing all the entries\n Choose (2) for adding a new entry\n Choose (3) for quit\n Choose (4) to delete the last entry in the array'
		)
	);
	if (list === 1) {
		for (let i = 0; i < Journal.length; i++) {
			alert(`Title: ${Journal[i].title}\nContent: ${Journal[i].content}`);
		}
	} else if (list === 2) {
		title = prompt("Enter your new Journal title");
		content = prompt("Enter your new Journal content");
		let newEntry = {
			title: title,
			content: content
		}
		Journal.push(newEntry);
	} else if (list === 4) {
		Jouranl.pop(Jouranl[Journal.length -1]);
	}
	continueProgram = prompt('Do you want to run the program again? (yes, no)');
}


