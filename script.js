// ============================================================
// SUBJECTS
// ============================================================

const subjects = {
  1: [
    "EM-1",
    "Chemistry",
    "Mechanics",
    "C",
    "WorkShop",
    "Che-lab",
    "Mech Lab"
  ],

  2: [
    "Em-2",
    "Physics",
    "Graphic",
    "CS",
    "EEE",
    "Phy-lab",
    "Grap-lab",
    "CS Lab",
    "Seminar"
  ],

  3: [
    "EM-3",
    "IPC",
    "CAO",
    "OOP-C++",
    "DSA",
    "OOP Lab",
    "DSA Lab",
    "Seminar-1"
  ],

  4: [
    "OB",
    "Pro.&sat.",
    "Dis. Math",
    "DAA",
    "Web-Tech",
    "DAA-LAB",
    "Web-Lab",
    "Seminar-2"
  ],

  5: [
    "SE",
    "CNIP",
    "ITSM",
    "JAVA",
    "CNIP-Lab",
    "SE & JV LAB",
    "Mini-project-1"
  ],

  6: [
    "OS",
    "DBMS",
    "ST/DWDM",
    "ERP",
    "DBMS-lab",
    "OS-lab",
    "Mini-Project-2"
  ],

  7: [
    "CCSM",
    "AI",
    "PR",
    "ML",
    "IS",
    "CCSM-lab",
    "PR-lab",
    "IS-lab",
    "Project 1",
    "INTERN"
  ],

  8: [
    "IOT",
    "MC",
    "INTERNSHIP"
  ]
};


// ============================================================
// CREDITS
// ============================================================

const credits = {
  1: [4, 4, 3, 3, 2, 1, 1],
  2: [4, 4, 2, 2, 2, 1, 2, 1, 1],
  3: [4, 2, 4, 4, 4, 1, 1, 2],
  4: [3, 4, 4, 4, 3, 1, 1, 2],
  5: [4, 4, 3, 3, 1, 2, 4],
  6: [4, 4, 3, 3, 1, 2, 4],
  7: [2, 3, 3, 3, 3, 2, 2, 2, 4, 1],
  8: [3, 3, 12]
};


// ============================================================
// GRADE → POINT
// ============================================================

const gradeToPoint = (grade) => {

  switch (grade.toUpperCase()) {

    case "EX": return 10.0;
    case "AA": return 9.0;
    case "AB": return 8.5;
    case "BB": return 8.0;
    case "BC": return 7.5;
    case "CC": return 7.0;
    case "CD": return 6.5;
    case "DD": return 6.0;
    case "DE": return 5.5;
    case "EE": return 5.0;
    case "FF": return 0.0;

    default: return null;
  }
};


// ============================================================
// SAVED STUDENT DATA
// ============================================================
// These are taken directly from your C++ data.
// No need to enter these grades again on the website.
// ============================================================

