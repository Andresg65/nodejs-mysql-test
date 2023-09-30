import {Router} from "express"
import {getEmployees, getEmployee} from "../controllers/employees.controller.js"
import {createEmployees} from "../controllers/employees.controller.js"
import {updateEmployees} from "../controllers/employees.controller.js"
import {deleteEmployees} from "../controllers/employees.controller.js"

const router = Router();

router.get("/employees", getEmployees)

router.get("/employees/:id", getEmployee)

router.post("/employees", createEmployees)

router.patch("/employees/:id",updateEmployees)

router.delete("/employees/:id", deleteEmployees)

export default router