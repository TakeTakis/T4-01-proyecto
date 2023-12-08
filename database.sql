CREATE DATAbase sync; -- Cambios

-- drop database sync;
-- use master

use sync;

-- drop table zona

create table Zona (
    id_zona         integer         not null	auto_increment,
    nombre          varchar(255)    not null,
    primary key     (id_zona)
)

create table Usuario (
    id_usuario      integer         not null	auto_increment,
    nombre          varchar(255)    not null,
    apellidos       varchar (255)   not null,
    fk_id_zona      integer         not null,
    primary key     (id_usuario),
    foreign key     (fk_id_zona)    references Zona(id_zona)
)

create table Diario (
    id_diario       integer         not null	auto_increment,
    fk_id_usuario   integer         not null,
    primary key     (id_diario),
    foreign key     (fk_id_usuario) references Usuario(id_usuario)
)

create table Pagina (
    id_pagina       integer         not null	auto_increment,
    fecha           date            not null,
    fk_id_diario    integer         not null,
    Mensaje         varchar(255),
    primary key     (id_pagina),
    foreign key     (fk_id_diario)  references Diario(id_diario)
)

create table Trabajador (
    id_trabajador   integer         not null	auto_increment,
    nombre          varchar(255)    not null,
    puesto          varchar(255)    not null,
    numero          varchar(20)     not null,    
    fk_id_zona      integer         not null, 
    primary key     (id_trabajador),
    foreign key     (fk_id_zona)    references Zona(id_zona)
)



insert into Zona values (1,"Colima"),
insert into Zona values (2,"Villa"),

insert into Usuario values (1,"Axel","Perez",1),
insert into Usuario values (2,"Alejandro","Gomez",2),

insert into Diario values (1,1),
insert into Diario values (2,2),

insert into Pagina values (1,"2002-12-1",1,"Hola"),
insert into Pagina values (2,"2012-10-18",2,"Hola2"),

insert into Trabajador values (1,"Jesus","Psico","123",1),
insert into Trabajador values (2,"Maria","Tera","321",2)