const students = {

  "Sunit": {
    startSemester: 1,

    grades: [
      ["AA","CC","BC","BC","AB","BB","AA"],

      ["CD","BC","AA","BC","CC","AA","AA","CD","AB"],

      ["BC","BC","CC","BC","BB","AA","EX","EX"],

      ["DE","BC","AB","BB","EX","EX","EX","AB"],

      ["BB","BB","BB","AB","EX","AA","AB"],

      ["BB","BB","BB","BB","EX","EX","EX"],

      ["BC","CD","DD","CC","AB","AA","BB","AA","AB","EX"],

      ["BB","AA","EX"]
    ]
  },


  "Viraj": {
    startSemester: 1,

    grades: [
      ["EE","EE","CD","DE","AB","BB","AB"],

      ["EE","DE","BC","CD","EE","AB","AA","DD","BB"],

      ["EE","CD","EE","EE","DE","AA","EX","EE"],

      ["DD","DE","CD","BC","CD","AA","BB","AB"],

      ["DE","DE","CC","DE","BB","BC","AB"],

      ["EE","DD","EE","CD","AB","EX","EX"],

      ["CD","DE","EE","DE","BC","AA","DD","AB","AB","AA"],

      ["AB","BC","EX"]
    ]
  },


  "Ekanth": {
    startSemester: 1,

    grades: [
      ["CD","BC","CC","CD","AA","AA","AA"],

      ["BC","CC","CD","DE","CC","AB","AA","BB","BB"],

      ["BB","CC","CC","DE","DD","EX","EX","EX"],

      ["CD","CC","BC","CC","BC","EX","AA","AB"],

      ["BB","DE","DE","CD","AB","AA","EX"],

      ["BC","DD","BC","BB","BC","EX","BC"],

      ["CC","BC","CD","CD","BC","AA","AB","BB","BB","AB"],

      ["BC","BC","AA"]
    ]
  },


  "Vaibhavi": {
    startSemester: 1,

    grades: [
      ["CD","BB","BB","CD","AB","AA","AA"],

      ["CD","BB","CD","BB","CC","EX","BB","AB","BB"],

      ["AB","AB","CD","CC","CC","AA","EX","AA"],

      ["AB","BC","BC","CC","AA","AA","EX","AB"],

      ["AB","DD","BB","BC","EX","EX","EX"],

      ["AB","AA","AB","BB","EX","EX","EX"],

      ["BC","AB","CC","CC","AB","AA","BC","EX","AA","AA"],

      ["BB","BB","EX"]
    ]
  },


  "Shwetha (DSY)": {
    startSemester: 3,

    grades: [
      ["EE","BC","CC","DD","CC","AA","AA","AA"],

      ["BC","EE","AB","BB","BB","AA","AB","AB"],

      ["AB","BC","AB","BB","BB","EX","AB"],

      ["BC","AA","AB","AB","AA","EX","EX"],

      ["BC","CC","BC","BC","AB","AA","BB","EX","AB","AA"],

      ["AB","BB","EX"]
    ]
  }

};


// ============================================================
// CALCULATE SEMESTER SGPA FROM SAVED GRADES
// ============================================================

function calculateSavedSGPA(grades, semester) {

  let totalPoints = 0;
  let totalCredits = 0;

  grades.forEach((grade, index) => {

    const point = gradeToPoint(grade);

    totalPoints += point * credits[semester][index];

    totalCredits += credits[semester][index];

  });

  return totalPoints / totalCredits;
}


// ============================================================
// DISPLAY SAVED STUDENT RESULT
// ============================================================

function showStudentResult() {

  const studentName =
    document.getElementById("student").value;

  const resultDiv =
    document.getElementById("studentResult");


  if (!studentName) {

    resultDiv.innerHTML = "";

    return;
  }


  const student =
    students[studentName];


  let cumulativePoints = 0;
  let cumulativeCredits = 0;


  let html = `

    <div class="student-result-card">

      <div class="student-result-title">

        <h3>${studentName}</h3>

        <span>
          Saved Result
        </span>

      </div>


      <div class="table-responsive">

        <table class="table table-bordered result-table">

          <thead>

            <tr>
              <th>Semester</th>
              <th>SGPA</th>
              <th>CGPA</th>
            </tr>

          </thead>

          <tbody>
  `;


  student.grades.forEach(
    (semesterGrades, index) => {

      const semester =
        student.startSemester + index;


      let semesterPoints = 0;
      let semesterCredits = 0;


      semesterGrades.forEach(
        (grade, subjectIndex) => {

          const point =
            gradeToPoint(grade);

          const credit =
            credits[semester][subjectIndex];


          semesterPoints +=
            point * credit;

          semesterCredits += credit;

        }
      );


      const sgpa =
        semesterPoints / semesterCredits;


      cumulativePoints += semesterPoints;

      cumulativeCredits += semesterCredits;


      const cgpa =
        cumulativePoints / cumulativeCredits;


      html += `

        <tr>

          <td>
            <strong>
              Semester ${semester}
            </strong>
          </td>

          <td>
            ${sgpa.toFixed(5)}
          </td>

          <td class="cgpa-value">
            ${cgpa.toFixed(5)}
          </td>

        </tr>

      `;

    }
  );


  const finalCGPA =
    cumulativePoints / cumulativeCredits;


  html += `

          </tbody>

        </table>

      </div>


      <div class="final-result">

        <span>
          Final CGPA
        </span>

        <strong>
          ${finalCGPA.toFixed(5)}
        </strong>

      </div>

    </div>

  `;


  resultDiv.innerHTML = html;
}


