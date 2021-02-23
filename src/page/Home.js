const Home = ({ homePageRef }) => {
    return (
        <li
            ref={homePageRef}
            className="home page page0 active">
            <div className="vertical-align">
                <div className="container">
                    <div className="introduce row flex-direction-column ">
                        <div className="introduce-name">
                            <h5>정하형</h5>
                        </div>
                        <div className="introduce-title">
                            <h1>저는 유쾌한 프론트엔드 개발자 입니다.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Home;