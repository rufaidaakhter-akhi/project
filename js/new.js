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
      if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  for (let user of users) {
    if (
      typeof user !== "object" ||
      user === null ||
      !("isActive" in user)
    ) {
      return "Invalid";
    }
  }

  return users.filter(user => user.isActive === true)
}

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    // Write your code here...
     if (typeof caption !== "string") {
    return "Invalid";
  }

  let words = caption.split(" ");
  let hashtagCount = 0;
  let longestTag = "";

  for (let word of words) {
    if (word.startsWith("#")) {
      hashtagCount++;

      let tag = word.slice(1);

      if (tag.length > longestTag.length) {
        longestTag = tag;
      }
    }
  }

  return {
    hashtagCount: hashtagCount,
    longestTag: longestTag
  };
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    // Write your code here
    if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  for (let score of scores) {
    if (typeof score !== "number") {
      return "Invalid";
    }
  }

  let updatedScores = scores.map(score => score + 10);

  return updatedScores.reduce((total, score) => total + score, 0);
}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
function generateLeaderboard(students) {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  if (students.length === 0) {
    return "Invalid";
  }

  for (let student of students) {
    if (
      typeof student !== "object" ||
      student === null ||
      !("name" in student) ||
      !("score" in student) ||
      typeof student.score !== "number"
    ) {
      return "Invalid";
    }
  }

  const qualified = students.filter(student => {
    return student.score >= 70;
  });

  const names = qualified.map(({ name }) => {
    return name.toUpperCase();
  });

  return names.slice(0, 3);
}

