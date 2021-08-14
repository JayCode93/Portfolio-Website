import './topbar.scss';
import {PhoneIphone, Mail} from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#intro" className='logo'>Jay.</a>
                    <div className="itemContainer">
                        <PhoneIphone className='icon' />
                        <span>+447737891507</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>jihad.majdoub@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line3'></span>
                        <span className='line2'></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
