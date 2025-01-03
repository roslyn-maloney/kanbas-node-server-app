import Database from "../Database/index.js";

export function findAssignmentForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
   }
   

export function createAssignment(assignment) {
    const {assignments} = Database;
    const newAssignment = { 
        ...assignment, 
        _id: Date.now().toString()
    };
    Database.assignments = [...assignments, newAssignment];
    return newAssignment;
  }

  
export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}