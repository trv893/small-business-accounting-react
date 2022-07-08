// creates abort controller for stopping fetch during autocomplete
var controller = new AbortController();
var signal = controller.signal;

const failedlogin = function(){
  localStorage.clear();
  window.location = '/';

};

// calls the customer api with the contents of the customer search textbox as a query string
const searchCustomersApi = async () => {
    controller.abort();
    controller = new AbortController();
    signal = controller.signal;
    try {
      var r = await fetch("api/customer?q=" + $("#customer_search").val(), {
        // signal used to abort fetch
        headers: {
          Authorization: "Bearer " + localStorage.getItem("key"),
        },
        signal: signal,
      });
      var rd = await r.json();
      return rd;
    } catch (err) {
      failedlogin();
    }
  };

  const customerServices = {
    getCustomers: searchCustomersApi
  };

  export default customerServices;