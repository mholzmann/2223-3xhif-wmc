if ('$(RESTORE_DB)'='Y')
  drop database if exists devdb  --drop db if should be restored
  go
  
if DB_ID('devdb') is not null
  set noexec on              -- prevent db creation if already exists

create database devdb; -- create db
go

use devdb
go

create table Task (
    id int IDENTITY(1,1) primary key,
    action varchar(255) not null,
    done bit not null
)
go

insert into Task (action, done)
values
('practice javascript', 0),
('clean kitchen', 0),
('buy milk', 1),
('work out', 0)
go