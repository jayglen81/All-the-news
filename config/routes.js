module.export = function(router) {
    // renders homepage
    router.get("/", funtion(req, res){
        res.render("home");
    });
    //  renders saved page
    router.get("/saved", function(req, res){
        res.render("saved");
    });
}