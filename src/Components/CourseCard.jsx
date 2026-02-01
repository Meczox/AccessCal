import React, { useState, useEffect } from 'react'
import '../css/CourseCard.css'

const CourseCard = ({ courseCode, assessments }) => {

    const [grades, setGrades] = useState({});
    const [target, setTarget] = useState(50);
    const [result, setResult] = useState({ 
        currentTotal: 0,       
        remainingWeight: 100,  
        neededAvg: 0,          
        hurdleFailed: false,
        isComplete: false,
        isImpossible: false
    });

    useEffect(() => {
        let currentTotal = 0;
        let completedWeight = 0;
        let hurdleFailed = false;

        assessments.forEach((item, index) => {
            const userInput = grades[index];
            
            if (userInput !== undefined && userInput !== "") {
                const score = parseFloat(userInput);
                
                currentTotal += (score / 100) * item.weight;
                
                completedWeight += item.weight;

                if (item.isHurdle && score < 50) {
                    hurdleFailed = true;
                }
            }
        });

        const remainingWeight = 100 - completedWeight;
        let neededAvg = 0;
        let isImpossible = false;

        if (remainingWeight > 0) {
            neededAvg = ((target - currentTotal) / remainingWeight) * 100;
            if (neededAvg < 0) neededAvg = 0;
            if (neededAvg > 100) isImpossible = true;
        }

        setResult({
            currentTotal: currentTotal.toFixed(2),
            remainingWeight: remainingWeight,
            neededAvg: neededAvg.toFixed(1),
            hurdleFailed: hurdleFailed,
            isComplete: remainingWeight === 0,
            isImpossible: isImpossible
        });

    }, [grades, assessments, target]);


    const handleInputChange = (index, value) => {
        setGrades(prev => ({ ...prev, [index]: value }));
    };

    return (
        <div className='CourseCard'>
            <div className='CardHeader' style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h2>{courseCode}</h2>
                <select 
                    value={target} 
                    onChange={(e) => setTarget(Number(e.target.value))}
                    style={{
                        padding: '5px', borderRadius: '8px', border: '1px solid #E5E7EB',
                        fontSize: '12px', color: '#374151'
                    }}
                >
                    <option value={50}>Pass (50%)</option>
                    <option value={65}>Credit (65%)</option>
                    <option value={75}>Distinction (75%)</option>
                    <option value={85}>HD (85%)</option>
                </select>
            </div>

            <div className='AssessmentDetails'>
                {assessments && assessments.map((item, index) => (
                    <div className='assessment-row' key={index}>
                        <span className={item.isHurdle ? "task-name text-red" : "task-name"}>
                            {item.name}
                        </span>
                        <input 
                            className='grade-input'
                            type='number' 
                            placeholder='-'
                            value={grades[index] || ""}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    </div>
                ))} 
            </div>

            <div className='CardFooter'>
                {result.isComplete ? (
                     <div>
                        <h3>Final Mark: {result.currentTotal}%</h3>
                        {result.hurdleFailed && <p style={{color:'red', fontSize:'12px'}}>Failed Hurdle Requirement</p>}
                     </div>
                ) : (
                     <div>
                        {result.hurdleFailed ? (
                            <h3 style={{color: '#EF4444'}}>Hurdle Fail</h3>
                        ) : result.isImpossible ? (
                            <h3 style={{color: '#EF4444'}}>Impossible</h3>
                        ) : (
                            <div>
                                <p style={{fontSize: '12px', color: '#6B7280', margin: 0}}>To get {target}%:</p>
                                <h3>Need {result.neededAvg}% avg</h3>
                                <p style={{fontSize: '10px', color: '#9CA3AF'}}>on remaining items</p>
                            </div>
                        )}
                     </div>
                )}
            </div>
        </div>
    )
}

export default CourseCard