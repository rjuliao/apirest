# API REST NODEJS
Implementado usando CentOS

# Instalación de BD

## Para la implementación use PostgreSQL

```
sudo sudo yum install postgresql-server postgresql-contrib
sudo postgresql-setup initdb
sudo systemctl start postgresql
psql postgres
CREATE DATABASE person;
```

```
CREATE TABLE person (
  ID SERIAL PRIMARY KEY,
  fullname VARCHAR(30),
  birth date
);

INSERT INTO users (fullname, birth)
  VALUES ('Raúl Juliao', '1997/11/14');
```

# Instalación de repositorio
```
git clone https://github.com/rjuliao/apirest.git
cd apirest
npm install
node index.js
```

# URL's
```
GET: curl http://localhost:3002/person
```
```
POST: curl --data "fullname=Paula&birth=1998/07/01" http://localhost:3002/person
```

# Autor
https://github.com/rjuliao/
