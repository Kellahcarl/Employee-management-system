-- CREATE OR ALTER PROCEDURE fetchAllEmployees
-- AS
-- BEGIN
--     SELECT * FROM Employees
-- END
 



CREATE PROCEDURE fetchOneEmployee (@employee_id VARCHAR(200))
AS
BEGIN
    SELECT * FROM Employees WHERE employee_id = @employee_id
END