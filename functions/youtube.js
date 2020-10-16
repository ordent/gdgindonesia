import axios from 'axios';

exports.handler = async (event, _, callback) => {
  const {
    queryStringParameters
  } = event;
  const {
    video,
    domain
  } = queryStringParameters;
  const url = `https://www.youtube.com/live_chat?v=${video}&embed_domain=${domain}`
  const result = await axios.get(url);
  const headers = { ...result.headers, 'x-frame-options': undefined };
  callback(null, {
    statusCode: result.status,
    headers: headers,
    body: result.data,
  });
};
