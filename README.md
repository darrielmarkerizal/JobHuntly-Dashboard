# JobHuntly Dashboard CMS

## Overview

Welcome to the JobHuntly Dashboard CMS repository! This project is aimed at providing a comprehensive content management system for managing job-related information, including posting jobs, listing available positions, viewing job details and applicants, and configuring settings.

### Features

- **Post Job:** Easily create and publish job listings.
- **Job Listing:** View a list of all available job positions.
- **Job Detail and Applicants:** Dive into specific job details and manage applicants.
- **Setting:**
  - Overview: Configure general settings for the CMS.
  - Social Media: Manage social media settings.
  - Teams: Handle team-related configurations.

### Technologies Used

- Next.js: A React framework for building server-rendered applications.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- ShadcnUI: (Note: Assuming this is a custom or specific UI library you're using)
- Supabase: An open-source alternative to Firebase for building modern apps.
- TypeScript: A statically typed superset of JavaScript for enhanced code quality.
- Next Auth: Authentication library for Next.js applications.
- Railway: A platform for deploying and managing web applications.

## Getting Started

To run the JobHuntly Dashboard CMS locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/darrielmarkerizal/JobHuntly-Dashboard.git
   ```

2. Install dependencies:

   ```bash
   cd JobHuntly-Dashboard
   npm install
   ```

3. Configure environment variables:

   Create a `.env.local` file in the root directory and add the necessary environment variables. For example:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the JobHuntly Dashboard CMS.

## Notes

This project is currently in development, and additional features and improvements are actively being worked on. Please be aware of potential bugs or incomplete functionalities. Your feedback and contributions are highly appreciated.

## Contributing

If you would like to contribute to the development of JobHuntly Dashboard CMS, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
