#include <iostream>
#include <vector>
#include <string>
#include <iomanip>
using namespace std;

// Convert Grade → Points
float gradeToPoint(const string &grade)
{
    if (grade == "EX") return 10.0;
    else if (grade == "AA") return 9.0;
    else if (grade == "AB") return 8.5;
    else if (grade == "BB") return 8.0;
    else if (grade == "BC") return 7.5;
    else if (grade == "CC") return 7.0;
    else if (grade == "CD") return 6.5;
    else if (grade == "DD") return 6.0;
    else if (grade == "DE") return 5.5;
    else if (grade == "EE") return 5.0;
    else return 0.0;
}

// CGPA Calculation
float calculateCGPA(const vector<string> &grades, const vector<int> &credits)
{
    float totalPoints = 0;
    int totalCredits = 0;

    for (int i = 0; i < grades.size(); i++)
    {
        totalPoints += gradeToPoint(grades[i]) * credits[i];
        totalCredits += credits[i];
    }

    return totalCredits ? totalPoints / totalCredits : 0;
}

// Process Student (with starting semester support)
void processStudent(string name,
                    vector<vector<string>> studentGrades,
                    vector<vector<int>> allCredits,
                    int startSem = 1)
{
    cout << "\n========== " << name << " ==========\n\n";

    vector<string> cumulativeGrades;
    vector<int> cumulativeCredits;

    cout << fixed << setprecision(5);

    for (int i = 0; i < studentGrades.size(); i++)
    {
        vector<string> grades = studentGrades[i];
        vector<int> credits = allCredits[i];

        float sgpa = calculateCGPA(grades, credits);

        cumulativeGrades.insert(cumulativeGrades.end(), grades.begin(), grades.end());
        cumulativeCredits.insert(cumulativeCredits.end(), credits.begin(), credits.end());

        float cgpa = calculateCGPA(cumulativeGrades, cumulativeCredits);

        cout << "Semester [" << (startSem + i) << "] = " << setw(8) << sgpa
             << "    Semester [" << (startSem + i) << "] = " << setw(8) << cgpa
             << endl;
    }

    cout << endl;
}

int main()
{
    // Credits
    vector<vector<int>> allCredits = {
        {4,4,3,3,2,1,1},
        {4,4,2,2,2,1,2,1,1},
        {4,2,4,4,4,1,1,2},
        {3,4,4,4,3,1,1,2},
        {4,4,3,3,1,2,4},
        {4,4,3,3,1,2,4},
        {2,3,3,3,3,2,2,2,4,1},
        {3,3,12}
    };

    // ================= STUDENTS =================

    vector<vector<string>> sunitGrades = {
        {"AA","CC","BC","BC","AB","BB","AA"},
        {"CD","BC","AA","BC","CC","AA","AA","CD","AB"},
        {"BC","BC","CC","BC","BB","AA","EX","EX"},
        {"DE","BC","AB","BB","EX","EX","EX","AB"},
        {"BB","BB","BB","AB","EX","AA","AB"},
        {"BB","BB","BB","BB","EX","EX","EX"},
        {"BC","CD","DD","CC","AB","AA","BB","AA","AB","EX"},//ex
        {"BB","AA","EX"}
    };

    vector<vector<string>> virajGrades = {
        {"EE","EE","CD","DE","AB","BB","AB"},
        {"EE","DE","BC","CD","EE","AB","AA","DD","BB"},
        {"EE","CD","EE","EE","DE","AA","EX","EE"},
        {"DD","DE","CD","BC","CD","AA","BB","AB"},
        {"DE","DE","CC","DE","BB","BC","AB"},
        {"EE","DD","EE","CD","AB","EX","EX"},
        {"CD","DE","EE","DE","BC","AA","DD","AB","AB","AA"},//aa
        {"AB","BC","EX"}
    };

    vector<vector<string>> ekanthGrades = {
        {"CD","BC","CC","CD","AA","AA","AA"},
        {"BC","CC","CD","DE","CC","AB","AA","BB","BB"},
        {"BB","CC","CC","DE","DD","EX","EX","EX"},
        {"CD","CC","BC","CC","BC","EX","AA","AB"},
        {"BB","DE","DE","CD","AB","AA","EX"},
        {"BC","DD","BC","BB","BC","EX","BC"},
        {"CC","BC","CD","CD","BC","AA","AB","BB","BB","AB"},//ab
    {"BC","BC","AA"}
    };

    vector<vector<string>> vaibhaviGrades = {
        {"CD","BB","BB","CD","AB","AA","AA"},
        {"CD","BB","CD","BB","CC","EX","BB","AB","BB"},
        {"AB","AB","CD","CC","CC","AA","EX","AA"},
        {"AB","BC","BC","CC","AA","AA","EX","AB"},
        {"AB","DD","BB","BC","EX","EX","EX"},
        {"AB","AA","AB","BB","EX","EX","EX"},
        {"BC","AB","CC","CC","AB","AA","BC","EX","AA","AA"},// aa
        {"BB","BB","EX"}
    };

    // ================= SHWETHA (DSY) =================

    vector<vector<string>> shwethaGrades = {
        {"EE","BC","CC","DD","CC","AA","AA","AA"},   // Sem 3
        {"BC","EE","AB","BB","BB","AA","AB","AB"},   // Sem 4
        {"AB","BC","AB","BB","BB","EX","AB"},        // Sem 5
        {"BC","AA","AB","AB","AA","EX","EX"},        // Sem 6
        {"BC","CC","BC","BC","AB","AA","BB","EX","AB","AA"}, // Sem 7 //aa
        {"AB","BB","EX"}
    };

    vector<vector<int>> shwethaCredits = {
        allCredits[2],
        allCredits[3],
        allCredits[4],
        allCredits[5],
        allCredits[6],
        allCredits[7]
    };

    // ================= RUN =================

    processStudent("Sunit", sunitGrades, allCredits);
    processStudent("Viraj", virajGrades, allCredits);
    processStudent("Ekanth", ekanthGrades, allCredits);
    processStudent("Vaibhavi", vaibhaviGrades, allCredits);

    // 🔥 DSY student starts from Sem 3
    processStudent("Shwetha (DSY)", shwethaGrades, shwethaCredits, 3);

    return 0;
}