import { Parallax } from 'react-parallax';
import December from '../images/christmas-2.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={December}  strength={200}>
        <div className='content'>
          <span className='img-txt'>Merry Christmas</span>
        </div>
        
    </Parallax>
);

export default ImageTwo