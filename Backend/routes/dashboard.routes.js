const {Router}=require("express");
const {allholdings,allpositions,home,userinfo,allwatchlist}=require("../controllers/dashboard.controller.js");



const router=Router();

router.route("").get(home);
router.route("/user").get(userinfo);
router.route("/allholdings").get(allholdings);
router.route("/allpositions").get(allpositions);
router.route("/allwatchlist").get(allwatchlist);



module.exports={dashboardRoutes:router};