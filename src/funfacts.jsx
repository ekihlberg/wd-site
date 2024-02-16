import React, { useState } from 'react';
import QuestionBox from './QuestionBox';
const questionsAndAnswers = [
    { question: "Hur träffades vi?", answer: "2018 matchade vi på Datingappen Vissla, efter att den strulat ett antal gånger frågade Emma äntligen ut Tobbe i Juli 2019 " },
    { question: "Var var vår första date?", answer: "Vår första date att vi skulle ta en öl på Bar himmel på göta platsen, en öl blev till ett gäng och vi satt kavr till stängning" },
    { question: "Vårt största gemensamm intresse", answer: "vi har båda ett sorrt intresse för Mat, Äta mat, laga mat och Bjuda folk på mat" },
    { question: "Hur länge har vi varit tilsammans?", answer: "Vi räknar att vi blev tillsamns den 17 November så vid bröllopet har vi varit tilsammans nästan 5 år" },
    { question: "Vår favoriträtt att laga tillsammans?", answer: "En rätt vi gärna bjuder på är Bao buns med långbakad fläsksida " },
    { question: "Vår favoriträtt att laga tillsammans?", answer: "En rätt vi gärna bjuder på är Bao buns med långbakad fläsksida " },
];

  
function Funfacts() {
    return (

        <>
        <div className="funfacts_wrapper">
            
            <div className="funfacts_container">
            <svg width="269" height="130" viewBox="0 0 269 130" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 130C0 58.203 58.203 0 130 0H141.938C213.113 0 270.189 58.859 268 130V130H0V130Z" fill="white"/>
</svg>

                <div className='section_text'>
                    <h3>om oss</h3>
                    <h2>Hur mycket kan ni om brudparet? </h2>
                    <p>#couplegoals</p>
                </div>
                <div className="questions-container">
                    {questionsAndAnswers.map((qa, index) => (
                        <QuestionBox key={index} question={qa.question} answer={qa.answer} />
                    ))}
                </div>
            </div>
        </div>
            </>
    );
};

export default Funfacts;


