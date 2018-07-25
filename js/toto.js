$(function(){
	//加载
	loading(30);
});
//加载页面
function loading(time){
	var loadTime = 0;
	$('.logoP p').text(loadTime+'%');
	var loadTween = setInterval(function(){
		loadTime++;
		if(loadTime==101)
		{
			clearInterval(loadTween);
			$('.logoP').css('opacity',0);
			$('.hitMe').fadeIn(500,function(){
				$(this).find('button').addClass('btnhas').removeAttr('disabled');
				//播放第一个视频
				$('.hitMe').find('button').on('click',function(){
					$('#loading').remove();
					$('#firstSence').show();
					$('#first')[0].play();
				});
				document.getElementById('first').addEventListener('ended',function(){
					$('.smart button').fadeIn(500,function(){
						$(this).addClass('btnhas');
					});
				});
				document.getElementById('first').addEventListener('x5videoexitfullscreen',function(){
					$('.smart button').fadeIn(500,function(){
						$(this).addClass('btnhas');
					});
				});
				//播放第二个视频
				$('.smart').find('button').on('click',function(){
					$('#firstSence').remove();
					$('#secondSence').show();
					$('#second')[0].play();
				});
				document.getElementById('second').addEventListener('ended',function(){
					$('.secondBoxOut').fadeIn(1000);
				});
				document.getElementById('second').addEventListener('x5videoexitfullscreen',function(){
					$('.secondBoxOut').fadeIn(1000);
				});
				var href = 'http://www.baidu.com'
				//跳到
				$('.smartBtn button').on('click',function(){
					window.location.href = href;
				});
				
			});
		}else{
			$('.logoP p').text(loadTime+'%');
		}
	},time);
}
