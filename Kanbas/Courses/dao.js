import * as enrollmentDao from "../Enrollments/dao.js"
import model from "./model.js";

export function findAllCourses() {
  return model.find();
}
export function findCoursesForEnrolledUser(userId) {
    const enrollemnts = enrollmentDao.getEnrollments();

    const enrolledCourses = courses.filter((course) =>
      enrollemnts.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    return enrolledCourses;
  }
  
  export function createCourse(course) {
    delete course._id;
    return model.create(course);
  }

  export function deleteCourse(courseId) {
    return model.deleteOne({ _id: courseId });
   }
   
   export function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
   }
   
  
  
