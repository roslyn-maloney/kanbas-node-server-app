//implement routes for creating, retrieving, updating, and deleting assignments
import * as assignmentDao from "./dao.js";

export default function AssignmentRoutes(app) {
// updates a assignment 
app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
});

// deleting of a assignment
 app.delete("/api/assignments/:assignmentId", async (req, res) => {
   const { assignmentId } = req.params;
   const status = await assignmentDao.deleteAssignment(assignmentId);
   res.send(status);
 });
 
} 