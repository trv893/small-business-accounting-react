// import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/esm/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Moment from 'moment';
// import PopoverBody from 'react-bootstrap/PopoverBody';

const CustomerInvoicesPopoverContent = (customer) => {
  const formatDate = Moment().format("MMM Do YY");
  // console.log(customer.customer.dbo_invoices);
  const invoices = customer.customer.dbo_invoices;
  let invoiceList = invoices.map(item =>
    <li key={item.Id} className='list-group-item'>
        <a className="css-list-item css-invoice-list-item d-flex btn shadow-sm m-1">
            <div className="p-2 col-7">
                <div className="row datarow ">
                    <span className="css-invoice-item-info text-uppercase list-primary">{item.BillToName}</span>
                </div>
                <div className="row datarow">
                    <span>{item.BillToCity}</span>
                </div>
                <div className="row datarow">
                    <span>{Moment(item.InvoiceDate).format("MMM Do YY")}</span>
                </div>
            </div>
            {/* <div className="p-2 d-flex col-5">
                <div className="css-customer-btn-group row">
                    <i className="bi bi-geo-alt"></i>
                        <div className="css-invoice-btn-group col-auto">
                            <i className="bi btn btn-success bi-coin ms-2 shadow"><i class="bi-chevron-down"></i></i>
                        </div>
                        <div className="col-auto">
                            <i className="css-proposal-btn-group bi btn btn-success bi-file-earmark-medical ms-2 shadow"><i class="bi bi-chevron-down"></i></i>
                        </div>
                </div>
            </div> */}
        </a>
    </li>
)
  
  
  return (
    <Popover>
      <Popover.Header as="h3">
        Invoices
      </Popover.Header>
      <Popover.Body>
        {invoiceList}
      </Popover.Body>
    </Popover>
  )};
  
  const CustomerInvoicesPopoverButton = (customer) => (
    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={CustomerInvoicesPopoverContent(customer)}>
      <Button className="bi btn btn-success bi-coin ms-2 shadow">
        <i className="bi-chevron-down"></i>
      </Button>
    </OverlayTrigger>
  );
  

  export default CustomerInvoicesPopoverButton;