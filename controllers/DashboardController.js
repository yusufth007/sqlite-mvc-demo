class DashboardController{
    dashboardView(req, res){
      res.render('dashboard',{ name: req.user.name });
    }
}

export default DashboardController;