import { useEffect, useState } from 'react';
import SearchComponent from './SearchComponent'
import customerServices from './api-service/ui-api-service';

const Customers = () => {
    const [customers, setCustomers] = useState([
        null
    ]);
    
    useEffect(() => {
        customerServices.getCustomers().then((r) => {
            setCustomers(r)
        }, [])
    })
    return ( 
        <div id="customers-search-container-css" className="container collapse show main_tab_toggle mx-auto">
            <h1 className="text-center mt-3">
                Customers
                <i className="bi btn btn-success bi-plus ms-2 shadow"></i>
            </h1>
            <div className="justify-content-end align-content-end mb-3">
                <SearchComponent />
            </div>
            <ul className='list-group css-no-border'>
                <li className='list-group-item'>
                    <a className="css-customer-list-item d-flex btn shadow-sm m-1">
                        <div className="p-2 col-9">
                            <div className="row datarow ">
                                <span className="css-customer-item-info text-uppercase list-primary"></span>
                            </div>
                            <div className="row datarow">
                                <span></span>
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
            </ul>
        </div>
     );
}
 
export default Customers;