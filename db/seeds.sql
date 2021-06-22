USE emp_trackerDB;

-- department seeds
INSERT INTO department (id, name)
VALUES (0, 'ceo'),  (1, 'finance'), (2, 'IT'), (3, 'marketing'), (4, 'human reasources');

-- role seeds
INSERT INTO role (id, title, salary, department_id)
VALUES (5, 'ceo', 200000, 0)
INSERT INTO role (id, title, salary, department_id)
VALUES (6, 'cfo', 175000, 1)
INSERT INTO role (id, title, salary, department_id)
VALUES (7, 'software engineer', 150000, 2)
INSERT INTO role (id, title, salary, department_id)
VALUES (8, 'marketing director', 120000, 3)
INSERT INTO role (id, title, salary, department_id)
VALUES (9, 'hr director', 150000, 4)

-- employee seeds

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, 'All', 'Might', 5, 14)
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (11, 'Izuku', 'Midoriya', 6, 142)
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (12, 'Tenya', 'Ida', 7, 534)
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (13, 'Tsuyu', 'Asui', 8, 932)
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (14, 'Shoto', 'Todoroki', 9, 524)
