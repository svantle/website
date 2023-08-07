import logo from '../assets/svantle-logo-full.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Homepage() {
    return (
        <div style={{
            backgroundColor: '#1d2226',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        }}>
            <img src={logo} alt="Logo" height="100" />
            <div style={{ marginTop: '20px' }}>
                <a href="https://www.github.com/svantle" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    <GitHubIcon style={{ color: 'white' }} />
                </a>
                <a href="https://www.twitter.com/svantledotcom" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    <TwitterIcon style={{ color: 'white' }} />
                </a>
                <a href="https://www.instagram.com/svantledotcom" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    <InstagramIcon style={{ color: 'white' }} />
                </a>
                <a href="https://www.youtube.com/channel/UCjqSm9AXMiwAVwgNs5Nd5lA" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    <YouTubeIcon style={{ color: 'white' }} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    <LinkedInIcon style={{ color: 'white' }} />
                </a>
                <a href="https://www.reddit.com/r/svantle" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    <RedditIcon style={{ color: 'white' }} />
                </a>
            </div>
            <div style={{
                position: 'absolute',
                color: 'gray',
                bottom: '10px',
                left: '10px'
            }}>
                Copyright © {new Date().getFullYear()} Svantle, LLC
            </div>
        </div>
    );
}

export default Homepage;
