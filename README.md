# Jamming with the Obstinate Panda 

*This is a project from the CodeCademy Full Stack career path.*
**NOTE** *The initial realease of this project is not finished, some features are not working at time of release*


## Known Issues :

* Search only searches for Artists and returns albums. During learning about how the spotify API calls after I feel like I could do a better job building a new app from the ground up rather than altering this one.
* Some searchs will throw errors, I have only gotten this when trying to search the song "Back in the u.s.s.r." by the Beatles. This only occurred while the punctuation was in place. As a note, punctuation does not normally pose an issue.
* The search results do not clear after you clear the search bar.
* Removing an item from the playlist will add it to the results even if the results include a different artist's albums.
* The 'Save to Spotify' button does nothing - this is intentional as I do not want to add new playlists to my account this way.

*If you have feedback feel free to create a fork and add notes. I can't promise I will alter this app but I wil take those along with my lessons learned on my future projects*

## Features: 

A search feature that will gather songs/albums/artists from spotify and allow a user to create a custom playlist and then save that to spotify for future use.

## How to Use: 

Type the name of the song, artist, or album you want to add to your play list. Select the '+' icon to add the song to the playlist. If you ever want to remove a song from the list you can click the '-' icon on the track and it will remove it from the playlist.  To save the playlist you can rename it by typing over 'New Playlist' and clicking the 'Save to Spotify' button below.

## Technologies used:

 Javascript, React.js

## License

Copyright (c) 2023 Jason Newman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.