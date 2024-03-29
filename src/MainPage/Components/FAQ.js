import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.jpg'



const FAQ = () => {
    const data = [
        {
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more-on thousands of internet-connected devices.            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
        },
        {
            question: "Where can I watch?",
            answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },
        {
            question: "How do I cancel?",
            answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            question: "What can I watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            question: "Is Netflix good for kids?",
            answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        }
    ]


    const [selected, setSelected] = useState(null);

    const handleSelected = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <>
            <>
                <div className='section'>
                    <h1 className='heading'>Frequently Asked Questions</h1>
                    <section className='faq'>
                        <div className="item">
                            {data.map((item, i) => {
                                return (
                                    <div className="wrapper">
                                        <div className="questionwrap">
                                            <div className="question" onClick={() => { handleSelected(i) }}>
                                                <h2>{item.question}</h2>
                                                {
                                                    selected === i ? (<FaTimes style={{ color: "white" }} size={30} />) : (<FaPlus style={{ color: "white" }} size={30} />)
                                                }
                                            </div>
                                        </div>

                                        <div className={selected === i ? "answerwrap" : "answerwraphide"}>
                                            <div className={selected === i ? "answer show" : "answer"}>
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    <div className="membership">
                            <p>Ready to watch? Enter your email to create or restart your membership.</p>
                            <div className="mailbutton">
                                <input type="text" placeholder='Email address' />
                                <div className="getstarted">
                                    <Link to="/signin"><button>Get Started </button></Link>
                                    <Link to="/signin"><img src={arrow} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                </div>
                <hr className="horizontal" />
            </>
        </>
    )
}

export default FAQ