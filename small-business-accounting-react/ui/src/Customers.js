import { useEffect, useState, React } from 'react';
import SearchComponent from './SearchComponent'
import customerServices from './api-service/customer-api-services';

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
        <li className='list-group-item'>
            <a className="css-customer-list-item d-flex btn shadow-sm m-1">
                <div className="p-2 col-9">
                    <div className="row datarow ">
                        <span className="css-customer-item-info text-uppercase list-primary">{item.FirstName} {item.LastName}</span>
                    </div>
                    <div className="row datarow">
                        <span>{item.Address}</span>
                    </div>
                </div>
                <div className="p-2 d-flex col-3">
                    <div className="row">
                        <div className="col">
                            <i className="bi btn btn-success bi-telephone ms-2 shadow">&nbsp;</i>
                            <i className="bi btn btn-success bi-file-earmark-medical ms-2 shadow">&nbsp;</i>
                            <i className="bi btn btn-success bi-coin ms-2 shadow">&nbsp;</i>
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