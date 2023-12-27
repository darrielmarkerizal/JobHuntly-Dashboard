import { EnumValues, string } from "zod";
import { benefitType } from "./types";

export const JOBTYPES: EnumValues = [
  "Full Time",
  "Part Time",
  "Remote",
  "Internship",
];

export type optionType = {
  id: string;
  label: string;
};

export const BENEFITS: benefitType[] = [
  // {
  //   benefit: "Full Healthcare",
  //   desc: "We believe in thriving communities and that starts with our team being happy and healthy.",
  // },
  // {
  //   benefit: "Unlimited Vacation",
  //   desc: "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
  // },
  // {
  //   benefit: "Skill Development",
  //   desc: "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
  // },
];

export const JOB_LISTING_COLUMN: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
];

export const JOB_APPLICANT_COLUMN: string[] = ["Name", "Applied Date"];

export const JOB_APPLICANT_DATA = [
  {
    name: "Darriel Markerizal",
    appliedDate: "27 December 2023",
  },
];

export const JOB_LISTING_DATA = [
  {
    roles: "Software Engineer",
    status: "Live",
    datePosted: "2022-01-01",
    dueDate: "2022-02-01",
    jobType: "Full-Time",
    applicants: 10,
    needs: 15,
  },
  {
    roles: "Data Scientist",
    status: "Live",
    datePosted: "2022-01-02",
    dueDate: "2022-02-02",
    jobType: "Part-Time",
    applicants: 20,
    needs: 10,
  },
  {
    roles: "Product Manager",
    status: "Live",
    datePosted: "2022-01-03",
    dueDate: "2022-02-03",
    jobType: "Full-Time",
    applicants: 15,
    needs: 12,
  },
  {
    roles: "UX Designer",
    status: "Live",
    datePosted: "2022-01-04",
    dueDate: "2022-02-04",
    jobType: "Part-Time",
    applicants: 8,
    needs: 20,
  },
  {
    roles: "DevOps Engineer",
    status: "Live",
    datePosted: "2022-01-05",
    dueDate: "2022-02-05",
    jobType: "Full-Time",
    applicants: 12,
    needs: 18,
  },
  {
    roles: "Frontend Developer",
    status: "Live",
    datePosted: "2022-01-06",
    dueDate: "2022-02-06",
    jobType: "Part-Time",
    applicants: 22,
    needs: 14,
  },
  {
    roles: "Backend Developer",
    status: "Live",
    datePosted: "2022-01-07",
    dueDate: "2022-02-07",
    jobType: "Full-Time",
    applicants: 18,
    needs: 16,
  },
  {
    roles: "Full Stack Developer",
    status: "Live",
    datePosted: "2022-01-08",
    dueDate: "2022-02-08",
    jobType: "Part-Time",
    applicants: 25,
    needs: 10,
  },
  {
    roles: "Database Administrator",
    status: "Live",
    datePosted: "2022-01-09",
    dueDate: "2022-02-09",
    jobType: "Full-Time",
    applicants: 14,
    needs: 12,
  },
  {
    roles: "System Analyst",
    status: "Live",
    datePosted: "2022-01-10",
    dueDate: "2022-02-10",
    jobType: "Part-Time",
    applicants: 16,
    needs: 14,
  },
];

export const LOCATION_OPTIONS: optionType[] = [
  { id: "Indonesia", label: "Indonesia" },
  { id: "Singapore", label: "Singapore" },
  { id: "Malaysia", label: "Malaysia" },
  { id: "Thailand", label: "Thailand" },
  { id: "Vietnam", label: "Vietnam" },
  { id: "Philippines", label: "Philippines" },
  { id: "Myanmar", label: "Myanmar" },
  { id: "Cambodia", label: "Cambodia" },
  { id: "Laos", label: "Laos" },
  { id: "Brunei", label: "Brunei" },
  { id: "Timor-Leste", label: "Timor-Leste" },
  { id: "China", label: "China" },
  { id: "Hong Kong", label: "Hong Kong" },
  { id: "Taiwan", label: "Taiwan" },
  { id: "Japan", label: "Japan" },
  { id: "South Korea", label: "South Korea" },
  { id: "North Korea", label: "North Korea" },
  { id: "Mongolia", label: "Mongolia" },
  { id: "Macau", label: "Macau" },
  { id: "Afghanistan", label: "Afghanistan" },
];

export const EMPLOYEE_OPTIONS: optionType[] = [
  {
    id: "1-50",
    label: "1-50",
  },
  {
    id: "51-150",
    label: "51-150",
  },
  {
    id: "151-250",
    label: "151-250",
  },
  {
    id: "251-500",
    label: "251-500",
  },
  {
    id: "501-1000",
    label: "501-1000",
  },
  {
    id: "1000-above",
    label: "1000-above",
  },
];

export const INDUSTRY_OPTION: optionType[] = [
  { id: "1", label: "Technology" },
  { id: "2", label: "Healthcare" },
  { id: "3", label: "Finance" },
  { id: "4", label: "Manufacturing" },
  { id: "5", label: "Education" },
  { id: "6", label: "Retail" },
  { id: "7", label: "Transportation" },
  { id: "8", label: "Construction" },
  { id: "9", label: "Real Estate" },
  { id: "10", label: "Food & Beverage" },
];
