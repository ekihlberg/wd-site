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
        ,
        {
            question: 'Min respekive står inte med på inbjudan, kan jag osa för hen ändå? ',
            answer: "Vi är så glada att ni vill komma! Vi har dock begränsat antal platser och har beslutat att endast inkludera de som explicit nämns på inbjudan. Detta var ett svårt beslut, men nödvändigt pga plats- och budgetskäl. Vi hoppas på din förståelse och ser fram emot att fira med dig."
        }
    ];

    const toggleAccordion = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    return (
        <>
           
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
