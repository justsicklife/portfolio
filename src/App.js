import { useEffect, useRef, useState } from 'react';
import './App.css';
import React from "react";
import stackPhoto from "./assets/img/crabswim.gif"
import portfolioImg1 from "./assets/img/portfolio1.png";
import portfolioImg2 from "./assets/img/portfolio2.png";
import Home from "./page/Home.js";
import Service from "./page/Service.js";
import Stack from './page/Stack';
import Contact from "./page/Contact.js";
import Portfolio from "./page/Portfolio.js";

function App() {
  const menuContentsRef = useRef();
  const menuRef = useRef();
  const isMunuShow = useRef(false);
  const slideWrapRef = useRef();
  const progressSliderArray = useRef(null);

  const homePageRef = useRef();
  const servicePageRef = useRef();
  const stackPageRef = useRef();
  const portfolioPageRef = useRef();
  const contactPageRef = useRef();

  const [pageArray, setPageArray] = useState(
    new Array(homePageRef, servicePageRef, stackPageRef, portfolioPageRef, contactPageRef)
  );

  const [currentPage, setCurrentPage] = useState(0);
  const isAllSliding = useRef(false);
  const isSlidingArray = useRef([0, 1, 2, 3, 4]);
  const slideDirection = useRef(null);

  const counter_1 = useRef();
  const counter_2 = useRef();
  const counter_3 = useRef();
  const counter_4 = useRef();
  const counter_5 = useRef();

  const [counterArray, setCounterArray] = useState(new Array(counter_1, counter_2, counter_3, counter_4, counter_5));

  const progressBar_1 = useRef();
  const progressBar_2 = useRef();
  const progressBar_3 = useRef();
  const progressBar_4 = useRef();
  const progressBar_5 = useRef();

  const [progressArray, setProgressArray] = useState(new Array(
    progressBar_1, progressBar_2, progressBar_3, progressBar_4, progressBar_5));
  const dragObj = useRef({ start: null, end: null });
  const dragLimit = useRef(35);
  const navbarRef = useRef();
  const portfolioWrapRef = useRef();
  const portfolioindexRef = useRef(0);

  const portfolioSlideClick = (direction) => {
    if (direction === -1 && portfolioindexRef.current !== 0) {
      portfolioWrapRef.current.children[1].style.display = "none";
      portfolioWrapRef.current.children[0].style.display = "block";
      portfolioWrapRef.current.children[0].style.animationName = "portfolioSlideRight";
      portfolioWrapRef.current.children[0].style.animationDuration = "1s";
      portfolioindexRef.current = 0
      return
    } else if (direction === 1 && portfolioindexRef.current !== 1) {
      portfolioWrapRef.current.children[0].style.display = "none";
      portfolioWrapRef.current.children[1].style.display = "block";
      portfolioWrapRef.current.children[1].style.animationName = "portfolioSlideLeft";
      portfolioWrapRef.current.children[1].style.animationDuration = "1s";
      portfolioindexRef.current = 1
    }
  }

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

  const ternaryOperator = (callback, oddString, evenString) => {
    if (callback()) {
      return [oddString, evenString];
    }
    return [evenString, oddString];
  }

  const scrollEvent = (e) => {
    if (isAllSliding.current) return;
    if (isMunuShow.current) return;
    if (e.deltaY < 0) {
      pageEvent(-1);
    } else if (e.deltaY > 0) {
      // 위로
      pageEvent(1)
    }
  }

  const dragEvent = () => {
    if (isAllSliding.current) return;
    if (isMunuShow.current) return;
    if (dragObj.current.start - dragObj.current.end < -dragLimit.current) {
      pageEvent(-1);
      return
    } else if (dragObj.current.start - dragObj.current.end > dragLimit.current) {
      pageEvent(1);
      return
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
    if (currentPage === 0 && direction === -1) return;
    if (currentPage === pageArray.length - 1 && direction === 1) return;

    isAllSliding.current = true;

    pageArray[currentPage].current.style.zIndex = `0`;
    pageArray[currentPage].current.classList.remove("active");

    const nextPage = currentPage + direction;
    setCurrentPage(nextPage)
    slideDirection.current = -direction;
    isSlidingArray.current[nextPage] = 0;

    pageArray[nextPage].current.style.zIndex = `1`;
    pageArray[nextPage].current.style.transform = `translateX(0px)`;
    pageArray[nextPage].current.classList.add("active");

    setTimeout(() => {
      for (let i = 0; i < pageArray.length; i++) {
        if (nextPage === i) continue
        const screenWidth = document.body.offsetWidth;
        isSlidingArray.current[i] += slideDirection.current;
        const distance = screenWidth * isSlidingArray.current[i];
        pageArray[i].current.style.transform = `translateX(${distance}px)`;
      }
      isAllSliding.current = false;
      dragObj.current.start = null;
      dragObj.current.end = null;
    }, 800);
  }

  const menuNavContentClick = (changePageIndex) => {
    if (currentPage === changePageIndex) return;
    setCurrentPage(changePageIndex);

    pageArray[changePageIndex].current.style.zIndex = `1`;
    pageArray[changePageIndex].current.style.transform = `translateX(0px)`;
    pageArray[changePageIndex].current.classList.add("active");
    isSlidingArray.current[changePageIndex] = 0;

    isAllSliding.current = true;
    pageArray[currentPage].current.style.zIndex = `0`;

    let j = 1;
    for (let i = changePageIndex + 1; i < pageArray.length; i++) {
      const screenWidth = document.body.offsetWidth;
      isSlidingArray.current[i] = j;
      pageArray[i].current.classList.remove("active");
      const distance = screenWidth * isSlidingArray.current[i];
      pageArray[i].current.style.transform = `translateX(${distance}px)`;
      j++
    }

    j = -1;
    for (let i = changePageIndex - 1; i >= 0; i--) {
      const screenWidth = document.body.offsetWidth;
      isSlidingArray.current[i] = j;
      pageArray[i].current.classList.remove("active");
      const distance = screenWidth * isSlidingArray.current[i];
      pageArray[i].current.style.transform = `translateX(${distance}px)`;
      j--;
    }

    menuToggle();
    isAllSliding.current = false;
  }

  useEffect(() => {

    for (let i = 0; i < pageArray.length; i++) {
      if (i <= currentPage) {
        progressSliderArray.current.children[i].classList.add("fill");
        continue
      }
      progressSliderArray.current.children[i].classList.remove("fill");
    }

    for (let i = 0; i < pageArray.length; i++) {
      if (i === currentPage) {
        menuContentsRef.current.children[i].children[0].classList.add("current-maraker");
        continue
      }
      menuContentsRef.current.children[i].children[0].classList.remove("current-maraker");
    }

    const [nextColor, prevColor] = ternaryOperator(() => currentPage % 2 === 0
      , "white", "black");
    navbarRef.current.style.color = nextColor;
    progressSliderArray.current.classList.add(nextColor);
    progressSliderArray.current.classList.remove(prevColor);

    if (currentPage !== 2) return
    for (let i = 0; i < counterArray.length; i++) {
      const counter = counterArray[i].current.innerText;
      const progressBar = progressArray[i];
      progressBar.current.style.width = "0%";
      progressBarAnimation(progressBar.current, counter, 10);
    }
  }, [currentPage])

  useEffect(() => {
    for (let i = 0; i < pageArray.length; i++) {
      const screenWidth = document.body.offsetWidth;
      const distance = screenWidth * i;
      console.log(pageArray)
      pageArray[i].current.style.transform = `translateX(${distance}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', scrollEvent);
    window.addEventListener('touchmove', (e) => {
      if (dragObj.current.start === null) {
        dragObj.current.start = e.touches[0].pageY;
        return
      }
      dragObj.current.end = e.touches[0].pageY;
      dragEvent();
    })
    window.addEventListener('resize', () => {
      for (let i = 0; i < pageArray.length; i++) {
        if (currentPage === i) continue
        const screenWidth = document.body.offsetWidth;
        const distance = screenWidth * isSlidingArray.current[i];
        pageArray[i].current.style.transform = `translateX(${distance}px)`;
      }
    })
    return () => {
      window.removeEventListener('wheel', scrollEvent);
      window.removeEventListener('touchmove', (e) => {
        if (dragObj.current.start === null) {
          dragObj.current.start = e.touches[0].pageY;
          return
        }
        dragObj.current.end = e.touches[0].pageY;
        dragEvent();
      })
    }
  }, [currentPage]);


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
                  <a href="https://github.com/justsicklife" target="_blank" className="offcanvas-menu-footer-navbar-content--github">
                    <i className="fab fa-github github-icon icon"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
        <nav ref={navbarRef} className="navbar">
          <div className="navbar-inner row">
            <div className="navbar-inner--left">
              <a className="navbar-logo">
                정하형!
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
      <main className="slide">
        <div className="fullpage-slider-progress-bar">
          <ul ref={progressSliderArray} className="fullpage-slider-progress-bar-list is-show">
            <li data-menuanchor="home"></li>
            <li data-menuanchor="service"></li>
            <li data-menuanchor="stack"></li>
            <li data-menuanchor="portfolio"></li>
            <li data-menuanchor="contact"></li>
          </ul>
        </div>
        <ul ref={slideWrapRef} className="slide-wrap">
          <Home homePageRef={homePageRef} />
          <Service servicePageRef={servicePageRef} />
          <Stack
            stackPageRef={stackPageRef}
            counterArray={[counter_1, counter_2, counter_3, counter_4, counter_5]}
            progressBarArray={[progressBar_1, progressBar_2, progressBar_3, progressBar_4, progressBar_5]}
            stackPhoto={stackPhoto}
          />
          <Portfolio
            portfolioWrapRef={portfolioWrapRef}
            portfolioImg1={portfolioImg1}
            portfolioImg2={portfolioImg2}
            portfolioPageRef={portfolioPageRef}
            portfolioSlideClick={portfolioSlideClick}
          />
          <Contact contactPageRef={contactPageRef} />
        </ul>
      </main>
    </div >
  );
}

export default App;