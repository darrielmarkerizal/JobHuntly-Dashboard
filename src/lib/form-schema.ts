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

export const overviewFormSchema = z.object({
  image: z.any(),
  name: z.string({ required_error: "Name is required" }),
  website: z.string({ required_error: "Website is required" }),
  location: z.string({ required_error: "Location is required" }),
  employee: z.string({ required_error: "Employee is required" }),
  industry: z.string({ required_error: "Industry is required" }),
  dateFounded: z.date({ required_error: "dateFounded is required" }),
  techStack: z
    .string({ required_error: "Tech Stack is required" })
    .array()
    .nonempty({ message: "Tech Stack must be at least 1 data" }),
  description: z.string({ required_error: "Description is required" }),
});

export const socialMediaFormSchema = z.object({
  facebook: z.string({ required_error: "Facebook link is required" }),
  instagram: z.string({ required_error: "Instagram link is required" }),
  linkedin: z.string({ required_error: "LinkedIn link is required" }),
  twitter: z.string({ required_error: "Twitter link is required" }),
  youtube: z.string({ required_error: "Youtube link is required" }),
});

export const teamFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  position: z.string({ required_error: "Position is required" }),
  instagram: z.string({ required_error: "Instagram is required" }),
  linkedin: z.string({ required_error: "Linkedin is required" }),
});
