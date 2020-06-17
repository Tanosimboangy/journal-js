//  this is my main journal array
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
	{
		title: 'I wil please you',
		content:
			'Reading book is one of my favorite activity. I really enjoy it, really often in my free time. My favorite book is the bible.',
	},
	{
		title: 'I manage you',
		content:
			'This is very crucial especially for young people. It helps us to stay healthy and keeps us fit.',
	},
 ];
//  this function will list all the entries from the journal
const menuString = `Welcome to my Onja Journal! 📕
 Choose (1) for listing all the entries,
 Choose (2) for adding a new entry
 Choose (3) for quit
 Choose (4) to delete the last entry in the array
 Choose (5) for deleting an element
 `;
//  this function will add a new entry to the journal array
 const listEntries = () => {
 	for (let i = 0; i < journal.length; i++) {
 		let entryString = `Title : ${journal[i].title}
 Content : ${journal[i].content}`;
 		alert(entryString);
 	}
 };
// this function will add a new entry to the journal array
const addNewEntry = () => {
	const entryTitle = prompt("Enter your new Journal title");
	const entryContent = prompt("Enter your new Journal content");
	let entry = {
		title: entryTitle,
		content: entryContent
	}
	Journal.push(entry);
	return;
};

let menuChoice = prompt(menuString);

//  we run the program until the user enters 3 (the quit option)
while (menuChoice !== 3) {
	switch (menuChoice) {
		case 1:
			listEntries();
			break;
		case 2:
			addNewEntry();
			break;
		case 4:
			const entryDeleted = journal.pop();
				alert(`We deleted the last entry : ${entryDeleted.title}`);
			break;
		case 5:
			let indexToDelete = Number(
				prompt(`Enter the entry's index to delete (1 to ${journal.length})`)
			);
			let deletedEntry = journal.splice(indexToDelete--, 1);
			console.log(deletedEntry);
			alert(`You just deleted ${deletedEntry[0].title}`);
			break;
		default:
			alert('Please enter a correct choice. (1,2,3,4,5)');
		}
		menuChoice = Number(prompt(menuString));
			break; 
}
alert('Thank you for using my program');
//  here, this is the end of the program. It's the last instruction.