// ����ҳ��ǰȥ���.js������ļ�����������ҳ�����֮ǰ��ͨ��һЩ�����ֶ�����ֹ����˹�����ݵļ��أ��Ӷ��ﵽȥ������Ч����

$(function() {
	var balckAd = {
		checkUrl: function() {
			this.checkIsFullScreen();
			this.parseNextUrl();
		},
		
		// Videoȫ������
		checkIsFullScreen: function() {
			console.log('checkIsFullScreen Start');
			
			//jQuery�����¼�(����״̬�ı�)
			var lastOrientation = '';						
			$(window).on('resize', function() {
			  setTimeout(function() {
				var isFullScreen = checkIsFullScreen();
				var orientation = getOrientation(isFullScreen);
				if (orientation !== '') {
					// webview ������Ϣ�� uniapp
					uni.postMessage({
						data: {
							info: {
							  orientation: orientation
							}
						}
					});
				}
			  }, 5000);
			});
			
			// ����Ƿ���ȫ��״̬������һ������ֵ
			function checkIsFullScreen() {
			  var isFullScreen = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen;
			  return isFullScreen == undefined ? false : isFullScreen;
			}
			
			// ����ȫ��״̬
			function getOrientation(isFullScreen) {
			  var orientation = isFullScreen ? '����ȫ��' : '�˳�ȫ��';
			  if (lastOrientation !== orientation) {
				lastOrientation = orientation;
				return orientation;
			  } else {
				return '';
			  }
			}
		},
		
		// ������һ����ת��url��ַ
		parseNextUrl: function() {
			console.log('parseNextUrl Start');				
			
			// �����¼�������һ�����ӵĻ�ȡ
			$(document).ready(function() {
			  $('a').click(function(event) {
				event.preventDefault(); // ��ֹ���ӵ�Ĭ����Ϊ
				var href = $(this).attr('href'); // ��ȡ���ӵ� href ����
				var pageTitle = document.title; // ��ȡ���ӵ� title ����
				
				if (href.indexOf('http') === -1) { // ��� href ������ http
					href = window.location.protocol + '//' + window.location.host + href; // ��ȡ��ǰҳ���������ƴ�� href
				}							
				if (href.indexOf('?') !== -1) { // ��������Ѿ���������
					href += '&pageTitle=' + pageTitle; // ʹ�� & ������ӱ�����Ϣ
				} else { // �������û�а�������
					href += '?pageTitle=' + pageTitle; // ��Ӳ�������ӱ�����Ϣ
				}															
				
				// webview ������Ϣ�� uniapp
				uni.postMessage({
				  data: {
					info: {
					  href: href,
					  title: pageTitle
					}
				  }
				})								
			  });
			});
		},
		
		// ��ʼ��
		init: function() {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js';
			document.head.appendChild(script);
			
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js';
			document.head.appendChild(script);	
			
			// ���õ�ַ
			// 'https://ranmaxli.gitee.io/blog/services/app/uniapp_my_app/npm/jquery/jquery-3.5.1.min.js'
			// 'https://ranmaxli.gitee.io/blog/services/app/uniapp_my_app/npm/uni.webview/uni.webview.1.5.2.js'	
			
			this.checkUrl();
		}
	}
	$(document).ready(function() {
		balckAd.init();
	});
})