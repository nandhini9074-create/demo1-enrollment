import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { BaseResponse } from 'src/common/dtos/base-response';
import { baseResponseHelper } from 'src/common/helpers/base-response.helper';
import { FileDto } from '../dto/file.model';
import { FileService } from '../services/file-upload.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { FileStatusDto, GetFileStatusDto } from '../dto/file-status.dto';

@Controller({ version: '1', path: 'enrollment' })
export class EnrollmentController {
  constructor(private readonly fileService: FileService) { }

  @HttpCode(HttpStatus.OK)
  @Post('processPan')
  @UseGuards(AuthGuard)
  async processPan(@Body() fileDto: FileDto): Promise<BaseResponse<boolean>> {
    const result = await this.fileService.processEnrolment(
      fileDto?.data,
      fileDto?.fileDateTime,
      fileDto?.fileName,
      fileDto?.fileRecordNum,
    );
    return baseResponseHelper(result);
  }

  @HttpCode(HttpStatus.OK)
  @Post('updateFileProcessStatus')
  @UseGuards(AuthGuard)
  async updateFileProcessStatus(
    @Body() fileDto: FileStatusDto,
  ): Promise<BaseResponse<boolean>> {
    const result = await this.fileService.updateFileStatus(
      fileDto?.fileName,
      fileDto?.fileRecordNum,
    );
    return baseResponseHelper(result);
  }

  @HttpCode(HttpStatus.OK)
  @Post('getFileProcessStatus')
  @UseGuards(AuthGuard)
  async getFileProcessStatus(
    @Body() fileDto: GetFileStatusDto,
  ): Promise<BaseResponse<boolean>> {
    const result = await this.fileService.getFileStatus(fileDto?.fileRecordName);
    return baseResponseHelper(result);
  }
}