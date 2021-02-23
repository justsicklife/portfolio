const Contact = ({contactPageRef}) => {
    return (
        <li
            ref={contactPageRef}
            className="contact page page4">
            <div className="vertical-align">
                <div className="container">
                    <div className="row flex-direction-column contact-row">
                        <div className="contact-title">
                            <h3>저와 같은 사람들과 같이 일하기 위해 노력하고 먼저 배려하여 다른 사람들에게 저랑 일하고 싶은 좋은 개발자가 되고 싶습니다.</h3>
                        </div>
                        <div className="contant-email">
                            <a>justsicklife@gmail.com</a>
                        </div>
                        <div className="contant-github">
                            <a href="https://github.com/justsicklife" target="_blank"><i className="fab fa-github-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Contact;