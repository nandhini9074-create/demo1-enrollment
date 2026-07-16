import { Injectable } from '@nestjs/common';
import { ProfileType } from 'src/common/enums/profile';

@Injectable()
export class FileService {
  private readonly fileStatusMap = new Map<string, number>();

  async processEnrolment(
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

  async updateFileStatus(
    fileName: string,
    fileRecCount: number,
    profileTypeId?: string,
  ): Promise<boolean> {
    void profileTypeId;
    this.fileStatusMap.set(fileName, fileRecCount);
    return true;
  }

  async getFileStatus(fileName: string): Promise<boolean> {
    return this.fileStatusMap.has(fileName);
  }
}
