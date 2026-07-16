CREATE TABLE file_dto (
    data TEXT NOT NULL,
    file_date_time TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_record_num INTEGER NOT NULL,
    PRIMARY KEY (file_name, file_record_num)
);

CREATE TABLE file_status_dto (
    file_name TEXT NOT NULL,
    file_record_num INTEGER NOT NULL,
    PRIMARY KEY (file_name, file_record_num)
);

CREATE TABLE get_file_status_dto (
    file_name TEXT NOT NULL,
    PRIMARY KEY (file_name)
);

ALTER TABLE file_status_dto
ADD CONSTRAINT fk_file_status_dto_file_name FOREIGN KEY (file_name) REFERENCES file_dto (file_name);

ALTER TABLE get_file_status_dto
ADD CONSTRAINT fk_get_file_status_dto_file_name FOREIGN KEY (file_name) REFERENCES file_dto (file_name);