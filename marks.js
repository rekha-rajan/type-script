// Create an array to store marks in five subjects
var marks = [85, 92, 78, 64, 89];
// Function to check if a student has passed in a subject
var hasPassed = function (mark) {
    // You can adjust the passing threshold as needed (e.g., 50 for a passing mark)
    var passingThreshold = 60;
    return mark >= passingThreshold;
};
// Use array method to check and print if the student has passed in each subject
marks.forEach(function (mark, index) {
    var subject = "Subject ".concat(index + 1);
    var result = hasPassed(mark) ? 'Passed' : 'Failed';
    console.log("".concat(subject, ": ").concat(result));
});
