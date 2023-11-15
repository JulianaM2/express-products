/**
 * Add the existing request query params to url.
 *
 * @param {string} url
 * @param {Object} params
 * @return {string}
 */
function addUrlParameters(url, params) {
  const skip = 10;

  const search = params.q ? `search?q=${params.q}&` : '?';

  url = `${url}${search}limit=10`;

  if (params.page && params.page > 0) {
    url = `${url}&skip=${skip * (params.page - 1)}`;
  }

  if (params.fields) {
    url = `${url}&select=${params.fields}`;
  }

  return url;
}

export { addUrlParameters };
