const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  //put your code here

  const passedStudents = allStudentsList.filter(name => !studentsForRetake.includes(name));

  const message = passedStudents.map(name => 'Good job, ' + name);

  return message;

};

//example 1:

//input:
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

getMessagesForBestStudents(allStud, retakeStud);

console.log(getMessagesForBestStudents(allStud, retakeStud));

//output:
//['Good job, a', 'Good job, c']
