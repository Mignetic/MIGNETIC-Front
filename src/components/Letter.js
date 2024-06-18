import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Letter.css';
import envelope from '../images/envelope.png';

function LetterWrite() {
    const { graphName } = useParams();
    const navigate = useNavigate();
    const [toName, setToName] = useState('');
    const [fromName, setFromName] = useState('');
    const [letterContent, setLetterContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const id = sessionStorage.getItem('id');
            const type = sessionStorage.getItem('type');
            
            if (id && type) {
                try {
                    const response = await axios.get(`http://localhost:3000/api/letter/${type}/${id}`);
                    setFromName(response.data.name);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (graphName) {
            setToName(graphName);
        }
    }, [graphName]);

    const handleTransmission = () => {
        if (!fromName || !letterContent) {
            alert('Please fill in all fields.');
            return;
        }

        if (window.confirm("Do you want to send the letter?")) {
            axios.post('http://localhost:3000/api/letter/saveLetter', { toName, fromName, letterContent })
                .then(response => {
                    alert("Letter sent successfully!");
                    setToName('');
                    setFromName('');
                    setLetterContent('');
                    navigate('/Board');
                })
                .catch(error => {
                    console.error('Error saving letter:', error);
                    alert("Failed to send letter.");
                });
        }
    };

    return (
        <div className='Letter-background'>
            <div className='letterPaper'>
                <div className='name'>To. {toName}</div>
                <input
                    type='text'
                    value={toName}
                    onChange={(e) => setToName(e.target.value)}
                    placeholder="Recipient's Name"
                    style={{ display: 'none' }}
                />
                <input
                    type='text'
                    value={fromName}
                    onChange={(e) => setFromName(e.target.value)}
                    placeholder="Sender's Name"
                    style={{ display: 'none' }}
                />
                <textarea
                    className='letterInputText'
                    value={letterContent}
                    onChange={(e) => setLetterContent(e.target.value)}
                    placeholder="Write your letter here"
                ></textarea>
                <button className='letterbtn' onClick={handleTransmission}>
                    Send
                </button>
            </div>
            <div className='envelope'>
                <img src={envelope} alt='envelope'></img>
            </div>
        </div>
    );
}

export default LetterWrite;
