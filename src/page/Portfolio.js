const Portfolio = ({ portfolioSlideClick, portfolioWrapRef, portfolioPageRef, portfolioImg2, portfolioImg1 }) => {
    return (
        <li
            ref={portfolioPageRef}
            className="portfolio page3 page">
            <div className="vertical-align">
                <div className="container">
                    <div ref={portfolioWrapRef} className="portfolio_wrap row flex-direction-column ">
                        <div className="portfolio-page01">
                            <div className="portfolio-photo-wrap">
                                <div className="portfolio-photo">
                                    <span>
                                        <img src={portfolioImg1} />
                                    </span>
                                </div>
                                <div className="portfolio-view">
                                    <a target="_blank" href="https://github.com/justsicklife/The-Beatles-website" className="portfolio-view--github"><i className="fab fa-github-square"></i></a>
                                    <a target="_blank" href="https://justsicklife.github.io/The-Beatles-website/" className="portfolio-view--web-page"><i className="fas fa-globe-americas"></i></a>
                                </div>
                            </div>
                            <div className="portfolio-explanation row flex-direction-column">
                                <div className="portfolio-title-preface">
                                    <h3>이름</h3>
                                </div>
                                <div className="portfolio-title">비틀즈 소개 사이트</div>
                                <div className="portfolio-description-preface">
                                    <h3>설명</h3>
                                </div>
                                <div className="portfolio-description">비틀즈의 노래를 좋아해서 만들어본 비틀즈 소개 사이트</div>
                                <div className="portfolio-used-stack-preface">
                                    <h3>사용된 기술</h3>
                                </div>
                                <ul className="portfolio-used-stack-list row">
                                    <li className="portfolio-used-stack">
                                        <div className="portfolio-used-stack--react">
                                            <i className="fab fa-react stack-icon stack-icon-react"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="portfolio-page02">
                            <div className="portfolio-photo-wrap">
                                <div className="portfolio-photo">
                                    <span>
                                        <img src={portfolioImg2} />
                                    </span>
                                </div>
                                <div className="portfolio-view">
                                    <a target="_blank" href="https://github.com/justsicklife/movie-search-web" className="portfolio-view--github"><i className="fab fa-github-square"></i></a>
                                    <a target="_blank" href="https://justsicklife.github.io/movie-search-web/" className="portfolio-view--web-page"><i className="fas fa-globe-americas"></i></a>
                                </div>
                            </div>
                            <div className="portfolio-explanation row flex-direction-column">
                                <div className="portfolio-title-preface">
                                    <h3>이름</h3>
                                </div>
                                <div className="portfolio-title">영화 검색 사이트</div>
                                <div className="portfolio-description-preface">
                                    <h3>설명</h3>
                                </div>
                                <div className="portfolio-description">영화에 관련된 정보들을 자세하게 검색하여 볼수있는 사이트</div>
                                <div className="portfolio-used-stack-preface">
                                    <h3>사용된 기술</h3>
                                </div>
                                <ul className="portfolio-used-stack-list row">
                                    <li className="portfolio-used-stack">
                                        <h5 className="portfolio-used-stack--react">
                                            <i className="fab fa-react stack-icon stack-icon-react"></i>
                                        </h5>
                                    </li>
                                    <li className="portfolio-used-stack">
                                        <h5 className="portfolio-used-stack--redux">
                                            redux
                          </h5>
                                    </li>
                                    <li className="portfolio-used-stack">
                                        <h5 className="portfolio-used-stack--redux">
                                            fetch
                          </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="slide_button">
                            <button onClick={() => portfolioSlideClick(-1)} className="slide_button__left"><i className="fas fa-chevron-left"></i></button>
                            <button onClick={() => portfolioSlideClick(1)} className="slide_button__right"><i className="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Portfolio;