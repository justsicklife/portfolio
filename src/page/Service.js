const Service = ({ servicePageRef }) => {
    return (
        <li
            ref={servicePageRef}
            className="service page page1">
            <div className="vertical-align">
                <div className="container">
                    <div className="row flex-direction-column">
                        <div className="service-preface">
                            <h4>안녕하세요 프론트엔드 개발자 정하형 입니다.</h4>
                        </div>
                        <ul className="service-list">
                            <li className="service-box service-box0 row">
                                <div className="service-icon">
                                    <span><i className="fas fa-users"></i></span>
                                </div>
                                <div className="service-title">
                                    <h3>팀워크</h3>
                                </div>
                                <div className="service-description">
                                    <p>팀원들과 의논하고 소통하면서 무엇을 개발하는 일을 즐깁니다.</p>
                                </div>
                            </li>
                            <li className="service-box service-box1 row">
                                <div className="service-icon">
                                    <span><i className="fas fa-laptop-code"></i></span>
                                </div>
                                <div className="service-title">
                                    <h3>최적화</h3>
                                </div>
                                <div className="service-description">
                                    <p>사용자의 메모리를 최소한으로 사용할수 있게 항상 고민합니다.</p>
                                </div>
                            </li>
                            <li className="service-box service-box2 row">
                                <div className="service-icon">
                                    <span><i className="fas fa-magic"></i></span>
                                </div>
                                <div className="service-title">
                                    <h3>친숙한 디자인</h3>
                                </div>
                                <div className="service-description">
                                    <p>사용자들에게 편안하고 친숙한 디자인에 관심이 많습니다.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Service;