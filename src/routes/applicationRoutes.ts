import { Router } from "express";
import { addApplication, getAllApplications, getApplicationById, updateApplicationById, deleteApplicationById } from "../controllers/applicationController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.use(protect)

router.post('/application', addApplication)
router.get('/application', getAllApplications)
router.get('/application/:id', getApplicationById)
router.put('/application/:id', updateApplicationById)
router.delete('/application/:id', deleteApplicationById)

export default router