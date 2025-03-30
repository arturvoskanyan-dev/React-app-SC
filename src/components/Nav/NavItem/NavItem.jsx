import "../NavItem/NavItem.css"

function NavItem({nav_item, scroll}) {
    return (
        <div className="nav-items">
            {
                nav_item.map((elem, index) => {
                    return (
                        <div className="nav-item" key={index}>
                            <li onClick={() => scroll(elem)}>{elem}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavItem