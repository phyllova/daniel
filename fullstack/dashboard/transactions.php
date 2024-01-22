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
            <a href="top_up.php" class="nav-link">
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
            <a href="transactions.php" class="nav-link active">
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
            <h1>Transactions</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="admin_dashboard.php">Home</a></li>
              <li class="breadcrumb-item active">History</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>


    <?php
                include("../controller/connection.php");

                $sql = 'SELECT * FROM `withrawals` ORDER BY `id` DESC';

                $run_sql = $connect->query($sql);

                $row = $run_sql->num_rows;

                 if ($row == NULL) {
                   
                  echo '<section class="content">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12">
                        <div class="card">
                          <div class="card-header">
                            <h3 class="card-title">No Transaction Yet!</h3>
                          </div>
                          <!-- /.card-header -->
                          <div class="card-body table-responsive p-0" style="height: 410px;">';

                 } else {

                  echo '<section class="content">
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-12">
                                <div class="card">
                                  <div class="card-header">
                                    <h3 class="card-title">Transaction List</h3>';

                                                if (isset($_SESSION['approval'])) {
                                                    echo "<br><br>";
                                                    echo $_SESSION['approval'];
                                                    unset($_SESSION['approval']);
                                                }

                              echo    '</div>
                                  <!-- /.card-header -->
                                  <div class="card-body table-responsive p-0" style="height: 410px;">';

                                  echo ' <table class="table table-head-fixed text-nowrap">
                                          <thead>
                                            <tr>
                                              <th>S/N</th>
                                              <th>Date/Time</th>
                                              <th>Transaction ID</th>
                                              <th>Type</th>
                                              <th>Name</th>
                                              <th>Account ID</th>
                                              <th>Amount</th>
                                              <th>Wallet</th>
                                              <th>Email</th>
                                              <th>Approve</th>
                                              <th>Delete</th>
                                            </tr>
                                          </thead>
                                          <tbody>';

                                          $count = 1;
                                          while ($detail = $run_sql->fetch_assoc()) {

                                                  $id = $detail['id'];
                                                  $transact_id = $detail['transact_id'];
                                                  $date = $detail['date'];
                                                  $status = $detail['status'];
                                                  $type = $detail['type'];
                                                  $name = $detail['name'];
                                                  $email = $detail['email'];
                                                  $phone = $detail['phone'];
                                                  $amount = $detail['amount'];
                                                  $account_id = $detail['account_id'];
                                                  $amount = number_format($amount);

                                                  echo '<tr>
                                                            <td>'.$count++.'</td>
                                                            <td>'.$date.'</td>
                                                            <td>'.$transact_id.'</td>
                                                            <td>'.$type.'</td>
                                                            <td>'.$name.'</td>
                                                            <td><span class="tag tag-success">'.$account_id.'</span></td>
                                                            <td>$ '.$amount.'</td>
                                                            <td>'.$phone.'</td>
                                                            <td>'.$email.'</td>
                                                            <td>
                                                            <form action="../controller/delete.php" method="post">
                                                              <input type="hidden" name="transaction" value='.$transact_id.'>
                                                              <button type="submit" value="approve" name="submit" style="color: green; border: 0; font-size: 30px"><i class="icofont-checked"></i></button>
                                                            </form>
                                                          </td>
                                                            <td>
                                                            <form action="../controller/delete.php" method="post">
                                                              <input type="hidden" name="id" value='.$id.'>
                                                              <button type="submit" value="remove_history" name="submit" style="color: white; border: 0"><i class="icofont-trash"></i></button>
                                                            </form>
                                                          </td>
                                                          </tr>';

                 }

                echo '</tbody>
                      </table>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
              </div>
            </div>
          </section>';

            }
    ?> 
 
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
