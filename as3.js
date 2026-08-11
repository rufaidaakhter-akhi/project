//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
    // Write your code here

    if (
    typeof student !== "object" ||
    student === null ||
    !("name" in student) ||
    !("age" in student) ||
    !("course" in student)
  ) {
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

//Problem-02: Active User Filter
function filterActiveUsers(users) {
    // Write your code here
}

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    // Write your code here...
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    // Write your code here
}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray = students) {
        return "Invalid";
    }

    if (students.length == []) {
        return "Invalid";
    }

    const qualified = students.filter(student => {
        student.score > 70;
    });

    const names = qualified.map(({ name }) => {
        name.toUpperCase();
    });

    return names.slice(0, 2);
}

