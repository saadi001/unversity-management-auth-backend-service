import express from 'express';
import validateRequest from '../../../middlewars/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
import { academicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createSemester
);
router.get('/:id', academicSemesterController.getSingleSemester);
router.get('/', academicSemesterController.getAllSemester);

export const AcademicSemesterRoute = router;
