const grades = [
    {student: 'Mike Stone', grade: 89},
    {student: 'John Smith', grade: 92},
    {student: 'Victoria Rossi', grade: 97},
]

const getHighestGrade = ((grades, gradeNumber) => {
    return grades.find((grad, index) => {
        if (grad.grade >= gradeNumber) {
            return grad.grade
        }
         
    })
})

const grade = getHighestGrade(grades, 90)
console.log(grade)