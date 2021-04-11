let marks = 90

    if (marks >= 80) {
        grade = "First Division"
    } else if (marks >= 60) {
        grade = "Second Division"
    } else if (marks >= 40) {
        grade = "Third Division"
    } else {
        grade = "Fail"
    }


console.log(`Grade: ${grade}`)