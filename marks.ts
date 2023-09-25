const marks: number[] = [85, 92, 78, 30, 89];

const hasPassed = (mark: number): boolean => {
  const passingThreshold = 60;
  return mark >= passingThreshold;
};

marks.forEach((mark, index) => {
  const subject = `Subject ${index + 1}`;
  const result = hasPassed(mark) ? 'Passed' : 'Failed';
  console.log(`${subject}: ${result}`);
});
