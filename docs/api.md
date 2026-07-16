openapi: 3.0.0
info:
  title: Demo1 API
  description: API documentation for the Demo1 project, focusing on bulk enrollment functionality.
  version: 1.0.0
servers:
  - url: http://localhost:3000
    description: Local development server
paths:
  /file/processPan:
    post:
      summary: Processes PAN for bulk enrollment
      description: Processes PAN data for bulk enrollment using the provided file details.
      operationId: processPan
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/FileDto'
      responses:
        '200':
          description: Successfully processed PAN data.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BaseResponseBoolean'
  /file/updateFileProcessStatus:
    post:
      summary: Updates the file processing status
      description: Updates the processing status of a file for bulk enrollment.
      operationId: updateFileProcessStatus
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/FileStatusDto'
      responses:
        '200':
          description: Successfully updated file processing status.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BaseResponseBoolean'
  /file/getFileProcessStatus:
    post:
      summary: Gets the file processing status
      description: Retrieves the processing status of a file for bulk enrollment.
      operationId: getFileProcessStatus
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/GetFileStatusDto'
      responses:
        '200':
          description: Successfully retrieved file processing status.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BaseResponseBoolean'
components:
  schemas:
    FileDto:
      type: object
      properties:
        data:
          type: string
          description: Encrypted file data.
          example: encrypted-data
        fileDateTime:
          type: string
          format: date-time
          description: The date and time the file was created.
          example: '2026-05-20T10:00:00Z'
        fileName:
          type: string
          description: The name of the file.
          example: enrolment-file.csv
        fileRecordNum:
          type: integer
          description: The record number in the file.
          example: 1
    FileStatusDto:
      type: object
      properties:
        fileName:
          type: string
          description: The name of the file.
          example: enrolment-file.csv
        fileRecordNum:
          type: integer
          description: The record number in the file.
          example: 10
    GetFileStatusDto:
      type: object
      properties:
        fileName:
          type: string
          description: The name of the file.
          example: enrolment-file.csv
    BaseResponseBoolean:
      type: object
      properties:
        success:
          type: boolean
          description: Indicates whether the operation was successful.
          example: true
        message:
          type: string
          description: A message providing additional information about the operation.
          example: Operation completed successfully.
        data:
          type: boolean
          description: The result of the operation.
          example: true