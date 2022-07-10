import { useEffect, useState, React } from 'react';
import SearchComponent from '../../SearchComponent'
import proposalServices from '../../api-service/proposal-api-services';

const Proposals = () => {
    let [proposals, setproposals] = useState(
        []
    );
    
    useEffect((e) => {
        proposalServices.getproposals().then((r) => {
            setproposals(r.data)
        })
    },[])
    let proposalList = proposals.map(item =>
        <li className='list-group-item'>
            <a className="css-list-item css-proposal-list-item d-flex btn shadow-sm m-1">
                <div className="p-2 col-7">
                    <div className="row datarow ">
                        <span className="css-proposal-item-info text-uppercase list-primary">{item.JobName}</span>
                    </div>
                    <div className="row datarow">
                        <span>{item.BillToAddress}</span>
                    </div>
                    <div className="row datarow">
                        <span>{item.Proposal_Customer_dbo_customer.FirstName} {item.Proposal_Customer_dbo_customer.LastName}</span>
                    </div>
                </div>
                <div className="p-2 d-flex col-5">
                    <div className="css-customer-btn-group row">
                        <i className="bi bi-geo-alt"></i>
                            {/* <div className="css-proposal-btn-group col-auto">
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
        <div id="proposals-search-container-css" className="container collapse show main_tab_toggle mx-auto">
            <h1 className="text-center mt-3">
                Proposals
                <i className="bi btn btn-success bi-plus ms-2 shadow"></i>
            </h1>
            <div className="justify-content-end align-content-end mb-3">
                <SearchComponent />
            </div>
            <ul className='list-group css-no-border'>
                {proposalList}
            </ul>
        </div>
     );
}
 
export default Proposals;