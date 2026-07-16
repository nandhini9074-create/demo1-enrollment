import { Injectable } from '@nestjs/common';
import { ProfileType } from 'src/common/enums/profile';

@Injectable()
export class EnrollmentService {
  private readonly fileStatusMap = new Map<string, number>();

  async processPan(
    encryptedPan: string,
    fileDate: string,
    fileName: string,
    fileRecCount: number,
    profileType?: ProfileType,
  ): Promise<boolean> {
    void encryptedPan;
    void fileDate;
    void fileName;
    void fileRecCount;
    void profileType;
    return true;
  }

  async updateFileProcessStatus(
    fileName: string,
    fileRecCount: number,
  ): Promise<boolean> {
    this.fileStatusMap.set(fileName, fileRecCount);
    return true;
  }

  async getFileProcessStatus(fileName: string): Promise<boolean> {
    return this.fileStatusMap.has(fileName);
  }
}