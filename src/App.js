import { useEffect, useRef, useState } from 'react';
import './App.css';
import React from "react";
import stackPhoto from "./assets/img/crabswim.gif"

function App() {
  const menuContentsRef = useRef();
  const menuRef = useRef();
  const isMunuShow = useRef(false);
  const slideWrapRef = useRef();
  const progressSliderArray = useRef(null);
  const pageArray = new Array();
  const currentPage = useRef(0);
  const isAllSliding = useRef(false);
  const isSlidingArray = useRef([0, 1, 2, 3, 4]);
  const slideDirection = useRef(null);
  const counterArray = useRef(new Array());
  const progressArray = useRef(new Array());
  const [changePage, setChangePage] = useState(false);

  const progressBarAnimation = (targetProgress, targetNumber, time) => {
    let currentProgress = 0;
    const frame = () => {
      if (targetNumber <= currentProgress) {
        clearInterval(id)
      } else {
        currentProgress++;
        targetProgress.style.width = currentProgress + "%";;
      }
    }
    const id = setInterval(frame, time);
  }

  const scrollEvent = (e) => {
    if (isAllSliding.current) return; // 모든 슬라이더가 끝나면
    if (isMunuShow.current) return;
    // console.log("clientX : " + e.targetTouches[0].clientY);
    // console.log("screenY : " + e.targetTouches[0].screenY);
    // console.log("page : " + e.targetTouches[0].pageY);
    // event.preventDefault();
    if (e.deltaY < 0) {
      // 스크롤 아래 방향으로
      pageEvent(-1);
    } else if (e.deltaY > 0) {
      // 위로
      pageEvent(1)
    }
  }

  const menuToggle = () => {
    isMunuShow.current = !isMunuShow.current;
    if (isMunuShow.current) {
      menuRef.current.style.transform = "translateX(0%)";
      return
    }
    menuRef.current.style.transform = "translateX(100%)";
  }

  const pageEvent = (direction) => {
    if (currentPage.current === 0 && direction === -1) return;
    if (currentPage.current === pageArray.length - 1 && direction === 1) return;

    isAllSliding.current = true;
    pageArray[currentPage.current].style.zIndex = `0`;
    pageArray[currentPage.current].classList.remove("active");

    currentPage.current += direction;
    slideDirection.current = -direction;
    isSlidingArray.current[currentPage.current] = 0;

    pageArray[currentPage.current].style.zIndex = `1`;
    pageArray[currentPage.current].style.transform = `translateX(0px)`;
    pageArray[currentPage.current].classList.add("active");
    setChangePage({});

    setTimeout(() => {
      for (let i = 0; i < pageArray.length; i++) {
        if (currentPage.current === i) continue
        const screenWidth = document.body.offsetWidth;
        isSlidingArray.current[i] += slideDirection.current;
        const distance = screenWidth * isSlidingArray.current[i];
        pageArray[i].style.transform = `translateX(${distance}px)`;
      }
      isAllSliding.current = false;
    }, 800);
  }

  const menuNavContentClick = (changePageIndex) => {
    if (currentPage.current === changePageIndex) return;
    currentPage.current = changePageIndex;
    setChangePage({});
    pageArray[currentPage.current].style.zIndex = `1`;
    pageArray[currentPage.current].style.transform = `translateX(0px)`;
    pageArray[currentPage.current].classList.add("active");

    isAllSliding.current = true;
    pageArray[currentPage.current].style.zIndex = `0`;
    let j = 1;
    for (let i = currentPage.current + 1; i < pageArray.length; i++) {
      const screenWidth = document.body.offsetWidth;
      isSlidingArray.current[i] = j;
      pageArray[i].classList.remove("active");
      const distance = screenWidth * isSlidingArray.current[i];
      pageArray[i].style.transform = `translateX(${distance}px)`;
      j++
    }
    j = -1;
    for (let i = currentPage.current - 1; i >= 0; i--) {
      const screenWidth = document.body.offsetWidth;
      isSlidingArray.current[i] = j;
      pageArray[i].classList.remove("active");
      const distance = screenWidth * isSlidingArray.current[i];
      pageArray[i].style.transform = `translateX(${distance}px)`;
      j--;
    }
    menuToggle();
    isAllSliding.current = false;
  }

  useEffect(() => {

    for (let i = 0; i < pageArray.length; i++) {
      if (i <= currentPage.current) {
        progressSliderArray.current.children[i].classList.add("fill");
        continue
      }
      progressSliderArray.current.children[i].classList.remove("fill");
    }

    for (let i = 0; i < pageArray.length; i++) {
      if (i === currentPage.current) {
        menuContentsRef.current.children[i].children[0].classList.add("current-maraker");
        continue
      }
      menuContentsRef.current.children[i].children[0].classList.remove("current-maraker");
    }

    if (currentPage.current !== 2) return
    for (let i = 0; i < counterArray.current.length; i++) {
      const counter = counterArray.current[i].innerText;
      const progressBar = progressArray.current[i];
      progressBar.style.width = "0%";
      progressBarAnimation(progressBar, counter, 10);
    }
  }, [changePage])

  useEffect(() => {
    for (let i = 0; i < pageArray.length; i++) {
      const screenWidth = document.body.offsetWidth;
      const distance = screenWidth * i;
      pageArray[i].style.transform = `translateX(${distance}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', scrollEvent);
    window.addEventListener('touchmove', scrollEvent)
    return () => {
      window.removeEventListener('wheel', scrollEvent);
      window.removeEventListener('touchmove', scrollEvent)
    }
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div ref={menuRef} className="offcanvas-menu flex-direction-column">
          <div className="offcanvas-menu-header">
            <div onClick={menuToggle} className="offcanvas-menu-header-close">
              <i className="far fa-window-close icon"></i>
            </div>
          </div>
          <nav className="offcanvas-menu-navbar">
            <ul
              ref={menuContentsRef}
              className="offcanvas-menu-navbar-content-list row flex-direction-column">
              <li data-menuanchor="home" className="offcanvas-menu-navbar-content"><h3 onClick={() => { menuNavContentClick(0) }}>home</h3></li>
              <li data-menuanchor="service" className="offcanvas-menu-navbar-content"><h3 onClick={() => { menuNavContentClick(1) }}>service</h3></li>
              <li data-menuanchor="stack" className="offcanvas-menu-navbar-content"><h3 onClick={() => { menuNavContentClick(2) }}>stack</h3></li>
              <li data-menuanchor="portfolio" className="offcanvas-menu-navbar-content"><h3 onClick={() => { menuNavContentClick(3) }}>portfolio</h3></li>
              <li data-menuanchor="contact" className="offcanvas-menu-navbar-content"><h3 onClick={() => { menuNavContentClick(4) }}>contact</h3></li>
            </ul>
          </nav>
          <footer className="offcanvas-menu-footer">
            <nav className="offcanvas-menu-footer-navbar">
              <ul className="offcanvas-menu-footer-navbar-content-list">
                <li className="offcanvas-menu-footer-navbar-content">
                  <button className="offcanvas-menu-footer-navbar-content--github">
                    <i className="fab fa-github github-icon icon"></i>
                  </button>
                </li>
                <li className="offcanvas-menu-footer-navbar-content">
                  <button className="offcanvas-menu-footer-navbar-content--email">
                    <i className="far fa-envelope email-icon icon"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
        <nav className="navbar">
          <div className="navbar-inner row">
            <div className="navbar-inner--left">
              <a className="navbar-logo">
                Hello!
              </a>
              <a className="navbar-email">justsicklife@gmail.com</a>
            </div>
            <div className="navbar-inner--right">
              <div onClick={menuToggle} className="navbar-burger">
                <i className="fas fa-bars icon"></i>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <footer className="footer">

      </footer>
      <main className="slide">
        <ul ref={progressSliderArray} className="fullpage-slider-progress-bar is-show">
          <li data-menuanchor="home"></li>
          <li data-menuanchor="service"></li>
          <li data-menuanchor="stack"></li>
          <li data-menuanchor="portfolio"></li>
          <li data-menuanchor="contact"></li>
        </ul>
        <ul ref={slideWrapRef} className="slide-wrap">
          {/* home start*/}
          <li
            ref={(element => {
              if (pageArray[0]) return
              pageArray.push(element)
            })}
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
          {/* home end*/}
          {/* service start*/}
          <li
            ref={(element => {
              if (pageArray[1]) return
              pageArray.push(element)
            })}
            className="service page page1">
            <div className="vertical-align">
              <div className="container">
                <div className="row flex-direction-column">
                  <div className="service-preface">
                    <h4>안녕하세요 프론트엔드 개발자 정하형 입니다.</h4>
                  </div>
                  <ul className="service-list">
                    {/* hover event 추가 */}
                    <li className="service-box service-box0 row">
                      <div className="service-icon">
                        <span><i className="fas fa-laptop-code"></i></span>
                      </div>
                      <div className="service-title">
                        <h3>웹 개발을 할수있어요 !</h3>
                      </div>
                      <div className="service-description">
                        <p>네.</p>
                      </div>
                    </li>
                    <li className="service-box service-box1 row">
                      <div className="service-icon">
                        <span><i className="fas fa-search-plus"></i></span>
                      </div>
                      <div className="service-title">
                        <h3>최적화를 중요하게 생각합니다.</h3>
                      </div>
                      <div className="service-description">
                        <p>사용자의 메모리를 최소한으로 사용할수 있게 항상 고민합니다.</p>
                      </div>
                    </li>
                    <li className="service-box service-box2 row">
                      <div className="service-icon">
                        <span><img></img></span>
                      </div>
                      <div className="service-title">
                        <h3>웹 개발을 할수있어요 !</h3>
                      </div>
                      <div className="service-description">
                        <p>네.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* service end*/}
          <li
            ref={(element => {
              if (pageArray[2]) return
              pageArray.push(element)
            })}
            className="stack page page2">
            <div className="vertical-align">
              <div className="container">
                <div className="row align-items-center stack-row">
                  <figure className="photo">
                    <div className="photo-inside">
                      <img src={stackPhoto}></img>
                    </div>
                    {/* <figcaption>
                      마땅히 올릴 사진이 없어서...
                    </figcaption> */}
                  </figure>
                  <div className="stack-wrap">
                    <div className="stack-title">
                      <h4>저는 최적화 와 친밀한 디자인을 중요시 여기면서 웹 사이트를 만드는 것을 즐겨합니다.</h4>
                    </div>
                    <ul className="progress-bar-list">
                      <li className="progress-bar-wrap">
                        <div className="progress-bar-title">
                          <h5>
                            자바스크립트 <span ref={(element => {
                              if (counterArray.current[0]) return
                              counterArray.current.push(element)
                            })} className="counter">87</span>
                          </h5>
                        </div>
                        <div className="progress-bar progress-bar00">
                          <span ref={(element => {
                            if (progressArray.current[0]) return
                            progressArray.current.push(element)
                          })} ></span>
                        </div>
                      </li>
                      <li className="progress-bar-wrap">
                        <div className="progress-bar-title">
                          <h5>
                            html <span ref={(element => {
                              if (counterArray.current[1]) return
                              counterArray.current.push(element)
                            })} className="counter">70</span>
                          </h5>
                        </div>
                        <div className="progress-bar progress-bar01">
                          <span ref={(element => {
                            if (progressArray.current[1]) return
                            progressArray.current.push(element)
                          })}></span>
                        </div>
                      </li>
                      <li className="progress-bar-wrap">
                        <div className="progress-bar-title">
                          <h5>
                            css <span ref={(element => {
                              if (counterArray.current[2]) return
                              counterArray.current.push(element)
                            })} className="counter"> 75</span>
                          </h5>
                        </div>
                        <div className="progress-bar progress-bar02">
                          <span ref={(element => {
                            if (progressArray.current[2]) return
                            progressArray.current.push(element)
                          })} ></span>
                        </div>
                      </li>
                      <li className="progress-bar-wrap">
                        <div className="progress-bar-title">
                          <h5>
                            react <span ref={(element => {
                              if (counterArray.current[3]) return
                              counterArray.current.push(element)
                            })} className="counter">80</span>
                          </h5>
                        </div>
                        <div className="progress-bar progress-bar03">
                          <span ref={(element => {
                            if (progressArray.current[3]) return
                            progressArray.current.push(element)
                          })} ></span>
                        </div>
                      </li>
                      <li className="progress-bar-wrap">
                        <div className="progress-bar-title">
                          <h5>
                            redux <span ref={(element => {
                              if (counterArray.current[4]) return
                              counterArray.current.push(element)
                            })} className="counter">85</span>
                          </h5>
                        </div>
                        <div className="progress-bar progress-bar04">
                          <span ref={(element => {
                            if (progressArray.current[4]) return
                            progressArray.current.push(element)
                          })} ></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            ref={(element => {
              if (pageArray[3]) return
              pageArray.push(element)
            })}
            className="portfolio page3 page">
            <div className="vertical-align">
              <div className="container">
                <div className="portfolio-header">
                  <div className="portfolio-perpace"><h3>portfolio</h3></div>
                  <div className="portfolio-slide row">
                    <div className="portfolio-slide-button--right">
                      <button><i className="fas fa-arrow-left icon-right icon"></i></button>
                    </div>
                    <div className="portfolio-current-page">1</div>
                    <div className="protfolio-separator-page">/</div>
                    <div className="portfolio-max-page">2</div>
                    <div className="portfolio-slide-button--left">
                      <button><i className="fas fa-arrow-right icon-left icon"></i></button>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="portfolio-photo-wrap">
                    <div className="portfolio-photo">
                      <div>
                        <span>이미지</span>
                        <img></img>
                      </div>
                    </div>
                    <div className="gap-15"></div>
                    <div className="portfolio-view">
                      <div className="portfolio-view--github">깃허브</div>
                      <div className="portfolio-view--web-page">사이트</div>
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
                    <ul className="portfolio-used-stack-list">
                      <li className="portfolio-used-stack">
                        <div className="portfolio-used-stack--react">
                          <i className="fab fa-react stack-icon stack-icon-react"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            ref={(element => {
              if (pageArray[4]) return
              pageArray.push(element)
            })}>
            <div className="contact page page4">
              <div className="vertical-align">
                <div className="container">
                  <div className="row flex-direction-column contact-row">
                    <div className="contact-title">
                      <h3>다음에 보겠습니다.</h3>
                    </div>
                    <div className="contant-email">
                      <a>justsicklife@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </div >
  );
}

export default App;