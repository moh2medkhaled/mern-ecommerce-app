const router = require("express").Router();
const orderController = require("../controllers/orderController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

//CREATE

router.post("/", verifyToken, orderController.createOrder);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, orderController.updateOrder);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, orderController.deleteOrder);

//GET USER ORDERS
router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  orderController.getUserOrder
);

// GET ALL

router.get("/", verifyTokenAndAdmin, orderController.getAllOrders);

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, orderController.getMonthelyEncome);

module.exports = router;
