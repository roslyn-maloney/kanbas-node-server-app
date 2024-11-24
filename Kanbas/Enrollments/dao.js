import Database from "../Database/index.js";
const { enrollments } = Database;

export function enrollUserInCourse(userId, courseId) {
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unEnrollUserFromCourse(userId, courseId) {
  enrollments.pop({ _id: Date.now(), user: userId, course: courseId }); // can I use pop 
}

export function findEnrollmentForCourse(courseId) {
  return enrollments.filter((enroll) => enroll.course === courseId).filter((e) => e.user === userId);

}

export const getEnrollments = () => enrollments;