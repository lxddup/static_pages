/**
 * Created by Administrator on 2017/6/18.
 */
$(function(){
    var $addGoods=$('#add_new');
    var $add_shadow=$('#d_add_new_shadow');
    var $d_add_new=$('#d_add_new');
    var $d_close=$("#d_add_new_close");
    var flag=0;
    $addGoods.click(function(){
        // alert(1);
        $add_shadow.css({'display':'block'});
        $d_add_new.css({'display':'block'})
    })
    $d_close.click(function(){
        $add_shadow.css({'display':'none'});
        $d_add_new.css({'display':'none'});
    })
    $('#d_add_new_buttons .btn').click(function(){
        $add_shadow.css({'display':'none'});
        $d_add_new.css({'display':'none'});
    })
    $('#select_all').click(function(){
        if($(this).prop("checked")){
            $('.listTable tbody tr td').css({background:'#eee'});
            // console.log( $('.listTable tbody td input[checkbox]'))
            $('input[name="data-checkbox"]').each(function(){
                $(this).prop('checked',true);
            })
            // flag=1;
        }
       else{
            $('.listTable tbody tr td').css({background:'#fff'});
            $('input[name="data-checkbox"]').each(function(){
                $(this).prop('checked',false);
            })
        }

    })
    $('input[name="data-checkbox"]').click(function(){
        if($(this).prop("checked")){
          $(this).parent().css({backgroundColor:'#eee'});
            $(this).parent().siblings().css({backgroundColor:'#eee'});
        }
        else{
            $(this).parent().css({backgroundColor:'#fff'});
            $(this).parent().siblings().css({backgroundColor:'#fff'});
        }
    })
  $('a[name="delete"]').click(function(){
      $(this).parent().parent().remove();
  })
    $('#delete_selected').click(function(){
        $('input[name="data-checkbox"]').each(function(){
           if($(this).prop("checked")) {
               $(this).parent().parent().remove();
           }
        })
    })
    $('a[name="edit"]').click(function(){
        $add_shadow.css({'display':'block'});
        //一些操作
    })
})