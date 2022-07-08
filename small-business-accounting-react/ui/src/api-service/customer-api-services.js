// creates abort controller for stopping fetch during autocomplete
const axios = require('axios').default;

var controller = new AbortController();
var signal = controller.signal;

const failedlogin = function(){
  localStorage.clear();
  window.location = '/';

};

// // calls the customer api with the contents of the customer search textbox as a query string
// const searchCustomersApi = async () => {
//     controller.abort();
//     controller = new AbortController();
//     signal = controller.signal;
//     try {
//       var r = await fetch("api/customer?q=", {
//         // signal used to abort fetch
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("key"),
//         },
//         signal: signal,
//       });
//       var rd = await r.json();
//       return rd;
//     } catch (err) {
//       failedlogin();
//     }
//   };

  // calls the customer api with the contents of the customer search textbox as a query string
const searchCustomersApi = async () => {
  controller.abort();
  controller = new AbortController();
  signal = controller.signal;
  return axios.get("http://localhost:3001/api/customer?q=")
  
};

  const customerServices = {
    getCustomers: searchCustomersApi
  };

  export default customerServices;