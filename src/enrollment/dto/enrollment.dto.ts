```typescript
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class FileDto {
  @ApiProperty({ example: 'encrypted-data' })
  @IsString()
  data: string;

  @ApiProperty({ example: '2026-05-20T10:00:00X' })
  @IsString()
  fileDateTime: string;

  @ApiProperty({ example: 'enrolment-file.csv' })
  @IsString()
  fileName: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  fileRecordNum: number;
}

export class FileStatusDto {
  @ApiProperty({ example: 'enrolment-file.csv' })
  @IsString()
  fileName: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  fileRecordNum: number;
}

export class GetFileStatusDto {
  @ApiProperty({ example: 'enrolment-file.csv' })
  @IsString()
  fileName: string;
}
```