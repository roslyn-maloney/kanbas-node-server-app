import Database from "../Database/index.js";
import * as enrollmentDao from "../Enrollments/dao.js"

const { courses } = Database;

export function findAllCourses() {
  return Database.courses;
}
export function findCoursesForEnrolledUser(userId) {
    const enrollemnts = enrollmentDao.getEnrollments();

    const enrolledCourses = courses.filter((course) =>
      enrollemnts.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    return enrolledCourses;
  }
  
  export function createCourse(course) {
    const newCourse = { ...course };
    Database.courses = [...Database.courses, newCourse];
    return newCourse;
  }

  export function deleteCourse(courseId) {
    const { courses, enrollments } = Database;
    Database.courses = courses.filter((course) => course._id !== courseId);
    Database.enrollments = enrollments.filter(
      (enrollment) => enrollment.course !== courseId
  );}

  export function updateCourse(courseId, courseUpdates) {
    const { courses } = Database;
    const course = courses.find((course) => course._id === courseId);
    Object.assign(course, courseUpdates);
    return course;
  }
  
  
