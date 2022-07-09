import { useEffect, useState, React } from 'react';
import SearchComponent from '../../SearchComponent'
import invoiceServices from '../../api-service/invoice-api-services';

const Invoices = () => {
    let [invoices, setinvoices] = useState(
        []
    );
    
    useEffect((e) => {
        invoiceServices.getinvoices().then((r) => {
            setinvoices(r.data)
        })
    },[])
    let invoiceList = invoices.map(item =>
        <li className='list-group-item'>
            <a className="css-list-item css-invoice-list-item d-flex btn shadow-sm m-1">
                <div className="p-2 col-7">
                    <div className="row datarow ">
                        <span className="css-invoice-item-info text-uppercase list-primary">{item.BillToName}</span>
                    </div>
                    <div className="row datarow">
                        <span>{item.BillToAddress}</span>
                    </div>
                    <div className="row datarow">
                        <span>{item.BillToCity}</span>
                    </div>
                </div>
                <div className="p-2 d-flex col-5">
                    <div className="css-customer-btn-group row">
                        <i class="bi bi-geo-alt"></i>
                            {/* <div className="css-invoice-btn-group col-auto">
                                <i className="bi btn btn-success bi-coin ms-2 shadow"><i class="bi-chevron-down"></i></i>
                            </div>
                            <div className="col-auto">
                                <i className="css-proposal-btn-group bi btn btn-success bi-file-earmark-medical ms-2 shadow"><i class="bi bi-chevron-down"></i></i>
                            </div> */}
                    </div>
                </div>
            </a>
        </li>
    )
       return(
        <div id="invoices-search-container-css" className="container collapse show main_tab_toggle mx-auto">
            <h1 className="text-center mt-3">
                Invoices
                <i className="bi btn btn-success bi-plus ms-2 shadow"></i>
            </h1>
            <div className="justify-content-end align-content-end mb-3">
                <SearchComponent />
            </div>
            <ul className='list-group css-no-border'>
                {invoiceList}
            </ul>
        </div>
     );
}
 
export default Invoices;