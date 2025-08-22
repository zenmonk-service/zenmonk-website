import './mobile-screen.styles.scss'
import Image from 'next/image'
import Imf from './image.png'
import Abc from "./a.svg"

const MobileScreen = () => {
  return (
    
    <div className="mobile-screen-container">
      <div className="header">
        <p className="time">9:41</p>
        <div className='camera'>

        </div>
      </div>
    </div>
    // <img
    //   src={Imf.src}
    //   alt="mobile screen"
    //   className="mobile-screen-image"
    //   style={{
    //     // height: '200px',
    //     // width: '200px',
    //     aspectRatio: '1/1',
    //     zIndex:2
    //   }}
    // />
    // <Abc style={{
    //   zIndex: 20,
    //   position: 'absolute',
    //   height: "300px",
    //   // border: "1px solid black",
    // }}/>
  )
}

export default MobileScreen
