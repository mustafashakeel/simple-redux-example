<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Forms</title>
</head>
<body>
    <h2>Forms</h2>

    {{ Form::open(array('url' => 'foo/bar')) }}
    <?php 
    echo Form::label('email', 'E-Mail Address');
    ?>
{{ Form::close() }}</body>
</html>