```markdown
# Demo1 Project

## Overview
The Demo1 project provides APIs for managing bulk enrollment processes. It includes endpoints for processing PAN data, updating file processing statuses, and retrieving file processing statuses.

## Features
- **Bulk Enrollment**: APIs to handle file-based enrollment processes.

## Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A running instance of the backend service

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nandhini9074-create/mimojo-enrollment-template-service-main.git
   cd mimojo-enrollment-template-service-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm run start
   ```

### Environment Variables
The following environment variables are required to run the application:

| Variable Name         | Description                          | Example Value          |
|-----------------------|--------------------------------------|------------------------|
| `SERVER_HTTP_HOST`    | The host for the HTTP server         | `localhost`            |
| `SERVER_HTTP_PORT`    | The port for the HTTP server         | `3000`                 |
| `NODE_ENV`            | The environment (e.g., `local`)     | `local`                |
| `IS_SWAGGER_ENABLED`  | Enable Swagger documentation         | `true`                 |

## API Endpoints

### 1. Process PAN
**Endpoint**: `POST /file/processPan`

**Description**: Processes PAN data for bulk enrollment using the provided file details.

**Request Body**:
```json
{
  "data": "encrypted-data",
  "fileDateTime": "2026-05-20T10:00:00Z",
  "fileName": "enrolment-file.csv",
  "fileRecordNum": 1
}
```

**Response**:
```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": true
}
```

---

### 2. Update File Processing Status
**Endpoint**: `POST /file/updateFileProcessStatus`

**Description**: Updates the processing status of a file for bulk enrollment.

**Request Body**:
```json
{
  "fileName": "enrolment-file.csv",
  "fileRecordNum": 10
}
```

**Response**:
```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": true
}
```

---

### 3. Get File Processing Status
**Endpoint**: `POST /file/getFileProcessStatus`

**Description**: Retrieves the processing status of a file for bulk enrollment.

**Request Body**:
```json
{
  "fileName": "enrolment-file.csv"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": true
}
```

## References
- [GitHub Repository](https://github.com/nandhini9074-create/mimojo-enrollment-template-service-main)
- [File Upload Controller](https://github.com/nandhini9074-create/mimojo-enrollment-template-service-main/blob/main/src/enrollment/controllers/file-upload.controller.ts)
- [File DTO](https://github.com/nandhini9074-create/mimojo-enrollment-template-service-main/blob/main/src/enrollment/dto/file.model.ts)
- [File Status DTO](https://github.com/nandhini9074-create/mimojo-enrollment-template-service-main/blob/main/src/enrollment/dto/file-status.dto.ts)
```