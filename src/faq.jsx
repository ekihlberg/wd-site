import React, { useState } from 'react';

function Faq() {
    const [expandedItem, setExpandedItem] = useState(null);

    const faqData = [
        {
            question: 'Får våra barn vara med? ',
            answer: ' Vi älskar verkligen barn, men för denna speciella tillställning har vi beslutat att göra den enbart för vuxna. Vi hoppas att detta arrangemang passar och ser fram emot att ha en underbar dag tillsammans!'
        },
        {
            question: 'Vad önskas i bröllopspresent?',
            answer: "Vi är så tacksamma för er närvaro, vilket är den bästa presenten av alla. Om ni ändå önskar ge något, skulle vi uppskatta ett bidrag till vår bröllopresa"
        },
        {
            question: 'Vad ska jag ha på mig?',
            answer: "Klädkoden är 'Kavaj'. Vi föreslår en elegant men bekväm outfit som passar för en glädjefylld och stämningsfull dag. Vitt och svart är reserverat av brudparet"
        },
        {
            question: 'Jag vill hålla tal eller ge en skål på bröllopet hur gör jag?',
            answer: 'The Earth has a mass of approximately 5.97 x 10^24 kilograms, but weight is a measure of gravity...'
        },
        {
            question: 'Hur länge håller det på?',
            answer: "Festligheterna börjar kl. 15:00 och vi räknar med att avsluta runt midnatt. Vi hoppas att du kan stanna och fira med oss under hela evenemanget!"
        },
        {
            question: 'Hur tar jag mig till lokalen?',
            answer: "Lokalen är belägen på [adress]. Det finns gott om parkeringsplatser för de som kör. För de som föredrar kollektivtrafik, ligger närmaste busshållplats endast fem minuters promenad bort."
        },
        {
            question: 'Kan jag bo i närheten av lokalen?',
            answer: "Ja, det finns flera hotell i närheten. Vi rekommenderar [Hotellnamn] som ligger bara en kort promenad från lokalen. Vi har även ordnat en specialrabatt för våra gäster, så nämn gärna vårt bröllop vid bokning."
        },
    ];

    const toggleAccordion = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    return (
        <><div className='section section_info section_info__dark'>
           <svg xmlns="http://www.w3.org/2000/svg" className="top_wave" viewBox="0 0 1440 320"><path fill="#2B3835" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,176C672,171,768,181,864,208C960,235,1056,277,1152,272C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className='section_text'>
                <h3>Vigsel</h3>
                <h2>Ingen Kyrka för oss</h2>
                <p>Vi kommer att gifta oss i Fabrikstråket i Jonsered den 21 september. Det blir en kortare borglig cermoni med vänner och familj.  Vi kommer senare att fortsätta dagen i samma lokal med tårta, middag och festligheter förhoppningsvis in på småtimmarna.  Oavsett om ni bor nära eller har åkt lång hoppas vi att ni kommer få en fantastisk kväll med mycket skartt, dans och glädjetårar. </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className='bottom_wave' viewBox="0 0 1440 320"><path fill="#2B3835" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,181.3C384,181,480,107,576,85.3C672,64,768,96,864,90.7C960,85,1056,43,1152,48C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            
        </div>
        <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="accordion">
                    {faqData.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <button
                                id={`accordion-button-${index}`}
                                aria-expanded={expandedItem === index}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="accordion-title">{faq.question}</span>
                                <span className="icon" aria-hidden="true"></span>
                            </button>
                            {expandedItem === index && (
                                <div className="accordion-content">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div></>
    );
};

export default Faq;
