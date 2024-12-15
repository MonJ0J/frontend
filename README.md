# CU Gigs Backend and Frontend Overview

## Flask Server (Backend)
The Flask server provides a simple RESTful API for managing a list of jobs. It runs on `http://127.0.0.1:5000` by default and supports:

- **GET /jobs**: Returns a list of all available job postings in JSON format.
- **POST /jobs**: Accepts a JSON payload to create a new job and appends it to the in-memory list. Returns the newly created job as JSON.
- **DELETE /jobs/<job_id>**: Deletes the job with the specified `job_id` from the in-memory list. Returns an empty response with a `204` status code.

The server uses `flask_cors` to allow cross-origin requests from the React frontend.

## JobSeeker (React Frontend)
The JobSeeker page:
- Fetches the list of jobs from the Flask server using a GET request.
- Displays all available jobs to the user.
- Allows filtering of jobs by date, time, location, and minimum rating.
- Lets the user remove a job by clicking the `X` button. When clicked, a DELETE request is sent to the server, and if successful, the job is removed from the list.

## PostJob (React Frontend)
The PostJob page:
- Provides a form for creating a new job post.
- On submission, it sends a POST request with the job details to the Flask server.
- If successful, the new job is added to the in-memory list on the server side, and the user is navigated back to the JobSeeker page to see the updated list of jobs.

**Note:** There is no persistent database storage. All data is held in memory and will reset when the Flask server restarts.
