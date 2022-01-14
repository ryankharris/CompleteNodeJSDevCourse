# notes-app
Basic command line util that parses CLI arguments and uses file-IO to update a json store.

## Usage
Add an entry to the store with title "dogs" and body "make good pets":

    ./app.js add --title dogs --body "make good pets"

List the entries in the notes app:

    ./app.js list

Read the entry with title "dogs":

    ./app.js read --title "dogs"

Remove the entry with title "dogs":

    ./app.js remove --title "dogs"
