<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>

<body>
<?php 
    if(isset($_GET['name'])){
        echo $_GET['name'];
        if($_GET['name']=='coder'){
            for($i=0;$i<3;$i++){ ?>
                <h1>Hello <?php echo $i ?></h1>
            <?php }
        }
        else{
            echo "<h1>Error</h1>";
        }
    }
?>
</body>
</html>