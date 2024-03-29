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
router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterController.updateSemester
);
router.delete('/:id', academicSemesterController.deleteSemester);

export const AcademicSemesterRoute = router;
