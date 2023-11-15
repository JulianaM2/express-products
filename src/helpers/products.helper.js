/**
 * Add the existing request query params to url.
 *
 * @param {string} url Base url to add the query params
 * @param {Object} params Query params with attributes q, page and fields
 * @return {string} Returns the URL with the query params
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
