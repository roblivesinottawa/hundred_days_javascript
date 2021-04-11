const bestStudents = (studentArr) => {
    let bestGrade = 0,
        bestStudents = [],
        i,
        maxGrade
    
    for (i = 0; i < studentArr.length; i++) {
        maxGrade = Math.max.apply(null, studentArr[i].grades)

        if (maxGrade === bestGrade) {
            bestStudents.push(studentArr[i])
            continue
        }
        
        if (maxGrade > bestGrade) {
            bestGrade = maxGrade
            bestStudents = [studentArr[i]]
        }
    }
    return bestStudents
}

let students = [
    {name: 'Danielle', grades: [90, 89, 97]},
    {name: 'Brian', grades: [93, 84, 94]},
    {name: 'Robinson', grades: [89, 93, 92]},
]

console.log(bestStudents(students))

