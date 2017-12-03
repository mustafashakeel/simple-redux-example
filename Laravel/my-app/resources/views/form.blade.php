<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Forms</title>
</head>
<body>
    <h2>Forms</h2>

   <!--  {{ Form::open(array('url' => 'foo/bar')) }} -->
  <!--  {{!!Form::open(['method'=>'post','url' => 'foo/bar','files'=>true]) !!}}
   {{!! Form::file('file',['class'=>'form-control']) !!}} -->
    <?php 
    //echo Form::label('email', 'E-Mail Address');
    ?>


     <?php
         echo Form::open(array('url' => '/uploadfile','files'=>'true'));
         echo 'Select the file to upload.';
         echo Form::file('image');
         echo Form::submit('Upload File');
         echo Form::close();
      ?>

<!-- {{ Form::close() }} -->
</body>
</html>