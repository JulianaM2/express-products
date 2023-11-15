/**
 * Build a common service response.
 *
 * @param {number} code Response status code
 * @param {Object} data Respone data to be sent
 * @param {string} message Response message to inform
 * @return {Object} Returns object with code, data and message
 */
function buildResponse(code, data, message) {
  return {
    code,
    data: {
      message,
      data,
    },
  };
}

export { buildResponse };
