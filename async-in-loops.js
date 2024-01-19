const students = ["Parves", "Aungkon", "Alvee", "Shemul", "Nayan"];

function addGrade(stu) {
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      let temp = stu + "A+";
      resolve(temp);
    }, 2000);
  });
  return promise;
}

function addMarks(students) {
  let newStudents = [];
  console.log(students);

  students.forEach(async (stu) => {
    let grade = await addGrade(stu);
    console.log(grade);
    newStudents.push(grade);
  });
  console.log(newStudents);
}

addMarks(students);
