import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileV1Controller } from './controllers/file-upload.controller';
import { FileService } from './services/file-upload.service';
import { FileDto } from './dto/file.model';
import { FileStatusDto, GetFileStatusDto } from './dto/file-status.dto';

@Module({
  imports: [
    SequelizeModule.forFeature([FileDto, FileStatusDto, GetFileStatusDto]),
  ],
  controllers: [FileV1Controller],
  providers: [FileService],
})
export class EnrollmentModule {}