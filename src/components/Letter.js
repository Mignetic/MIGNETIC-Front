import Header from '../components/Header'

import envelope from '../images/envelope.png'

import '../css/Letter.css'

function Letter(){

    const handleTransmission = () =>{

        //편지 내용
        if(window.confirm("편지를 전송하시겠습니까?")){
            alert("전송 완료!")
            const letterText = document.querySelector('.letterInputText').value
            console.log(letterText)
        }else{

        }

    }

    return (
        <div className='Letter-background'>


            <div className='letterPaper'>
                    <div className='name'>To. 여긴이름받아오기</div>
                    <textarea className='letterInputText' placeholder="여기에 편지를 써요"></textarea>
                    <button className='letterbtn' onClick={handleTransmission}>전송하기</button>
            </div>
            <div className='envelope'><img src={envelope}></img></div>
            
        </div>
    )


}

export default Letter