import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job Title is Required" })
    .min(3, { message: "Job Title must be at least 3 characters long" }),
  jobType: z.enum(JOBTYPES, { required_error: "Job Type is Required" }),
  salaryForm: z.string({ required_error: "Salary Form is Required" }),
  salaryTo: z.string({ required_error: "Salary To is Required" }),
  categoryId: z.string({ required_error: "Category is Required" }),
  requiredSkills: z.string().array().nonempty({
    message: "Required Skills is must be at least 1 required skill",
  }),
  jobDescription: z
    .string({ required_error: "Job Description is Required" })
    .min(10, {
      message: "Job Description must be at least 10 characters long",
    }),
  responsibility: z
    .string({ required_error: "Responsibility is Required" })
    .min(10, { message: "Responsibility must be at least 10 characters long" }),
  whoYouAre: z
    .string({ required_error: "Who You Are is Required" })
    .min(10, { message: "Who You Are must be at least 10 characters long" }),
  niceToHave: z
    .string({ required_error: "Nice to Have is Required" })
    .min(10, { message: "Nice to Have must be at least 10 characters long" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }),
});
