import reactLogo from './assets/react.svg'
import viteLogo from '.assets/vite.svg'
import './App.css'
import ICardGallery from './components/ICardGallery'
import MyState from './component/MyState'
import College from './components/College'
import ImageManipulation from './components/ImageManipulation';
import MyUseEffect from './components/MyUseEffect';

function App() {
    return (
        <div style={{ border: '2px solid red' }}>
            {/* 
            <ICardGallery />
            <MyState />
            <College />
            */}

            <ImageManipulation />
        </div>
    );
}

export default App;

