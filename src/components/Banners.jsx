const Banners = () => {
    return (
        <div className="special-slide">
            <div className="container"> 
                <div className="biolife-service type01 biolife-service__type01 sm-margin-top-0 xs-margin-top-45px" style={{marginTop:"20px"}}>
                        <b className="txt-show-01" style={{marginBottom:"70px"}}>100%Nature</b>
                        <i className="txt-show-02" style={{paddingTop:"120px"}} >Fresh Fruits & Vegetables</i>
                        <ul className="services-list" style={{paddingTop:"20px"}}>
                            <li>
                                <div className="service-inner color-reverse">
                                    <span className="number">1</span>
                                    <span className="biolife-icon icon-beer"></span>
                                    <a className="srv-name" href="#">full stamped product</a>
                                </div>
                            </li>
                            <li>
                                <div className="service-inner color-reverse">
                                    <span className="number">2</span>
                                    <span className="biolife-icon icon-schedule"></span>
                                    <a className="srv-name" href="#">place and delivery on time</a>
                                </div>
                            </li>
                            <li>
                                <div className="service-inner color-reverse">
                                    <span className="number">3</span>
                                    <span className="biolife-icon icon-car"></span>
                                    <a className="srv-name" href="#">Free shipping in the city</a>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Banners;