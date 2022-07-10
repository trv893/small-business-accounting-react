import Button from "react-bootstrap/Button";

const Navbar = () => {
    const navbarClass ='navbar';
    const btnclasses = 'css-navbtn d-flex flex-column justify-content-around align-items-center';
    const iconclass = 'css-navbtn-icon';
    const spanclass = 'cc-nav-text';

    const navItems = [
            {
                text: 'Customers',
                icon: 'bi-person-circle',
                btnclass: btnclasses,
                iconclass: iconclass,
                spanclass: spanclass,
                link: '/customers',
                onnav: function(){}
            },
            {
                text: 'Invoices',
                icon: 'bi-coin',
                btnclass: btnclasses,
                iconclass: iconclass,
                spanclass: spanclass,
                link: '/invoices',
                onnav: function(){}
            },
            {
                text: 'Proposals',
                icon: 'bi-file-earmark-medical',
                btnclass: btnclasses,
                iconclass: iconclass,
                spanclass: spanclass,
                link: '/proposals',
                onnav: function(){}
            }
    ]


  return (
    <nav className={navbarClass}>
        {
            navItems.map((ni)=>
                (
                    <a key={ni.link} href={ni.link}>
                        <Button  className={`${ni.btnclass}`} key={ni.text} variant="" onClick={ni.onnav}>
                            <i className={`${ni.iconclass} ${ni.icon}`}></i>
                            <span className={`${ni.spanclass}`}>{ni.text}</span>
                        </Button>
                    </a>
                )
            )
        }
    </nav>
  );
};

export default Navbar;
