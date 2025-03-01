import "../NavItem/NavItem.css"

function NavItem({nav_item}) {
    return (
        <div className="nav-items">
            {
                nav_item.map((elem, index) => {
                    return (
                        <div className="nav-item" key={index}>
                            <a href="">{elem}</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavItem