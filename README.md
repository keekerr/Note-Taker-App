# Note-Taker-App

## Table of Contents

* [Description](#description)
* [Code Examples](#code-examples)
* [Important links](#important-links)
* [Questions](#questions)

## Description

The purpose of this project was to create an online not taking application where users are able to create and save their notes.


## Code Examples
Example of Code used to delete notes:

```js
const deleteNote = (id) =>
  fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
```
Example of Code used to create new notes.

```js
   function createNewNotes(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray))
        notesArray = [];
    
    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}
```

## Important Links
[GitHub Repository](https://github.com/keekerr/Note-Taker-App)

[Deployed Application](https://thawing-sands-76983.herokuapp.com/notes)

[Video of Deployed Application](https://drive.google.com/file/d/1XTmavQzqR6y9AJVfCh87d7ti5nUmCTBS/view)

## Questions

If you have any questions regarding this project, please feel free to contact me at this email: keeley.s.sprouse@gmail.com

Other examples of projects I have worked on can be viewed on Github via this link: [keekerr](https://github.com/keekerr)