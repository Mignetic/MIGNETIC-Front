import ask from '../images/test-askbtn.png';
import ask2 from '../images/test-askbtn2.png'
import arrowBtn from '../images/icons/test-arrowBtn.png';
import '../css/Question.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const questions_student = [
    {
        question: "내 스타일에 가까운 선생님은?",
        answers: ["당근 주는 지훈쌤", "채찍 주는 규정쌤", "공주님 시켜주는 재민쌤"]
    },
    {
        question: "명찰을 안했는데 저기 멀리서 지우쌤이 나를 부른다",
        answers: ["못 들은 척하고 도망간다", "당당하게 선생님 앞으로 간다"]
    },
    {
        question: "프로젝트를 만들기 시작했다!",
        answers: ["강의나 책으로 먼저 공부하기", "구글링 하면서 바로 시작하기"]
    },
    {
        question: "내가 되고 싶은건",
        answers: ["T호소인 정훈쌤", "F호소인 명수쌤"]
    },
    {
        question: "병석쌤이 나에게 질문을 하셨다",
        answers: ["열심히 대답한다", "눈을 피한다", "뜸을 들인다"]
    },
    {
        question: "학교에 좀비가 나타났다",
        answers: ["병석쌤처럼 좀비 진정시키기", "낙은쌤의 라인댄스 기술로 물리치기", "향규쌤의 네발걷기 기술로 도망가기"]
    },
    {
        question: "남친룩의 정석은?",
        answers: ["영철쌤", "윤환쌤", "재민쌤"]
    },
    {
        question: "졸고있었는데 재민쌤이 어디 다녀왔냐고 물어본다",
        answers: ["꿈나라에 다녀왔다고 한다", "아무것도 안했다고 발뺌한다"]
    },
    {
        question: "방과후 수업이 시작됐다",
        answers: ["힘들지만 도움되는 수업", "몰컴할 수 있는 널널한 수업"]
    },
    {
        question: "코드를 짜다가 모르는 것이 생겼다",
        answers: ["chat gpt 활용", "구글링한다", "끝까지 내 힘으로 풀어본다"]
    }
];

const questions_teacher = [
    {
        question: "더 선호하는 학생은?",
        answers: ["수업에 잘 참여하지 않지만 성적이 좋은 학생", "수업에 잘 참여하지만 성적은 낮은 학생"]
    },
    {
        question: "내가 더 선호하는 것은?",
        answers: ["하루에 수업 5개 들어가기", "큰 행사 담당하기"]
    },
    {
        question: "더 듣고 싶은 것은",
        answers: ["울면서 위로해달라는 카리나", "좋은 소식이 있다는 이재용"]
    },
    {
        question: "수업 중에 더 싫은 상황은?",
        answers: ["모든 학생이 자기", "모든 학생이 딴짓하기"]
    },
    {
        question: "더 선호하는 퇴근길은?",
        answers: ["1시간 30분 지하철에서 앉아서 편안하게 집가기", "40분 사람 꽉 찬 지옥철타고 집가기"]
    },
    {
        question: "더 싫은 것은?",
        answers: ["야근하기", "방과후 수업하기"]
    },
    {
        question: "하나만 선택해야 한다면?",
        answers: ["한 학생과 3시간 상담하기", "한 학생과 5분 상담하기"]
    },
    {
        question: "더 이루고 싶은 것은?",
        answers: ["전교 꼴등 대기업 취업시키기", "올 9등급 학생 올 1등급 시키기"]
    },
    {
        question: "더 보고싶은 상황은?",
        answers: ["매일 아침 펼쳐지는 1학년 치정 로맨스", "매일 아침 펼쳐지는 3학년 스릴러 취업기"]
    },
    {
        question: "더 싫은 상황은?",
        answers: ["생기부 쓰고 있는데 컴퓨터 꺼지기", "시험 출제 중에 컴퓨터 꺼지기"]
    }
];

