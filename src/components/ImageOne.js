import { Parallax } from 'react-parallax';
import christmas from '../images/christmas-1.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={christmas}  strength={200}>
        <div className='content'>
          <span className='img-txt'>Merry Christmas</span>
        </div>
        
    </Parallax>
);

export default ImageOne