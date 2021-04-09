const students = [
    {
   "name": "Jack Frost",
   "grade": 80,
    },
    {
   "name": "James Potter",
   "grade": 92,
    },
    {
   "name": "Jessica Jones",
   "grade": 85,
    },
    {
   "name": "Tom Hanks",
   "grade": 75
    },
    {
   "name": "Steve Jobs",
   "grade": 89
    },
]



const getAverageGrade = (grade, totalScore=100) => {
    const average = (grade / totalScore) * 100
    let letterGrade = ''

    if (average >= 90) {
        letterGrade = 'A'
    } else if (average >= 80) {
        letterGrade = 'B'
    } else if (average >= 70) {
        letterGrade = 'C'
    } else if (average >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `you got a ${letterGrade}, ${average}`
}

console.log(getAverageGrade(78))