db.productos.insertMany([
  {
    "nombre": "Proteína Whey Protein",
    "categoria": "Proteína",
    "marca": "Optimum Nutrition",
    "sabor": "Vainilla",
    "peso": "2kg",
    "precio": 45.99,
    "descripcion": "Proteína de suero de leche de alta calidad para el desarrollo muscular y la recuperación.",
    "ingredientes": [
      "Suero de leche",
      "Aislado de proteína",
      "Aminoácidos"
    ]
  },
  {
    "nombre": "Creatina Monohidrato",
    "categoria": "Energía",
    "marca": "MyProtein",
    "sabor": "Sin sabor",
    "peso": "500g",
    "precio": 14.99,
    "descripcion": "Aumenta la fuerza y potencia muscular en entrenamientos intensos.",
    "ingredientes": [
      "Creatina Monohidrato"
    ]
  },
  {
    "nombre": "BCAA's",
    "categoria": "Aminoácidos",
    "marca": "Bulk Natural",
    "sabor": "Frambuesa",
    "peso": "300g",
    "precio": 24.99,
    "descripcion": "Aminoácidos ramificados para mejorar la recuperación muscular y reducir la fatiga.",
    "ingredientes": [
      "Leucina",
      "Isoleucina",
      "Valina"
    ]
  },
  {
    "nombre": "L-Carnitina",
    "categoria": "Quema grasa",
    "marca": "Hercules",
    "sabor": "Limón",
    "peso": "500ml",
    "precio": 19.99,
    "descripcion": "Aumenta la oxidación de grasas y mejora el rendimiento físico.",
    "ingredientes": [
      "L-Carnitina",
      "Ácido cítrico",
      "Aromatizantes naturales"
    ]
  },
  {
    "nombre": "Multivitamínico",
    "categoria": "Salud general",
    "marca": "GNC",
    "sabor": "Sin sabor",
    "peso": "120 cápsulas",
    "precio": 19.99,
    "descripcion": "Suplemento multivitamínico para fortalecer el sistema inmunológico y mejorar el bienestar general.",
    "ingredientes": [
      "Vitamina A",
      "Vitamina C",
      "Vitamina D",
      "Calcio",
      "Magnesio"
    ]
  }
]);





CREATE DATABASE gestion_academica_universidad;

USE gestion_academica_universidad;

CREATE TABLE estudiantes(
	id_estudiante INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL UNIQUE,
    genero ENUM('M','F','Otro')NOT NULL,
    identificacion VARCHAR(20) NOT NULL UNIQUE,
    carrera VARCHAR(100)NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    fecha_ingreso DATE NOT NULL
);

CREATE TABLE docentes(
	id_docente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    correo_institucional VARCHAR(100) NOT NULL UNIQUE,
    departamento_academico VARCHAR(100) NOT NULL,
    anios_experiencia INT NOT NULL
);

CREATE TABLE cursos(
	id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    creditos INT NOT NULL,
    semestre VARCHAR(10) NOT NULL,
    id_docente INT NOT NULL,
    FOREIGN KEY (id_docente) REFERENCES docentes(id_docente)
);

CREATE TABLE inscripciones(
	id_inscripcion INT AUTO_INCREMENT PRIMARY KEY,
    id_estudiante INT NOT NULL,
    id_curso INT NOT NULL,
    fecha_inscripcion DATE NOT NULL,
    calificacion_final DECIMAL(5,2),
    
    CHECK (calificacion_final >= 0 AND calificacion_final <=10),
    
    FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id_estudiante),
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso),
    
    UNIQUE (id_estudiante, id_curso)
);

INSERT INTO estudiantes (nombre_completo, correo_electronico, genero, identificacion, carrera, fecha_nacimiento, fecha_ingreso)
VALUES 
('Daniel Ospina', 'daniel@gmail.com', 'M', '1000963542', 'Desarrollo de Software', '2003-07-08', '2021-06-04'),
('Karol Hernandez', 'karol@gmail.com', 'F', '1000967856', 'Mecatronica', '2001-09-17', '2020-02-04'),
('Juan Esteban', 'juandEst@gmail.com', 'M', '1000912365', 'Fisica Pura', '2005-02-11', '2025-07-08'),
('Santiago Martinez', 'santiago@gmail.com', 'M', '1005871342', 'Negocios Internacionales', '1999-03-25', '2021-06-04'),
('Sara Escudero', 'sara@gmail.com', 'F', '1085433542', 'Bio-Medica', '2004-04-09', '2022-06-04');



// npm init -y, npm i mongodb, npm i express
const { MongoClient, ObjectId } = require('mongodb');
const uri = '';

const client = new MongoClient(uri);

const app = express();

let db, love;

await client.connect();

async function getData() {

    await client.connect();

    db = await client.db('lovelace'); //nombre de la DB

    love = db.collection('love'); //nombre de la coleccion

    return await love.find().toArray();

}
app.get('/data', async (request, response) =>{
    response.json(await getData())
})
//endpoint

app.post('/data', (request, response) =>{
    
})

app.liste(300, (error) =>{
    if
})
