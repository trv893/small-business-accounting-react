import SearchComponent from './SearchComponent'

const Customers = () => {
    return ( 
        <div id="customers-search-container-css" className="container collapse show main_tab_toggle mx-auto">
            <h1 className="text-center mt-3">
                Customers
                <i className="bi btn btn-success bi-plus ms-2 shadow" data-bs-toggle="modal" data-bs-target="#newcustomerModal"></i>
            </h1>
                <div className="justify-content-end align-content-end mb-3">
                    <SearchComponent />
                </div>
                <div id="customerlist">
                    {/* <li>
                        <a className="d-flex btn btn-light shadow-sm m-1 EditCustomer" onclick="editCustomer(this)" id="" data-customer-id='' data-bs-toggle="modal" data-bs-target="#editcustomerModal">
                            <div className="p-2 col-9">
                                <div className="row datarow ">
                                    <span className="text-uppercase list-primary"> </span>
                                </div>
                                <div className="row datarow">
                                    <span>  </span>
                                </div>
                            </div>
                            <div className="p-2 d-flex col-3">
                                <div className="row">
                                    <div className="col">
                                        <i onclick="location.href='tel:'" className="bi btn btn-success bi-telephone ms-2 shadow">&nbsp;</i>
                                        <i onclick="newproposalshow(this)" data-new-customer-id="" data-proposal-customer-name=" " className="bi btn btn-success bi-file-earmark-medical ms-2 shadow" data-bs-toggle="modal" data-bs-target="#newProposalModal">&nbsp;</i>
                                        <i onclick="newinvoiceshow(this)" data-new-invoice-customer-id="" data-invoice-customer-name=" " className="bi btn btn-success bi-coin ms-2 shadow" data-bs-toggle="modal" data-bs-target="#newInvoiceModal">&nbsp;</i>
                                    </div>
                                </div>
                            </div>
                        </a>
                    <li> */}
                </div>
        </div>
     );
}
 
export default Customers;