// ============================================================
// CALCULATOR FUNCTIONS
// ============================================================

function calculateSGPA(semester) {

  let totalPoints = 0;
  let totalCredits = 0;


  subjects[semester].forEach(
    (subject, index) => {

      const grade =
        document.getElementById(
          `grade-${semester}-${index}`
        ).value;


      if (!grade) return;


      const point =
        gradeToPoint(grade);


      totalPoints +=
        point * credits[semester][index];


      totalCredits +=
        credits[semester][index];

    }
  );


  if (totalCredits === 0) {
    return null;
  }


  return totalPoints / totalCredits;
}


// ============================================================
// POPULATE CALCULATOR SUBJECTS
// ============================================================

function populateSubjects() {

  const selected =
    document.getElementById("semester").value;

  const subjectsDiv =
    document.getElementById("subjects");

  subjectsDiv.innerHTML = "";


  let semestersToShow = [];


  if (selected === "all") {

    semestersToShow =
      Object.keys(subjects);

  }

  else if (selected === "dall") {

    semestersToShow =
      Object.keys(subjects)
        .filter(
          sem => Number(sem) >= 3
        );

  }

  else {

    semestersToShow = [selected];

  }


  const gradeOptions = [
    "EX",
    "AA",
    "AB",
    "BB",
    "BC",
    "CC",
    "CD",
    "DD",
    "DE",
    "EE",
    "FF"
  ];


  semestersToShow.forEach(
    semester => {

      const box =
        document.createElement("div");

      box.className =
        "semester-box";


      box.innerHTML = `

        <h5 class="semester-title">
          Semester ${semester}
        </h5>

      `;


      subjects[semester].forEach(
        (subject, index) => {

          const div =
            document.createElement("div");

          div.className = "mb-3";


          div.innerHTML = `

            <label
              class="form-label"
              for="grade-${semester}-${index}"
            >
              ${subject}

              <span class="credit">
                (${credits[semester][index]} Credit)
              </span>

            </label>


            <select
              id="grade-${semester}-${index}"
              class="form-select"
            >

              <option value="">
                Select Grade
              </option>

              ${gradeOptions.map(
                grade =>
                  `<option value="${grade}">
                    ${grade}
                  </option>`
              ).join("")}

            </select>

          `;


          box.appendChild(div);

        }
      );


      subjectsDiv.appendChild(box);

    }
  );

}


// ============================================================
// MANUAL CALCULATOR
// ============================================================

function calculateCGPA() {

  const selected =
    document.getElementById("semester").value;

  const resultDiv =
    document.getElementById("result");


  const semester =
    Number(selected);


  if (!semester) {

    resultDiv.innerHTML = `

      <div class="alert alert-info">
        For saved students, use the Students dropdown above.
      </div>

    `;

    return;
  }


  const sgpa =
    calculateSGPA(semester);


  if (sgpa === null) {

    resultDiv.innerHTML = `

      <div class="alert alert-danger">
        Please enter grades!
      </div>

    `;

    return;
  }


  resultDiv.innerHTML = `

    <div class="single-result">

      <h3>
        Semester ${semester} SGPA
      </h3>

      <div class="big-result">
        ${sgpa.toFixed(5)}
      </div>

    </div>

  `;
}


// ============================================================
// INITIALIZATION
// ============================================================

document
  .getElementById("semester")
  .addEventListener(
    "change",
    populateSubjects
  );


document
  .getElementById("student")
  .addEventListener(
    "change",
    showStudentResult
  );


document.addEventListener(
  "DOMContentLoaded",
  populateSubjects
);