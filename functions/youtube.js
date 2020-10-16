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
  delete result.headers['x-frame-options']
  callback(null, {
    statusCode: result.status,
    headers: result.headers,
    body: result.data,
  });
};
