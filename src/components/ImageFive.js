import { Parallax } from 'react-parallax';
import Reindeer from '../images/christmas-5.jpg'

const ImageFive = () => (
    <Parallax className='image' bgImage={Reindeer}  strength={200}>
        <div className='content'>
          <span className='img-txt'>Merry Christmas</span>
        </div>
        
    </Parallax>
);

export default ImageFive