const students = [
  {
    name: "Zain ul Abideen",
    scores: [98, 90, 98, 97],
    location: {
      address: "Quaid I Azam University",
      city: "ICT"
    }
  },
  {
    name: "Ahmer Raza",
    scores: [79, 89, 96, 86],
    location: {
      address: "Airport road",
      city: "Gilgit"
    }
  },
  {
    name: "Muhammad Baqir",
    scores: [98, 90, 98, 97],
    location: {
      address: "Moqam e Hayat",
      city: "Sargodha"
    }
  },
  {
    name: "Ayesha Zaffar",
    scores: [88, 93, 76, 97],
    location: {
      address: "Old Airport road",
      city: "Rawalpindi"
    }
  },
  {
    name: "Sara",
    scores: [78, 69, 98, 89],
    location: {
      address: "Gulshan e Iqbal",
      city: "Karachi"
    }
  }
];

// Helper function to turn an average score into a letter grade
function getLetterGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

console.log("\n--- STUDENT GRADE REPORT ---\n");
// 1. Process each student to find their average and grade (No mutation)
const classReport = students.map((student) => {
  const totalScore = student.scores.reduce((sum, current) => sum + current, 0);
  const average = totalScore / student.scores.length;
  const grade = getLetterGrade(average);

  // Requirement: Print a readable line for every student
  console.log(`${student.name} (${student.location.city}): Avg: ${average.toFixed(1)} -> Grade: ${grade}`);

  return { ...student, average, grade };
});

// 2. Requirement: Count honor roll students (average >= 85) using filter
const honorRollCount = classReport.filter(student => student.average >= 85).length;

// 3. Requirement: Compute overall class average using reduce
const totalClassScore = classReport.reduce((sum, student) => sum + student.average, 0);
const classAverage = totalClassScore / students.length;

// 4. Requirement: Find the top student using reduce
const topStudent = classReport.reduce((highest, current) => {
  return current.average > highest.average ? current : highest;
}, classReport[0]);

console.log("----------------------------");
console.log("\n--- CLASS METRICS SUMMARY ---\n");
console.log(`Total Students: ${students.length}`);
console.log(`Honor Roll Students (>= 85): ${honorRollCount}`);
console.log(`Overall Class Average: ${classAverage.toFixed(1)}%`);
console.log(`Top Student: ${topStudent.name} (Avg: ${topStudent.average.toFixed(1)}%)`);
console.log("----------------------------");