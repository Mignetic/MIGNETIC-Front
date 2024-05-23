import ask from '../images/test-askbtn.png';
import arrowBtn from '../images/icons/test-arrowBtn.png';
import '../css/Question.css';
import { useLocation } from 'react-router-dom';

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
]

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
]

function questionList(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    return array
}

function Question() {
    const location = useLocation()
    const types = location.state?.types
    console.log("types:", types)

    let questionssss = []
    if (types === 'student') questionssss = questions_student
    else if (types === 'teacher') questionssss = questions_teacher
    else if (types === 'outsider') questionssss = questions_outsider

    const shuffledQuestions = questionList([...questionssss])

    return (
        <div>
            {shuffledQuestions.map((item, index) => (
                <div className="Question" key={index}>
                    <div className='askContainer'>
                        <img src={ask} />
                        <p>{item.question}</p>
                    </div>

                    <div className={`questionContainer ${item.answers.length === 2 ? 'two-answers' : 'three-answers'}`}>
                        {item.answers.map((answer, answerIndex) => (
                            <button key={answerIndex}>{answer}</button>
                        ))}
                    </div>

                    <hr />
                </div>
            ))}
            <div className='nextContainer'>
                <button className='nextBtn'>다음<img src={arrowBtn} /></button>
            </div>
        </div>
    )
}

export default Question