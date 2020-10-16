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
  const customHeaders = {...result.headers, 'x-frame-options': null};
  callback(null, {
    statusCode: result.status,
    headers: customHeaders,
    body: result.data,
  });
};
