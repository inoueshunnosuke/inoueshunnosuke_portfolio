$(function(){
    var a = 0;
  $('.img1').click(function(){
      if(a == 0){
    $('.img1').children('img').attr('src', 'img/025-1-after.jpg');
      a = 1;
      }
      else{
           $('.img1').children('img').attr('src', 'img/025-1-btn.jpg');
      a = 0;
      }
  });
  $('.img2').click(function(){
      if(a == 0){
    $('.img2').children('img').attr('src', 'img_sp/25_sp-after.jpg');
      a = 1;
      }
      else{
           $('.img2').children('img').attr('src', 'img_sp/25_sp-btn.jpg');
      a = 0;
      }
  });
  $('.img3').click(function(){
      if(a == 0){
    $('.img3').children('img').attr('src', 'img/025-2-after.jpg');
      a = 1;
      }
      else{
           $('.img3').children('img').attr('src', 'img/025-2-btn.jpg');
      a = 0;
      }
  });
  $('.img4').click(function(){
      if(a == 0){
    $('.img4').children('img').attr('src', 'img_sp/25_sp-after.jpg');
      a = 1;
      }
      else{
           $('.img4').children('img').attr('src', 'img_sp/25_sp-btn.jpg');
      a = 0;
      }
  });
});
function isCheck() {
	var arr_checkBoxes = document.getElementsByName("data[User][free9][]");
	var count = 0;
	for (var i = 0; i < arr_checkBoxes.length; i++) {
		if (arr_checkBoxes[i].checked) {
			count++;
		}
	}
	if (count > 0) {
		return true;
	} else {
		window.alert("ご希望の時間帯を最低１つ選択してください。");
		return false;
	}
}