const questions_outsider = [
    {
        question: "더 나은 것은?",
        answers: ["1시간 30분 지하철에서 앉아서 편안하게 집가기", "40분 사람 꽉 찬 지옥철타고 집가기"]
    },
    {
        question: "토마토",
        answers: ["토맛 토마토", "토마토 맛토"]
    },
    {
        question: "더 뽑고 싶은 학생은?",
        answers: ["코딩 실력이 매우 좋지만 사회성이 부족한 학생", "코딩 실력은 조금 부족하지만 사회성 좋은 학생"]
    },
    {
        question: "더 원하는 것은?",
        answers: ["100억부재 유병재", "무일푼 차은우"]
    },
    {
        question: "더 뽑고 싶은 것은?",
        answers: ["성적이 좋은 학생", "면접을 잘 본 학생"]
    },
    {
        question: "더 이루고 싶은 것은?",
        answers: ["원하는 연봉 받기", "업계 최고 되기"]
    },
    {
        question: "더 원하는 것은?",
        answers: ["사내식당에서 밥 공짜로 먹기", "맛있는 밥 돈 주고 먹기"]
    },
    {
        question: "더 어색한 상황은?",
        answers: ["나보다 어린 사수", "나보다 나이 많은 후임"]
    },
    {
        question: "더 나은 상황은?",
        answers: ["연봉 그대로 매일 칼퇴", "연봉 2배 매일 야근"]
    },
    {
        question: "더 싫은 상황은?",
        answers: ["나 빼고 다 천재인 팀에서 숨쉬듯 자괴감 느끼기", "내가 유일한 희망인 팀에서 혼자 밭 가는 소처럼 일하기"]
    }
];

function Question({ types, name, stuID, subject, relation }) {
    const navigate = useNavigate();

    let questions = [];
    if (types === 'student') questions = questions_student;
    else if (types === 'teacher') questions = questions_teacher;
    else if (types === 'official') questions = questions_outsider;

    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const questionRefs = useRef([]);

    const handleAnswerClick = (questionIndex, answerIndex) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[questionIndex] = answerIndex;
        setSelectedAnswers(updatedAnswers);

        if (questionIndex < questions.length - 1) {
            setCurrentQuestionIndex(questionIndex + 1);
            questionRefs.current[questionIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleNextBtn = async () => {
        const allAnswered = selectedAnswers.every(answer => answer !== null);
        if (allAnswered) {
            const relationMap = { parent: 0, friend: 1, other: 2 };
            const postData = {
                types,
                name,
                stuID,
                subject,
                relation: relationMap[relation],
                selectedAnswers
            };

            try {
                const response = await axios.post('http://localhost:3000/api/info/saveAnswers', postData);
                // 세션에 id, type 저장
                sessionStorage.setItem('id', response.data.id);
                sessionStorage.setItem('type', types);
                console.log(sessionStorage.getItem('id'), sessionStorage.getItem('type'));
                // letterWrite 페이지로 이동
                navigate('/result');
            } catch (error) {
                console.error('데이터 전송 오류:', error);
                alert('데이터 전송 오류가 발생했습니다. 다시 시도해주세요.');
            }
        } else {
            alert('모든 질문에 답해주세요.');
        }
    };

    useEffect(() => {
        if (currentQuestionIndex > 0) {
            questionRefs.current[currentQuestionIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentQuestionIndex]);

    return (
        <div>
            {questions.map((item, questionIndex) => (
                <div
                    className={`Question ${currentQuestionIndex === questionIndex ? 'active' : ''}`}
                    key={questionIndex}
                    ref={(el) => (questionRefs.current[questionIndex] = el)}
                >
                    <div className='askContainer'>
                        <img src={item.question.length >= 20 ? ask : ask2} alt="ask" />
                        <p>{item.question}</p>
                    </div>

                    <div className={`questionContainer ${item.answers.length === 2 ? 'two-answers' : 'three-answers'}`}>
                        {item.answers.map((answer, answerIndex) => (
                            <button
                                key={answerIndex}
                                className={selectedAnswers[questionIndex] === answerIndex ? 'clicked' : ''}
                                onClick={() => handleAnswerClick(questionIndex, answerIndex)}
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                    <hr />
                </div>
            ))}
            <div className='nextContainer'>
                <button className='nextBtn' onClick={handleNextBtn}>
                    다음<img src={arrowBtn} alt="arrow" />
                </button>
            </div>
        </div>
    );
}

export default Question;
