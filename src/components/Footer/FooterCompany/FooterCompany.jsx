function FooterCompany({company}) {
  return (
    company.map((elem, index) => {
        return (
            <div className="footer-item" key={index}>
                <a href="">{elem}</a>
            </div>
        )
    })
  )
}

export default FooterCompany