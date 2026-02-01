import { useState } from 'react'
import SideBar from '../Components/SideBar.jsx'
import CourseCard from '../Components/CourseCard.jsx'
import '../css/Home.css'


const COURSE_DATABASE = {
    "DPST1093": [
        { name: "Weekly Labs", weight: 10 },
        { name: "Iteration 0", weight: 2 },
        { name: "Iteration 1", weight: 10 },
        { name: "Iteration 2", weight: 18 },
        { name: "Iteration 3", weight: 15 },
        { name: "Final Exam", weight: 45, isHurdle: true }
    ],
    "DPST1091": [
        { name: "Lab exercise", weight: 15 },
        { name: "Assignment I", weight: 20},
        { name: "Assignment II", weight: 25 },
        { name: "Final Exam", weight: 40, isHurdle: true }
    ],
    "DPST1092": [
        { name: "Lab exercise", weight: 15 },
        { name: "Assignment I", weight: 20 },
        { name: "Assignment II", weight: 20 },
        { name: "Final Exam",weight: 45, isHurdle: true }
    ],
};

const Home = () => {

    const [inputCourse, setInputCourse] = useState("");
    const [displayCourse, setDisplayCourse] = useState([]);

    const addCourse = () => {
        if (!inputCourse) return;

        const data = COURSE_DATABASE[inputCourse.toUpperCase()];

        if (data) {
            const newCourse = {
                id: inputCourse.toUpperCase(),
                code: inputCourse.toUpperCase(),
                assessments: data
            };

            setDisplayCourse([...displayCourse, newCourse]);
            setInputCourse("");
        } else {
            alert("Course Not Found! Please view the supported Courses");
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addCourse();
        }
    }

    return (
        <div>
            <div className='HomeContent'>
                <div className='searchCourse'>
                    <input className='inputSearch'
                        type='text'
                        placeholder='Enter Course Code...'
                        value={inputCourse}
                        onChange={e => setInputCourse(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div>
                    <div className='CardGrid'>
                        {displayCourse.map((course) => (
                        <CourseCard 
                           key={course.id}
                           courseCode={course.code}
                           assessments={course.assessments}
                        />
                    ))}
                    </div>
                </div>
            </div>
            <SideBar />
        </div>
    )
}

export default Home