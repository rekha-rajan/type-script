let studentInfo: [string, number, string] = ["John Doe", 20, "Computer Science"];

console.log("Original Student Information:");
console.log("Name:", studentInfo[0]);
console.log("Age:", studentInfo[1]);
console.log("Course:", studentInfo[2]);

studentInfo = ["Jane Smith", 22, "Biology"];

console.log("\nUpdated Student Information:");
console.log("Name:", studentInfo[0]);
console.log("Age:", studentInfo[1]);
console.log("Course:", studentInfo[2]);

studentInfo = ["", 0, ""];

console.log("\nCleared Student Information:");
console.log("Name:", studentInfo[0]);
console.log("Age:", studentInfo[1]);
console.log("Course:", studentInfo[2]);
