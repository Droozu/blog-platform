import Error from './error-code';

const baseURL = `https://conduit.productionready.io/api`;

async function getResponse(URL, body = {}) {
  const response = await fetch(URL, body);
  if (!response.ok && response.status !== Error.VALIDATION) throw new Error();
  return response.json();
}

export { baseURL, getResponse };
