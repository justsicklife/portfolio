import { useEffect, useRef, useState } from 'react';
import './App.css';
import React from "react";
import stackPhoto from "./assets/img/crabswim.gif"

function App() {
  const menuBlackWindow = useRef()
  const menuRef = useRef();
  const isMunuShow = useRef(false);
  const slideWrapRef = useRef();
  const progressSliderArray = useRef(null);
  const pageArray = new Array();
  const currentPage = useRef(0);
  const isAllSliding = useRef(false);
  const isSlidingArray = useRef([0, 1, 2]);
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
    // event.preventDefault();
    if (e.deltaY < 0) {
      // 스크롤 아래 방향으로
      pageEvent(-1);
    } else {
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

  useEffect(() => {

    for (let i = 0; i < pageArray.length; i++) {
      if (i <= currentPage.current) {
        progressSliderArray.current.children[i].classList.add("fill");
        continue
      }
      progressSliderArray.current.children[i].classList.remove("fill");
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
    return () => {
      window.removeEventListener('wheel', scrollEvent);
    }
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div ref={menuRef} className="offcanvas-menu flex-direction-column">
          <div className="offcanvas-menu-header">
            <div onClick={menuToggle} className="offcanvas-menu-header-close">
              <i class="far fa-window-close icon"></i>
            </div>
          </div>
          <nav className="offcanvas-menu-navbar">
            <ul className="offcanvas-menu-navbar-content-list row flex-direction-column">
              <li className="offcanvas-menu-navbar-content">home</li>
              <li className="offcanvas-menu-navbar-content">service</li>
              <li className="offcanvas-menu-navbar-content">stack</li>
              <li className="offcanvas-menu-navbar-content">portfolio</li>
              <li className="offcanvas-menu-navbar-content">contact</li>
            </ul>
          </nav>
          <footer className="offcanvas-menu-footer">
            <nav className="offcanvas-menu-footer-navbar">
              <ul className="offcanvas-menu-footer-navbar-content-list">
                <li className="offcanvas-menu-footer-navbar-content">깃허브</li>
                <li className="offcanvas-menu-footer-navbar-content">이메일</li>
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
            <div className="verticla-align">
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
            <div className="verticla-align">
              <div className="container">
                <div className="row flex-direction-column">
                  <div className="service-preface">
                    <h4>안녕하세요 프론트엔드 개발자 정하형 입니다.</h4>
                  </div>
                  <div className="gap-35"></div>
                  <ul className="service-list">
                    {/* hover event 추가 */}
                    <li className="service-box service-box0 row">
                      <div className="gap-35"></div>
                      <div className="service-icon">
                        <span><i className="fas fa-laptop-code"></i></span>
                      </div>
                      <div className="gap-35"></div>
                      <div className="service-title">
                        <h3>웹 개발을 할수있어요 !</h3>
                      </div>
                      <div className="gap-15"></div>
                      <div className="service-description">
                        <p>네.</p>
                      </div>
                    </li>
                    <li className="service-box service-box1 row">
                      <div className="gap-35"></div>
                      <div className="service-icon">
                        <span><i className="fas fa-search-plus"></i></span>
                      </div>
                      <div className="gap-35"></div>
                      <div className="service-title">
                        <h3>최적화를 중요하게 생각합니다.</h3>
                      </div>
                      <div className="gap-15"></div>
                      <div className="service-description">
                        <p>사용자의 메모리를 최소한으로 사용할수 있게 항상 고민합니다.</p>
                      </div>
                    </li>
                    <li className="service-box service-box2 row">
                      <div className="gap-35"></div>
                      <div className="service-icon">
                        <span><img></img></span>
                      </div>
                      <div className="gap-35"></div>
                      <div className="service-title">
                        <h3>웹 개발을 할수있어요 !</h3>
                      </div>
                      <div className="gap-15"></div>
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
            <div className="verticla-align">
              <div className="container">
                <div className="row align-items-center">
                  <figure className="photo">
                    <div className="photo-inside">
                      <img src={stackPhoto}></img>
                    </div>
                    <figcaption>
                      마땅히 올릴 사진이 없어서...
                    </figcaption>
                  </figure>
                  <div className="stack-wrap">
                    <div className="stack-title">
                      <h4>저는 최적화 와 친밀한 디자인을 중요시 여기면서 웹 사이트를 만드는 것을 즐겨합니다.</h4>
                    </div>
                    <div className="gap-35"></div>
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
        </ul>
      </main>
    </div >
  );
}

export default App;