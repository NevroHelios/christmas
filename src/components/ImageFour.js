import { Parallax } from 'react-parallax';
import HoHo from '../images/christmas-4.jpg'

const ImageFour = () => (
    <Parallax className='image' bgImage={HoHo}  strength={200}>
        <div className='content'>
          <span className='img-txt'>Merry Christmas</span>
        </div>
        
    </Parallax>
);

export default ImageFour