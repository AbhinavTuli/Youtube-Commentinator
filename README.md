# YoutubeCommentinator
Automatically posts comments on new Youtube uploads

Instructions to use:-
1. Run index.js that gets the server running and responds to the initial get request by sending the challenge as the response.

2. Run ngrok http 9001 to take the server online.

3. Run yt-notif.js with proper ngrok url to subscribe

4. For each new video uploaded there will be 2 post requests that contain the video id which is being saved.

5. Go to https://developers.google.com/oauthplayground/, click on settings and set id and secret as your own and select youtube api,select force ssl and auth (the first 2)

6. Get access and refresh token and set them in comment.js

7. Run comment.js


