import React from 'react'
import '../css/CourseCard.css'

const CourseCard = ({ courseCode, assessments }) => {

    return (
        <div className='CourseCard'>
            <div className='CardHeader'>
                <h2>{courseCode}</h2>
            </div>

            <div className='AssessmentDetails'>
                {assessments && assessments.map((item, index) => (
                    <div className='assessment-row' key={index}>
                        <span className={item.isHurdle ? "task-name text-red" : "task-name"}>
                            {item.name}
                        </span>
                        <input 
                            className='grade-input'
                            type='text' 
                            placeholder='Input your Grade...'
                        />
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default CourseCard