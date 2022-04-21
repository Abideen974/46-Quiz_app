import React, { useRef, useEffect } from 'react'
import './quiz.css'
function Quiz() {

    const a = useRef(null)
    const b = useRef (null)
    const c = useRef (null)
    const quiz = useRef(null)
    const question = useRef (null)
    const submitBtn = useRef(null)
    const ans = useRef(null)


    useEffect(()=>{
        loadQuiz()
    },[])

    let score = 0;
    let currentQuiz = 0;
    // let index=1;

    const loadQuiz = ()=>{
        deselectAnswers()
        const currentQuizData = quizData[currentQuiz];
        console.log(currentQuizData);
        question.current.innerText = currentQuizData.question;
        a.current.innerText=currentQuizData.a
        b.current.innerText=currentQuizData.b;
        c.current.innerText=currentQuizData.c;


    }
    const deselectAnswers=()=>{
        var answerEle = document.querySelectorAll('.answer')
        answerEle.forEach((answerEle)=>{
            answerEle.checked = false
        })

        console.log(answerEle);
      

    }


    const quizData = [
        {
            question: "which language runs in a web browser?",
            a: "java",
            b: "c",
            c: "javascript",
            correct: "c",
        },
        {
            question: "what does css stand for?",
            a: "central style shetts",
            b: "cascading style sheets",
            c:"cars suvs sailboats",
            correct: "b"
        },
        {
            question: "what does Html stand for?",
            a: "central style shetts",
            b: "cascading style sheets",
            c:"Hypertext markup language",
            correct: "c"
        }

    ]
    const getSelected = () =>{
        let answer 
        var answerEle = document.querySelectorAll('.answer')
        
        answerEle.forEach((answerEle)=>{
            if(answerEle.checked){
                answer=answerEle.id
            }
        })
        return answer
    }
    const submit_btn = () =>{
        console.log('submit btn invoked');
        const answer = getSelected()

        if(answer){
            if(answer===quizData[currentQuiz].correct){
                score++
            }
            currentQuiz++
            if(currentQuiz < quizData.length){
                loadQuiz()
            }
            else{
                quiz.current.innerHTML = `<h2>You answered  ${score} / ${quizData.length}
                questions corretly</h2> 
                <button onClick='location.reload()'>reload</button>
                `
                
            }
        }

    }
  return (
    <>
        <div className="quiz-container" id="quiz"  ref={quiz}>
            <div className="quiz-header">
                <h2 id="question" ref={question}>Question text</h2>
                <ul>
                    <li>
                        <input type="radio" name="answer" id="a" 
                        className='answer' ref={ans}/>
                        <label htmlFor="a" id='a_text' ref={a}>Question</label>
                    </li>

                    <li>
                        <input type="radio" name="answer" id="b" 
                        className='answer' ref={ans}/>
                        <label htmlFor="b" id='b_text' ref={b}>Question</label>
                    </li>

                    <li>
                        <input type="radio" name="answer" id="c"
                        className='answer' ref={ans}/>
                        <label htmlFor="c" id='c_text' ref={c}>Question</label>
                    </li>

                    {/* <li>
                        <input type="radio" name="answer" id="d"
                        className='answer' />
                        <label htmlFor="d" id='d_text'>Question</label>
                    </li> */}
                </ul>
            </div>
            <button id='submit' ref={submitBtn} onClick={submit_btn}>submit</button>
        </div>
    </>
  )
}

export default Quiz