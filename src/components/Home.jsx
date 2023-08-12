import AsideBar from './AsideBar';
import MainBody from './MainBody';
import './Home.css'

function Home() {
    return ( 
        <div className="home">
            <div className="home-body">
                <AsideBar />
                <MainBody />
            </div>
            <div className="footer">
                <div>Footer</div>
            </div>
        </div>
     );
}

export default Home ;