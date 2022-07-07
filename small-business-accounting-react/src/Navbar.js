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
                link: '#',
                onnav: function(){}
            },
            {
                text: 'Invoices',
                icon: 'bi-coin',
                btnclass: btnclasses,
                iconclass: iconclass,
                spanclass: spanclass,
                link: '#',
                onnav: function(){}
            },
            {
                text: 'Proposals',
                icon: 'bi-chat-text',
                btnclass: btnclasses,
                iconclass: iconclass,
                spanclass: spanclass,
                link: '#',
                onnav: function(){}
            }
    ]


  return (
    <nav className={navbarClass}>
        {
            navItems.map((ni)=>
                (
                    <Button href={`${ni.link}`} className={`${ni.btnclass}`} key={ni.text} variant="" onClick={ni.onnav}>
                        <i className={`${ni.iconclass} ${ni.icon}`}></i>
                        <span className={`${ni.spanclass}`}>{ni.text}</span>
                    </Button>
                )
            )
        }
    </nav>
  );
};

export default Navbar;
