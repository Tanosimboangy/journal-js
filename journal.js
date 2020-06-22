// This is my main journal array.
const Journal = [
	{
		title: 'I love doing sport',
		content:
			"This is mostly important especially for young people. It helps us to stay healthy and keeps us fit.",
	},
	{
		title: 'I wil forgive you',
		content:
			"Listenning to music is one of my favorite activity. I really enjoy it, really often in my free time. My favorite singer is Arion joy.",
	},
	{
		title: 'Everyone is special',
		content:
			"You are only one in life. In  other words, your identity, your humman character, your own life is incomparable in life.",
   },
   {
	   title: 'I wil please you',
	   content:
		   "Reading book is one of my favorite activity. I really enjoy it, really often in my free time. My favorite book is the bible.",
   },
   {
	   title: 'I manage you',
	   content:
		   "This is very crucial especially for young people. It helps us to stay healthy and keeps us fit.",
   },
];

// This function will list all the entries from the journal
const listEntries = () => {
	for (let i = 0; i < Journal.length; i++) {
		let entryString = `Title : ${Journal[i].title}
Content : ${Journal[i].content}`;
		alert(entryString);
	}
};
// This function will add a new entry to the journal array
const addNewEntry = () => {
	const entryTitle = prompt('What is the title of your entry?');
	const entryContent = prompt('What is the content?');
	let entry = {
		title: entryTitle,
		content: entryContent,
	};
	Journal.push(entry);
	return;
};
// This is my menu string, that we will pass to the prompt call
const menuString = `Welcome to my Onja Journal! 📕
Choose (1) for listing all the entries.
Choose (2) for adding a new entry.
Choose (3) to quit.
Choose (4) to delete the last entry.
Choose (5) to delete a specific entry. (with its index)
`;
let menuChoice = Number(prompt(menuString));
// We run the program until the user enters 3 (the quit option)
while (menuChoice !== 3) {
	switch (menuChoice) {
		case 1:
			listEntries();
			break;
		case 2:
			addNewEntry();
			break;
		case 4:
			const entryDeleted = Journal.pop();
			alert(`We deleted the last entry : ${entryDeleted.title}`);
			break;
		case 5:
			let indexToDelete = Number(
				prompt(`Enter the entry's index to delete (1 to ${Journal.length})`)
			);
			let deletedEntry = Journal.splice(indexToDelete--, 1);
			console.log(deletedEntry);
			alert(`You just deleted ${deletedEntry[0].title}`);
			break;
		default:
			alert('Please enter a correct choice. (1,2,3,4,5)');
	}
	menuChoice = Number(prompt(menuString));
}
// Here, this is the end of the program. It's the last instruction.
alert('Thank you for using my program');