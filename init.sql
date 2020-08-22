CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    birth DATE
);

INSERT INTO person (fullname, birth)
values ('raul juliao', '1997/11/14');

