import * as dao from "./dao.js";

export default function EnrollmentRoutes(app){

    // do we use the function in userroutes that finds the enrolled courses for a current user? 
    app.get("/api/user/:userId/courses", (req, res) => {
        const { courseId } = req.params;
        const enrollments = dao.findEnrollmentsForCourse(courseId);
        res.json(enrollments);
    });

    app.delete("/api/user/:userId/courses/:courseId/enrollments/unenroll", (req,res) => {
        const{courseId, userId} = req.params;
        const status = dao.unEnrollUserFromCourse(courseId);
        res.send(status);
    })

//creating a new enrollement
  app.post("/api/user/:userId/courses/:courseId/enrollments/enroll", (req, res) => {
    const { courseId, userId } = req.params;
    const newEnrollment = dao.enrollUserInCourse(userId,courseId);
    res.json(newEnrollment);
  });
}