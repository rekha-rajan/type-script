const marks: number[] = [85, 92, 78, 30, 89];

const hasPassed = (mark: number, index:number) => {
  const passingThreshold = 60;
  const subject = `Subject ${index + 1}`;
  const result = mark >= passingThreshold ? 'Passed' : 'Failed';
  console.log(`${subject}: ${result}`);
  
};
marks.forEach(hasPassed);