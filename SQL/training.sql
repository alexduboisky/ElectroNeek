create table department(
id int,
name varchar(100)
);

create table employee(
id int,
department_id int,
chief_id int,
name varchar(100),
salary int
);


insert into department values(1,'dept1');
insert into department values(2,'dept2');
insert into department values(3,'dept3');

insert into employee values(1,1,1,'emp1',200);
insert into employee values(2,1,1,'emp2',210);
insert into employee values(3,1,1,'emp3',190);
insert into employee values(4,1,1,'emp4',180);

insert into employee values(5,2,7,'emp5',230);
insert into employee values(6,2,7,'emp6',240);
insert into employee values(7,2,7,'emp7',250);
insert into employee values(8,2,7,'emp8',220);

insert into employee values(9,3,12,'emp9',180);
insert into employee values(10,3,12,'emp10',170);
insert into employee values(11,3,12,'emp11',160);
insert into employee values(12,3,12,'emp12',150);


delete from employee where id in(7,8,12);

--1
select * from employee e inner join 
(select department_id, max(salary) as max_salary from employee group by department_id) s
on e.department_id=s.department_id and e.salary=s.max_salary;
--2
select department_id from 
(select department_id, count(id) as emp_count from employee group by department_id) s
where emp_count<3;
--3
select department_id from 
(select department_id, sum(salary) as sum_salary from employee group by department_id) s
where sum_salary = (select max(sum_salary) 
from (select department_id, sum(salary) as sum_salary from employee group by department_id) s);
--4
insert into department values(4,'dept1');

--5
insert into employee values(10,4,10,'emp1',200);
insert into employee values(11,4,10,'emp2',210);
insert into employee values(12,4,10,'emp3',190);
insert into employee values(13,4,10,'emp4',180);

--6
delete employee where department_id=4; 
delete department where id=4; 
