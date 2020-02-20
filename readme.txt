First run index.js that gets the server running and responds to the initial get request by sending the challenge as the response.

Then run ngrok http 9001 to take the server online.

Then run yt-notif.js with proper ngrok url to subscribe

Now for each new video uploaded there will be 2 post requests that contain the video id which is being saved.

Go to this url, click on settings and set id and secret as your own and select youtube api,select force ssl and auth (the first 2)
https://developers.google.com/oauthplayground/ 

Get access and refresh token and set them in comment.js


Repo name inspired by Doofenshmirtz
