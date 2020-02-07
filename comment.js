var {google} = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2("483334222500-1ju625687e1gogk1gcjp8ka6tn91ln51.apps.googleusercontent.com", "-a6B7uG3ldSwJbHbxOm5sk7D", "https://www.trybotics.com/"),
    ytdapi = google.youtube('v3');

oauth2Client.setCredentials({
  scope: "https://www.googleapis.com/auth/youtube",
  refresh_token: "1//04HlhUekyFL-qCgYIARAAGAQSNwF-L9Irw4AmgMO1wGTbbQJi9SegE1ZaM_QnmzIsVcVAOME4qMSlU5_JFdyiw0Uo3ZHQnsbSOQU",
  access_token:"ya29.Il-6B2jNKfICLNXLTM6S1ooP6tWkBRfNmxk3YbXfpjmrptoGDvvSIz4eF5VILYlJ9uQ5ggbh22bHGJayqwTDTDYz9m8_timZBlf3uFzDBJetozuTJoFKSIOFJuUZT2tcXw",
});
// const accessToken = oauth2Client.getAccessToken();

var params = {
    auth: oauth2Client,
    part: "snippet",
    resource: {
      snippet: {
        channelId: "UCCnE4CSFUcl8VlFE2XgFUZA",
        videoId: "pF2ikE-EF8c",
      topLevelComment: {
        snippet: {
          textOriginal: "First!!"
        }
      }
    }
  }
};


ytdapi.commentThreads.insert(params, function(err, data) {
  if (err) {
      console.log("!!!!!!!!!!!!!!!!!!!")
    console.log(err);
    // res.status(400).send("Error posting comment ");
  }
  else {
    console.log(data);
    // res.status(200).send("Successfully posted comment ");
  }
});

//https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/drive&response_type=code&access_type=offline&redirect_uri=conquest.org.in&client_id=483334222500-1ju625687e1gogk1gcjp8ka6tn91ln51.apps.googleusercontent.com