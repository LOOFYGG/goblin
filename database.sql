CREATE TABLE Person (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  phone VARCHAR(255)
);

CREATE TABLE Curs (
  id SERIAL PRIMARY KEY,
  namecurs VARCHAR(255),
  description VARCHAR(255),
  person_id INTEGER REFERENCES Person(id) -- Внешний ключ ссылается на Person
);

   SELECT c.id AS course_id, c.namecurs, c.description, p.id AS person_id, p.firstname, p.lastname FROM Curs c LEFT JOIN Person p ON c.person_id = p.id WHERE c.id = $1
