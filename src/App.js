import { useEffect, useRef } from 'react';
import './App.css';
import React from "react";
import stackPhoto from "./assets/img/crabswim.gif"

function App() {
  const slideWrapRef = useRef();


  // const pageArray = new Array(4).fill({ ref: React.createRef(), isSliding: false });
  const pageArray = useRef(new Array());
  const currentPage = useRef(0);
  const isAllSliding = useRef(false);
  const isSlidingArray = useRef([0, 1, 2]);
  const slideDirection = useRef(null);
  const counterArray = useRef(new Array());
  const prograssBarArray = useRef(new Array());

  const scrollEvent = (e) => {
    if (isAllSliding.current) return; // 모든 슬라이더가 끝나면
    // event.preventDefault();
    if (e.deltaY < 0) {
      // 스크롤 아래 방향으로
      pageEvent(-1);
    } else {
      // 위로
      pageEvent(1)
    }
  }

  const pageEvent = (direction) => {
    if (currentPage.current === 0 && direction === -1) return;
    if (currentPage.current === pageArray.current.length - 1 && direction === 1) return;

    isAllSliding.current = true;
    pageArray.current[currentPage.current].style.zIndex = `0`;
    pageArray.current[currentPage.current].classList.remove("active");

    currentPage.current += direction;
    slideDirection.current = -direction;
    isSlidingArray.current[currentPage.current] = 0;

    pageArray.current[currentPage.current].style.zIndex = `1`;
    pageArray.current[currentPage.current].style.transform = `translateX(0px)`;
    pageArray.current[currentPage.current].classList.add("active");

    setTimeout(() => {
      for (let i = 0; i < pageArray.current.length; i++) {
        if (currentPage.current === i) continue
        const screenWidth = document.body.offsetWidth;
        isSlidingArray.current[i] += slideDirection.current;
        const distance = screenWidth * isSlidingArray.current[i];
        pageArray.current[i].style.transform = `translateX(${distance}px)`;
      }
      isAllSliding.current = false;
    }, 800);
  }

  useEffect(() => {
    console.log(counterArray.current[0]);
    if (currentPage.current === 2) {
      for (let i = 0; i < 5; i++) {
      }
    }
  }, [currentPage.current])

  useEffect(() => {
    for (let i = 0; i < pageArray.current.length; i++) {
      const screenWidth = document.body.offsetWidth;
      const distance = screenWidth * i;
      pageArray.current[i].style.transform = `translateX(${distance}px)`;
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
      <header>

      </header>
      <main className="slide">
        <ul ref={slideWrapRef} className="slide-wrap">
          {/* home start*/}
          <li
            ref={(element => {
              pageArray.current.push(element)
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
              pageArray.current.push(element)
            })}
            className="service page page1">
            <div className="verticla-align">
              <div className="container">
                <div className="row flex-direction-column">
                  <div className="service-title">
                    <h4>안녕하세요 프론트엔드 개발자 정하형 입니다.</h4>
                  </div>
                  <div className="vlt-gap-35"></div>
                  <ul className="service-list">
                    {/* hover event 추가 */}
                    <li className="service__box row">
                      <div className="vlt-gap-35"></div>
                      <div className="service__icon">
                        <span><i className="fas fa-laptop-code"></i></span>
                      </div>
                      <div className="vlt-gap-35"></div>
                      <div className="service__title">
                        <h3>웹 개발을 할수있어요 !</h3>
                      </div>
                      <div className="vlt-gap-15"></div>
                      <div className="service__description">
                        <p>네.</p>
                      </div>
                    </li>
                    <li className="service__box row">
                      <div className="vlt-gap-35"></div>
                      <div className="service__icon">
                        <span><i className="fas fa-search-plus"></i></span>
                      </div>
                      <div className="vlt-gap-35"></div>
                      <div className="service__title">
                        <h3>최적화를 중요하게 생각합니다.</h3>
                      </div>
                      <div className="vlt-gap-15"></div>
                      <div className="service__description">
                        <p>사용자의 메모리를 최소한으로 사용할수 있게 항상 고민합니다.</p>
                      </div>
                    </li>
                    <li className="service__box row">
                      <div className="vlt-gap-35"></div>
                      <div className="service__icon">
                        <span><img></img></span>
                      </div>
                      <div className="vlt-gap-35"></div>
                      <div className="service__title">
                        <h3>웹 개발을 할수있어요 !</h3>
                      </div>
                      <div className="vlt-gap-15"></div>
                      <div className="service__description">
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
              pageArray.current.push(element)
            })}
            className="stack page page2">
            <div className="verticla-align">
              <div className="container">
                <div className="row align-items-center">
                  <figure className="photo">
                    <div className="photo__inside">
                      <img src={stackPhoto}></img>
                    </div>
                    <figcaption>
                      마땅히 올릴 사진이 없어서...
                    </figcaption>
                  </figure>
                  <div className="stack__wrap">
                    <div className="stack__title">
                      <h4>저는 최적화 와 친밀한 디자인을 중요시 여기면서 웹 사이트를 만드는 것을 즐겨합니다.</h4>
                    </div>
                    <div className="vlt-gap-35"></div>
                    <ul className="prograss-bar__list">
                      <li className="prograss-bar">
                        <div className="prograss-bar__title">
                          <h5>
                            자바스크립트 <span ref={(element => {
                              counterArray.current.push(element)
                            })} className="counter">- 87%</span>
                          </h5>
                        </div>
                        <div className="prograss-bar__bar">
                          <span ref={(element => {
                            prograssBarArray.current.push(element)
                          })} ></span>
                        </div>
                      </li>
                      <li className="prograss-bar">
                        <div className="prograss-bar__title">
                          <h5>
                            html <span ref={(element => {
                              counterArray.current.push(element)
                            })} className="counter">- 70%</span>
                          </h5>
                        </div>
                        <div className="prograss-bar__bar">
                          <span ref={(element => {
                            prograssBarArray.current.push(element)
                          })} className="counter"></span>
                        </div>
                      </li>
                      <li className="prograss-bar">
                        <div className="prograss-bar__title">
                          <h5>
                            css <span ref={(element => {
                              counterArray.current.push(element)
                            })} className="counter">- 75%</span>
                          </h5>
                        </div>
                        <div className="prograss-bar__bar">
                          <span ref={(element => {
                            prograssBarArray.current.push(element)
                          })} ></span>
                        </div>
                      </li>
                      <li className="prograss-bar">
                        <div className="prograss-bar__title">
                          <h5>
                            react <span ref={(element => {
                              counterArray.current.push(element)
                            })} className="counter">- 80%</span>
                          </h5>
                        </div>
                        <div className="prograss-bar__bar">
                          <span ref={(element => {
                            prograssBarArray.current.push(element)
                          })} ></span>
                        </div>
                      </li>
                      <li className="prograss-bar">
                        <div className="prograss-bar__title">
                          <h5>
                            redux <span className="counter">- 85%</span>
                          </h5>
                        </div>
                        <div className="prograss-bar__bar">
                          <span ref={(element => {
                            prograssBarArray.current.push(element)
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
    </div>
  );
}

export default App;