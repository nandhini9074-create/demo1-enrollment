import { Column, Model, Table, PrimaryKey, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'file_dto', timestamps: false })
export class FileDto extends Model<FileDto> {
  @Column({ allowNull: false })
  data: string;

  @Column({ allowNull: false })
  fileDateTime: string;

  @PrimaryKey
  @Column({ allowNull: false })
  fileName: string;

  @PrimaryKey
  @Column({ allowNull: false })
  fileRecordNum: number;
}

@Table({ tableName: 'file_status_dto', timestamps: false })
export class FileStatusDto extends Model<FileStatusDto> {
  @PrimaryKey
  @ForeignKey(() => FileDto)
  @Column({ allowNull: false })
  fileName: string;

  @PrimaryKey
  @Column({ allowNull: false })
  fileRecordNum: number;
}

@Table({ tableName: 'get_file_status_dto', timestamps: false })
export class GetFileStatusDto extends Model<GetFileStatusDto> {
  @PrimaryKey
  @ForeignKey(() => FileDto)
  @Column({ allowNull: false })
  fileName: string;
}