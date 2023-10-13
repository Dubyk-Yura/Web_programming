const Router = require("express");
const router = new Router();
const bikeController = require("../controller/bike.controller");

router.post("/bike", bikeController.createBike);
router.get("/bike", bikeController.getAllBike);
router.get("/bike/:id", bikeController.getOneBike);
router.put("/bike", bikeController.updateBike);
router.delete("/bike/:id", bikeController.deleteBike);
router.get("/bikesort", bikeController.getSortedBike);

module.exports = router;
