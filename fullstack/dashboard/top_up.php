<?php
session_start();

if (!isset($_SESSION['admin'])) {
  header('location: ../access/login.php');
  die();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Administrator cPanel</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">

  <link rel="stylesheet" type="text/css" href="../icofont/icofont.css">

  <link rel="stylesheet" type="text/css" href="../icofont/icofont.min.css">
  
  <style>
    .icofont-trash {
      color: red;
    }

    button {
      background-color: #fff;
      border: solid 1px red
    }

    button:focus {
      outline: red
    }
  </style>
</head>
<body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
<div class="wrapper">

  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
   <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>
  </nav>

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="" class="brand-link" style="background-color: #0f171c">
      <img src="images/logo.svg" alt="AdminLTE Logo" >
      
    </a>

    <!-- Sidebar -->
    <div class="sidebar" style="background-color: #0f171c;
    background-size: cover;">

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
               <li class="nav-item has-treeview menu-open">
            <a><br>
              <p align="center">
               Admin Dashboard
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="admin_dashboard.php" class="nav-link">
                  <i class="nav-icon fas icofont-users"></i>
                  <p>Registered Clients</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="top_up.php" class="nav-link active">
              <i class="nav-icon fas icofont-pay"></i>
              <p>
                Top-Up Client
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="top_up_history.php" class="nav-link">
             <i class="nav-icon fas icofont-history"></i>
              <p>
                Top-Up History
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="transactions.php" class="nav-link">
             <i class="nav-icon fas icofont-history"></i>
              <p>
                Transaction History
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="mail_client.php" class="nav-link">
             <i class="nav-icon fas icofont-envelope"></i>
              <p>
                Mail Client
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="wallet.php" class="nav-link">
             <i class="nav-icon fas icofont-wallet"></i>
              <p>
                Change Wallet
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="admin_password.php" class="nav-link">
             <i class="nav-icon fas icofont-lock"></i>
              <p>
                Reset Password
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="../controller/logout.php" class="nav-link">
              <i class="nav-icon fas icofont-ui-power"></i>
              <p>
                Logout
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
 <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Client Top-Up</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="admin_dashboard.php">Home</a></li>
              <li class="breadcrumb-item active">Credit</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Fill the form below to credit a client</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form action="../controller/credit.php" method="post">
                <div class="card-body">
                    <div class="form-group row">
                      <div class="col-sm-4">
                        <label for="exampleInputEmail1">Client ID</label>
                        <input type="text" name="client_id" class="form-control" id="exampleInputEmail1" placeholder="Enter ID" required>
                      </div>

                      <div class="col-sm-2">
                        <label for="exampleInputEmail1">Client Balance</label>
                        <input type="number" name="client_balance" class="form-control" id="exampleInputEmail1" placeholder="$ 0.00" required>
                      </div>

                      <div class="col-sm-2">
                        <label for="exampleInputEmail1">Give Profit</label>
                        <input type="number" name="client_profit" class="form-control" id="exampleInputEmail1" placeholder="$ 0.00" required>
                      </div>

                      <div class="col-sm-2">
                        <label for="exampleInputEmail1">Referral Bonus</label>
                        <input type="number" name="client_bonus" class="form-control" id="exampleInputEmail1" placeholder="$ 0.00" required>
                      </div>

                      <div class="col-sm-2">
                        <label for="exampleInputPassword1">Transaction Status</label>
                        <select name="status" class="form-control" id="exampleInputPassword1">
                            <option>Pending</option>
                            <option>Completed</option>
                        </select>
                      </div>
                    </div>
                </div>
                <!-- /.card-body -->

                <?php
                      if (isset($_SESSION['withdrawal_alert'])) {
                        echo $_SESSION['withdrawal_alert'];
                        unset ($_SESSION['withdrawal_alert']);
                      }
                  ?>

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
            </div>
        </div>
      </div>
    </section>

 
  </div>
  <!-- /.content-wrapper -->
  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->
<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- overlayScrollbars -->
<script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.js"></script>

<!-- OPTIONAL SCRIPTS -->
<script src="dist/js/demo.js"></script>

<!-- PAGE PLUGINS -->
<!-- jQuery Mapael -->
<script src="plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
<script src="plugins/raphael/raphael.min.js"></script>
<script src="plugins/jquery-mapael/jquery.mapael.min.js"></script>
<script src="plugins/jquery-mapael/maps/usa_states.min.js"></script>
<!-- ChartJS -->
<script src="plugins/chart.js/Chart.min.js"></script>

<!-- PAGE SCRIPTS -->
<script src="dist/js/pages/dashboard2.js"></script>
</body>
</html>
