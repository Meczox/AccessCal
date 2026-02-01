import { useState } from 'react'
import SideBar from '../Components/SideBar'
import CourseCard from '../Components/CourseCard'
import '../css/Home.css'


const COURSE_DATABASE = {
    "DPST1093": [
        { name: "Weekly Labs" },
        { name: "Iteration 0" },
        { name: "Iteration 1" },
        { name: "Iteration 2" },
        { name: "Iteration 3" },
        { name: "Final Exam", isHurdle: true }
    ],
    "DPST1091": [
        { name: "Lab exercise" },
        { name: "Assignment I" },
        { name: "Assignment II" },
        { name: "Tutorial Hurdle" },
        { name: "Final Exam", isHurdle: true }
    ],
    "DPST1092": [
        { name: "Lab exercise" },
        { name: "Assignment I" },
        { name: "Assignment II" },
        { name: "Tutorial Hurdle" },
        { name: "Final Exam", isHurdle: true }
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