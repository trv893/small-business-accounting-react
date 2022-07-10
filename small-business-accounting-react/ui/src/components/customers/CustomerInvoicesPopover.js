// import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/esm/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
// import PopoverBody from 'react-bootstrap/PopoverBody';

const CustomerInvoicesPopoverContent = (customer) => {
  
  // console.log(customer);
  
  
  
  return (
    <Popover>
      <Popover.Header as="h3">
        Invoices
      </Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
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