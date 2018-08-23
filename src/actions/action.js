export  function addMember (value) {
	console.log(value);
  return {
    type: 'ADD_MEMBER',
    value
  }
}

export  function loginRequest (value) {
  return {
    type: 'REQUEST_LOGIN',value
  }
}