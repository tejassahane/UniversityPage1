import React, { useRef } from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
 import './Test.css'


 const Test = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }



  return (
    <div className='test'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>"Choosing to pursue my degree at Edusity was one of the 
                        best decisions I've ever made. The supportive community, 
                        state-of-the-art facilities, and commitment to academic
                        excellence have truly exceeded my expectations."
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Kane Williamson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>"Studying at Edusity has been a transformative journey. The dedicated professors, engaging curriculum, and endless opportunities for growth have helped me build both knowledge and confidence for the future."
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Brete Lee</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>"My experience at Edusity has been nothing short of amazing. From collaborative learning environments to real-world projects, I’ve gained practical skills that will stay with me throughout my career."
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>John Dee</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>"Enrolling at Edusity was a life-changing choice. The inspiring mentors, innovative teaching methods, and strong support system have empowered me to achieve more than I ever imagined."
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Test
