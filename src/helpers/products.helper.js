/**
 * Add the existing request query params to url.
 *
 * @param {string} url
 * @param {Object} params
 * @return {string}
 */
function addUrlParameters(url, params) {
  const skip = 10;

  if (params.q) {
    url = `${url}&q=${params.q}`;
  }

  if (params.page) {
    url = `${url}&skip=${skip * (params.page - 1)}`;
  }

  if (params.fields) {
    url = `${url}&select=${params.fields}`;
  }

  return url
}

export {
  addUrlParameters,
}