sessionStorage.setItem('Token','11111111')
let session = {};
session.getSession = (key) =>{
  let val = sessionStorage.getItem(key)
  return val;
}
exports.session = session;