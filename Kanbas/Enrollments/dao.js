import Database from "../Database/index.js";
const { enrollments } = Database;

export function enrollUserInCourse(userId, courseId) {
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unEnrollUserFromCourse(userId, courseId) {
  // const { enrollments } = Database;
  enrollments.pop({ _id: Date.now(), user: userId, course: courseId }); // can I use pop 
}

export function findEnrollmentForCourse(courseId) {
  // const { enrollments } = Database;
  return enrollments.filter((enroll) => enroll.course === courseId);

}

export const getEnrollments = () => enrollments;