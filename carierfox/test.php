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
        for($i=0;$i<3;$i++){
            $name='coder';
            echo "<a href='check.php?name=" . $name ."'>Click</a><br>";
        }
    ?>
    <script>
        var all_data=[];
        for(var i=0;i<3;i++){
            var data=[];
            for(var j=0;j<3;j++){
                data.push(j);
            }
            all_data.push(data);
        }
        console.log(all_data[0][0]);
    </script>
</body>

</html>