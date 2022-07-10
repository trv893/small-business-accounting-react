import { useEffect, useState, React } from 'react';
import SearchComponent from '../../SearchComponent'
import customerServices from '../../api-service/customer-api-services';
import CustomerInvoicesPopoverButton from './CustomerInvoicesPopover';

const Customers = () => {
    let [customers, setCustomers] = useState(
        []
    );
    
    useEffect((e) => {
        customerServices.getCustomers().then((r) => {
            setCustomers(r.data)
        })
    },[])
    let customerList = customers.map(item =>
        
        <li key={item.Id} className=' list-group-item'>
            <a className="css-list-item css-customer-list-item d-flex btn shadow-sm m-1">
                <div className="p-2 col-7">
                    <div className="row datarow ">
                        <span className="css-customer-item-info text-uppercase list-primary">{item.FirstName} {item.LastName}</span>
                    </div>
                    <div className="row datarow">
                        <span>{item.Address}&nbsp;<i className="bi bi-geo-alt"></i></span>
                    </div>
                </div>
                <div className="p-2 d-flex col-5">
                    <div className="css-customer-btn-group row">
                            <i className="col-auto bi btn btn-success bi-telephone ms-2 shadow">&nbsp;</i>
                            <div className="css-invoice-btn-group col-auto">
                            <CustomerInvoicesPopoverButton customer={item}/>
                            </div>
                            <div className="col-auto">
                                <i className="css-proposal-btn-group bi btn btn-success bi-file-earmark-medical ms-2 shadow"><i className="bi bi-chevron-down"></i></i>
                            </div>
                    </div>
                </div>
            </a>
        </li>
    )
       return(
        <div id="customers-search-container-css" className="container collapse show main_tab_toggle mx-auto">
            <h1 className="text-center mt-3">
                Customers
                <i className="bi btn btn-success bi-plus ms-2 shadow"></i>
            </h1>
            <div className="justify-content-end align-content-end mb-3">
                <SearchComponent />
            </div>
            <ul className='list-group css-no-border'>
                {customerList}
            </ul>
        </div>
     );
}
 
export default Customers;