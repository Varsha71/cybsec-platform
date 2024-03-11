'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AudioPlayer from './components/AudioPlayer'
import Chart from 'chart.js/auto'
import { topics } from './constants/topics'
<<<<<<< HEAD
import Navbar from './components/Navbar';
=======
>>>>>>> 9abe1d03fb4d638371bbe53759b3b6a05f26f11c

const HomePage = () => {
    const router = useRouter()

    const [language, setLanguage] = useState('cryptography')
    const [difficulty, setDifficulty] = useState('Beginner')
    const [topic, setTopic] = useState('Random')
    const [numQuestions, setNumQuestions] = useState('5')
<<<<<<< HEAD
    const [contentToShow, setContentToShow] = useState('welcome'); // 'quiz', 'leaderboard', 'progress'

=======
>>>>>>> 9abe1d03fb4d638371bbe53759b3b6a05f26f11c

    const handleSetQuestions = (e) => {}

    const handleLanguageSelect = (e) => {
        setLanguage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(language, difficulty, topic)
        // router.push('/quiz')
    }

<<<<<<< HEAD
    useEffect(() => {
        // Render chart when component mounts
        renderChart()
    }, [])
=======
    // useEffect(() => {
    //     // Render chart when component mounts
    //     //renderChart()
    // }, [])
>>>>>>> 9abe1d03fb4d638371bbe53759b3b6a05f26f11c

    const renderChart = () => {
        const ctx = document.getElementById('scoreChart')

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Game 1', 'Game 2', 'Game 3'], // Example labels
                datasets: [{
                    label: 'Scores',
                    data: [0.8, 0.9, 0.7], // Example scores
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
    }

    return (
        <div className='min-h-screen grid place-items-center'>
<<<<<<< HEAD
            <Navbar setContentToShow={setContentToShow} />
            {contentToShow === 'quiz' ? (
                <div className='border rounded border-white/0 '>
                    <h1 className='text-center text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-500 via-pink-400 to-blue-500 bg-clip-text text-transparent q-animate-gradient'>
                        Cybersecurity Quiz Game
                    </h1>
                    {/* <div>
                        <canvas id='scoreChart' width='400' height='400'></canvas>
                    </div> */}
                    <form onSubmit={handleSubmit} className='mt-14 flex flex-col gap-4 w-[80%] mx-auto'>
                        <div className='grid grid-cols-2 gap-x-8 gap-y-6'>
                            {/* LANGUAGE */}
                            <div className='flex flex-col'>
                                <label htmlFor='language' className='uppercase text-xs'>
                                     Main Topic
                                </label>
                                <select value={language} onChange={handleLanguageSelect} name='language' className='quiz-select'>
                                    <option value='cryptography'>cryptography</option>
                                    <option value='Ransomware'>Ransomware</option>
                                    <option value='AppSec'>AppSec</option>
                                    <option value='Network'>Network</option>
                                </select>
                            </div>
                            {/* TOPIC */}
                            <div className='flex flex-col'>
                                <label htmlFor='topic' className='uppercase text-xs'>
                                    Sub topic
                                </label>
                                <select value={topic} onChange={(e) => setTopic(e.target.value)} name='topic' className='quiz-select'>
                                    {topics[language].map((option, index) => (
                                        <option value={option} key={index}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* DIFFICULTY */}
                            <div className='flex flex-col'>
                                <label htmlFor='difficult' className='uppercase text-xs'>
                                    Difficulty
                                </label>
                                <select name='difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className='quiz-select'>
                                    <option value='beginner'>Beginner</option>
                                    <option value='intermediate'>
                                        Intermediate
                                    </option>
                                    <option value='advanced'>Advanced</option>
                                </select>
                            </div>
                            {/* NUMBER OF QUESTIONS */}
                            <div className='flex flex-col'>
                                <label htmlFor='numQuestions' className='uppercase text-xs'>
                                    # of Questions
                                </label>
                                <select name='numQuestions' value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} className='quiz-select'>
                                    <option value='5'>5</option>
                                    <option value='10'>10</option>
                                    <option value='15'>15</option>
                                    <option value='20'>20</option>
                                </select>
                            </div>
                        </div>
                        <div className='mx-auto mt-8'>
                            <Link className='q-button' href={{ pathname: '/quiz', query: { language, difficulty: difficulty.toLowerCase(), topic: topic.toLowerCase(), numQuestions }}}>
                                Generate Quiz
                            </Link>
                        </div>
                    </form>
                </div>
            ) : contentToShow === 'leaderboard' ? (
                <LeaderboardComponent />
            ) : contentToShow === 'progress' ? (
                <ProgressComponent />
            ) : (
                <div className='text-center'>
                        <h1 className='text-1xl md:text-6xl font-bold my-8'>Welcome to the Cybersecurity Game</h1>
                        <p className='text-xl md:text-2xl my-4'>Explore and test your knowledge!</p>
                        <div className="flex justify-center">
                              <img src='/images/homepage-img1.png' style={{ width: '684px', height: 'auto' }} className='my-4 mx-auto block'/>
                        </div>
                </div>

            )}
=======
            <div className='border rounded border-white/0 '>
                <h1 className='text-center text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-500 via-pink-400 to-blue-500 bg-clip-text text-transparent q-animate-gradient'>
                    Cybersecurity Quiz Game
                </h1>
                {/* <div>
                    <canvas id='scoreChart' width='400' height='400'></canvas>
                </div> */}
                <form onSubmit={handleSubmit} className='mt-14 flex flex-col gap-4 w-[80%] mx-auto'>
                    <div className='grid grid-cols-2 gap-x-8 gap-y-6'>
                        {/* LANGUAGE */}
                        <div className='flex flex-col'>
                            <label htmlFor='language' className='uppercase text-xs'>
                                Main Topic
                            </label>
                            <select value={language} onChange={handleLanguageSelect} name='language' className='quiz-select'>
                                <option value='cryptography'>cryptography</option>
                                <option value='Ransomware'>Ransomware</option>
                                <option value='AppSec'>AppSec</option>
                                <option value='Network'>Network</option>
                            </select>
                        </div>
                        {/* TOPIC */}
                        <div className='flex flex-col'>
                            <label htmlFor='topic' className='uppercase text-xs'>
                                Sub topic
                            </label>
                            <select value={topic} onChange={(e) => setTopic(e.target.value)} name='topic' className='quiz-select'>
                                {topics[language].map((option, index) => (
                                    <option value={option} key={index}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* DIFFICULTY */}
                        <div className='flex flex-col'>
                            <label htmlFor='difficult' className='uppercase text-xs'>
                                Difficulty
                            </label>
                            <select name='difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className='quiz-select'>
                                <option value='beginner'>Beginner</option>
                                <option value='intermediate'>
                                    Intermediate
                                </option>
                                <option value='advanced'>Advanced</option>
                            </select>
                        </div>
                        {/* NUMBER OF QUESTIONS */}
                        <div className='flex flex-col'>
                            <label htmlFor='numQuestions' className='uppercase text-xs'>
                                # of Questions
                            </label>
                            <select name='numQuestions' value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} className='quiz-select'>
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                                <option value='15'>15</option>
                                <option value='20'>20</option>
                            </select>
                        </div>
                    </div>
                    <div className='mx-auto mt-8'>
                        <Link className='q-button' href={{ pathname: '/quiz', query: { language, difficulty: difficulty.toLowerCase(), topic: topic.toLowerCase(), numQuestions }}}>
                            Generate Quiz
                        </Link>
                    </div>
                </form>
            </div>
            
>>>>>>> 9abe1d03fb4d638371bbe53759b3b6a05f26f11c
            <a className='fixed bottom-0 flex items-center gap-2 pb-2 font-mono text-sm text-white/70 transition hover:text-emerald-300 sm:m-0' href='https://github.com/quentin-mckay/ai-quiz-generator' target='_blank'>
            </a>
        </div>
    )
}

export default HomePage
