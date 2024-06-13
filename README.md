# Job-Connect

Job-Connect is a comprehensive job seeker website that bridges the gap between applicants seeking jobs and companies looking to hire employees. The project utilizes Vite with React for the front end and Spring Boot with Java for the back end, along with a MySQL database to store data.

## Features

- Browse available jobs
- View job applicants
- Manage company profiles
- Manage job listings
- Manage applicant profiles

## Technologies Used

- **Front-end**: Vite + React
- **Back-end**: Spring Boot (Java)
- **Database**: MySQL

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/job-connect.git
    cd job-connect
    ```

2. **Set up the Front-end**:
    - Navigate to the `frontend` directory:
        ```sh
        cd frontend
        ```
    - Install dependencies:
        ```sh
        npm install
        ```
    - Run the development server:
        ```sh
        npm run dev
        ```

3. **Set up the Back-end**:
    - Navigate to the `backend` directory:
        ```sh
        cd backend
        ```
    - Configure your database settings in `application.properties`:
        ```properties
        spring.datasource.url=jdbc:mysql://localhost:3306/job_connect
        spring.datasource.username=root
        spring.datasource.password=yourpassword
        spring.jpa.hibernate.ddl-auto=update
        ```
    - Install dependencies and run the server:
        ```sh
        ./mvnw spring-boot:run
        ```

## API Endpoints

### Applicants

- **GET** `/api/jobconnect/applicants`
    - Description: Retrieve all applicants.
    - Response: JSON array of applicants.

- **POST** `/api/jobconnect/applicants`
    - Description: Create a new applicant.
    - Body: JSON object containing applicant details.

- **PUT** `/api/jobconnect/applicants/{id}`
    - Description: Update an existing applicant by ID.
    - Body: JSON object containing updated applicant details.

- **DELETE** `/api/jobconnect/applicants/{id}`
    - Description: Delete an applicant by ID.

### Companies

- **GET** `/api/jobconnect/companies`
    - Description: Retrieve all companies.
    - Response: JSON array of companies.

- **POST** `/api/jobconnect/companies`
    - Description: Create a new company.
    - Body: JSON object containing company details.

- **PUT** `/api/jobconnect/companies/{id}`
    - Description: Update an existing company by ID.
    - Body: JSON object containing updated company details.

- **DELETE** `/api/jobconnect/companies/{id}`
    - Description: Delete a company by ID.

### Jobs

- **GET** `/api/jobconnect/jobs`
    - Description: Retrieve all jobs.
    - Response: JSON array of jobs.

- **POST** `/api/jobconnect/jobs`
    - Description: Create a new job.
    - Body: JSON object containing job details.

- **PUT** `/api/jobconnect/jobs/{id}`
    - Description: Update an existing job by ID.
    - Body: JSON object containing updated job details.

- **DELETE** `/api/jobconnect/jobs/{id}`
    - Description: Delete a job by ID.

### Job Applicants

- **GET** `/api/jobconnect/jobapplicants`
    - Description: Retrieve all job applicants.
    - Response: JSON array of job applicants.

- **POST** `/api/jobconnect/jobapplicants`
    - Description: Create a new job applicant.
    - Body: JSON object containing job applicant details.

- **PUT** `/api/jobconnect/jobapplicants/{id}`
    - Description: Update an existing job applicant by ID.
    - Body: JSON object containing updated job applicant details.

- **DELETE** `/api/jobconnect/jobapplicants/{id}`
    - Description: Delete a job applicant by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contributors

Thanks to these wonderful people for their contributions:

[![Contributors](https://contrib.rocks/image?repo=kevinjuliow/job-connect)](https://github.com/kevinjuliow/job-connect/graphs/contributors)

## License

This project is licensed under the MIT License.
