const Stack = ({ stackPageRef, counterArray, progressBarArray, stackPhoto }) => {
    return (
        <li
            ref={stackPageRef}
            className="stack page page2">
            <div className="vertical-align">
                <div className="container">
                    <div className="row align-items-center stack-row">
                        <div className="photo">
                            <div className="photo-inside">
                                <img src={stackPhoto}></img>
                            </div>
                        </div>
                        <div className="stack-wrap">
                            <div className="stack-title">
                                <h4>저는 최적화 와 친밀한 디자인을 중요시 여기면서 웹 사이트를 만드는 것을 즐겨합니다.</h4>
                            </div>
                            <ul className="progress-bar-list">
                                <li className="progress-bar-wrap">
                                    <div className="progress-bar-title">
                                        <h5>
                                            자바스크립트 <span
                                                ref={counterArray[0]}
                                                className="counter">87</span>
                                        </h5>
                                    </div>
                                    <div className="progress-bar progress-bar00">
                                        <span ref={progressBarArray[0]} ></span>
                                    </div>
                                </li>
                                <li className="progress-bar-wrap">
                                    <div className="progress-bar-title">
                                        <h5>
                                            html <span
                                                ref={counterArray[1]}
                                                className="counter">70</span>
                                        </h5>
                                    </div>
                                    <div className="progress-bar progress-bar01">
                                        <span ref={progressBarArray[1]}></span>
                                    </div>
                                </li>
                                <li className="progress-bar-wrap">
                                    <div className="progress-bar-title">
                                        <h5>
                                            css <span ref={counterArray[2]} className="counter"> 75</span>
                                        </h5>
                                    </div>
                                    <div className="progress-bar progress-bar02">
                                        <span ref={progressBarArray[2]} ></span>
                                    </div>
                                </li>
                                <li className="progress-bar-wrap">
                                    <div className="progress-bar-title">
                                        <h5>
                                            react <span ref={counterArray[3]} className="counter">80</span>
                                        </h5>
                                    </div>
                                    <div className="progress-bar progress-bar03">
                                        <span ref={progressBarArray[3]} ></span>
                                    </div>
                                </li>
                                <li className="progress-bar-wrap">
                                    <div className="progress-bar-title">
                                        <h5>
                                            redux <span ref={counterArray[4]} className="counter">85</span>
                                        </h5>
                                    </div>
                                    <div className="progress-bar progress-bar04">
                                        <span ref={progressBarArray[4]} ></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Stack;