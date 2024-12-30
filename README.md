# Backend Assessment

Welcome to the Backend Assessment! This task is designed to evaluate your skills in backend engineering, including API design, database modeling, efficient query implementation, and problem-solving.

<br />

# **Task Overview**

The goal of this task is to build a backend service for managing threads and their messages. A thread represents a conversation, and each thread can have multiple messages, including replies (nested messages).

You are required to:

- Design the API endpoints and payloads.
- Implement the necessary database models.
- Ensure efficient and scalable data handling.

<br />

# **Special Note**

If you feel uncomfortable working with the provided **NestJS** template, you are free to create a new **Express** project and complete the task in it. However, ensure that all requirements are met, and document your approach thoroughly.

<br />

# **Requirements**

1. **Create a New Thread**

   - Design an API to create a thread with a title and a creator.

2. **Add a Message to a Thread**

   - Design an API to add messages to a thread.
   - A message should include details like the author and message content.
   - Messages can also reply to other messages (nested/hierarchical structure).

3. **Retrieve a Thread with Messages**

   - Design an API to retrieve a thread with its messages.
   - Include support for:
     - Sorting messages by timestamp.
     - Pagination to limit the number of messages retrieved at once.

4. **Efficient Nested Message Retrieval**

   - Implement an efficient mechanism to retrieve nested messages in a hierarchical structure.

5. **Error Handling**
   - Ensure appropriate error handling for invalid inputs, missing resources, and other potential issues.

<br />

# **Setup Instructions**

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd threads-api-assessment
   ```
2. Install Dependencies
   ```bash
   yarn
   ```
3. Setup Environment Variables

- Create a .env file in the root directory with the following variable
  ```bash
  DATABASE_HOST=localhost
  DATABASE_PORT=5432
  DATABASE_USER=your_db_user
  DATABASE_PASSWORD=your_db_password
  DATABASE_NAME=your_db_name
  APP_PORT=4000
  ```

4. Run the application

   ```bash
   yarn start:dev
   ```

5. Database Setup
   - Database Setup
     - Ensure PostgreSQL is running and configured as per the .env variables.
     - The database schema will automatically sync with the entities.

<br />

# **Evaluation Criteria**

1. API Design
   - Well-structured, RESTful endpoints with thoughtful request/response design.
2. Database Modeling
   - Scalable schema for threads and messages, including support for nested messages.
3. Code Quality
   - Clean, modular, and maintainable code.
4. Problem-Solving Skills
   - Thoughtful approach to implementing nested message structures.
5. Error Handling:
   - Robust handling of invalid inputs, missing resources, and edge cases.

<br />

# Guidelines

1. Creativity Encouraged:

   - You are free to design the API endpoints, request/response structures, and database schema as you see fit.

2. Documentation:

   - Include a brief description of your API design and thought process in a DOCUMENTATION.md file.

3. Testing:
   - Write tests to validate your APIs and ensure correctness.

<br />

# Submission

1. Fork this repository to your GitHub account.
2. Create a new branch in your forked repository for your work (e.g., feature/threads-api).
3. Commit your changes and push them to the branch.
4. Submit the URL of your forked repository and the branch name along with any notes about your implementation.

<br />

**Good luck, and happy coding!** 🚀
