// creates abort controller for stopping fetch during autocomplete
const axios = require('axios').default;

var controller = new AbortController();
var signal = controller.signal;

const failedlogin = function(){
  localStorage.clear();
  window.location = '/';

};

// // calls the invoice api with the contents of the invoice search textbox as a query string
// const searchinvoicesApi = async () => {
//     controller.abort();
//     controller = new AbortController();
//     signal = controller.signal;
//     try {
//       var r = await fetch("api/invoice?q=", {
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

  // calls the invoice api with the contents of the invoice search textbox as a query string
const searchinvoicesApi = async () => {
  controller.abort();
  controller = new AbortController();
  signal = controller.signal;
  try {
    return axios.get("http://localhost:3001/api/invoice?q=")
  } catch (err) {
    console.log(err)
  }
  
  
};

  const invoiceServices = {
    getinvoices: searchinvoicesApi
  };

  export default invoiceServices;