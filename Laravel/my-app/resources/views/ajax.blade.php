<html>
   <head>
      <title>Ajax Example</title>
      
      <script src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>
      <meta name="csrf-token" content="{{ csrf_token() }}" />
      <script>
         function getMessage(){
         	$.ajaxSetup({
			    headers: {
			        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			    }
			});
            $.ajax({
               type:'POST',
               url:'/getmsg',
               data:'_token = <?php echo csrf_token() ?>',
               success:function(data){
               	console.log('data   ',data);
                  $("#msg").html(data.msg);

               },
            error:function(e){
            	console.log("errorr ",e);
            }
            });
         }
      </script>
   </head>
   
   <body>
      <div id = 'msg'>This message will be replaced using Ajax. 
         Click the button to replace the message.</div>
      <?php
         echo Form::button('Replace Message',['onClick'=>'getMessage()']);
      ?>
   </body>

</html>