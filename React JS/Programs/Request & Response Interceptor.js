import axios from 'axios';
axios.interceptors.request.use( req => {
  req.meta = req.meta || {}
  req.meta.requestStartedAt = new Date().getTime();
  return req;
});

axios.interceptors.response.use(res => {
  res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt
  return res;
},
err => {
  err.durationInMs = new Date().getTime() - err.config.meta.requestStartedAt
  throw err;
});

(async () => {
  try {
    const headers = { Accept: 'application/json', 'Accept-Encoding': 'identity' };
    const githubUserName = 'abraham';

    const url = `https://api.github.com/users/${githubUserName}`;
    console.log(`Sending a GET reqeust to: ${url}`);
    const { data, durationInMs } = await axios.get(url, { headers });    
    console.log(`Github username ${githubUserName} has real name: ${data?.name} and works at ${data?.company}`,);
    console.log(`Successful response took ${durationInMs} milliseconds`);

    //the below request will fail
    const nonExistinggithubUserName = 'thisUserShouldNotBeOnGithub';
    const failingUrl = `https://api.github.com/users/${nonExistinggithubUserName}`;
    console.log(`Sending a GET reqeust to: ${failingUrl}`);
    const response = await axios.get(failingUrl, headers);
    console.log(response.data); //it will never reach here as get will hit a 404, it will go to the catch part
  } catch(err) {
    console.log(`Error message : ${err.message} - `, err.code);
    console.log(`Error response took ${err.durationInMs} milliseconds`);
  }
})();
