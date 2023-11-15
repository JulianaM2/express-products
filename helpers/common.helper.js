function buildResponse(code, data, message) {
  return {
    code,
    data: {
      message,
      data,
    }
  }
}

export {
  buildResponse,
}