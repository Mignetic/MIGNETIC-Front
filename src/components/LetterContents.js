import { useState, useEffect } from 'react';
import { useNavigate , useSearchParams} from 'react-router-dom';
import axios from 'axios';
import '../css/LetterContents.css';
import Logo from '../images/icons/logo.png';

function LetterContents() {
    const navigate = useNavigate();
    const [letterData, setLetterData] = useState({
        toName: '',
        fromName: '',
        letterContent: ''
    });

    useEffect(() => {
        fetchLetterContent();
    }, []);

    const [searchParams, setSearchParams] = useSearchParams(); // 1
    

    const fetchLetterContent = async () => {
        try {
            console.log("TTT3",searchParams.get('id'));
            const response = await axios.get(`http://localhost:3000/api/letter/get?id=${searchParams.get('id')}`);
            setLetterData({
                toName: response.data.toName,
                fromName: response.data.fromName,
                letterContent: response.data.content
            });
        } catch (error) {
            console.error('Error fetching letter content:', error);
        }
    };

    const backBoardLetters = () => {
        navigate('/Board');
    };

    return (
        <div className="contentBackground">
            <div className="logoContainer">
                <img src={Logo} alt="Logo" className="boardLogo" />
            </div>
            <div className="letterContentsPaper">
                <div className="letterTo">To. {letterData.toName}</div>
                <div className="letterContents">{letterData.letterContent}</div>
                <div className="letterFrom">From. {letterData.fromName}</div>
            </div>
            <button className="backBoard" onClick={backBoardLetters}>
                <p>이전 화면</p>
            </button>
        </div>
    );
}

export default LetterContents;