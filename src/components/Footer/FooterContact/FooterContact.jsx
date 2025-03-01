function FooterContact({contact}) {
  return (
    contact.map((elem, index) => {
        return (
            <div className="footer-item" key={index}>
                <a href=""><img src={`../../../public/${elem.img}.png`} /> {elem.info}</a>
            </div>
        )
    })
  )
}

export default FooterContact