// ����ļ�����������ҳ�������ɺ�ͨ��һЩ�����ֶ����Ƴ��Ѿ����صĹ��Ԫ�أ�����ͨ���޸�ҳ����ʽ�ȷ�ʽ���ع�����ݣ��Ӷ�ʵ��ȥ������Ч����

$(function() {
	var removeAd = {
		checkUrl: function() {
			this.findSomeAdPossible();
			this.blockAds();
		},
		
		// �Ƴ����
		blockAds: function() {
			console.log('blockAds Start'); 			
			console.log(window.location.href);			
			if (window.location.href.includes("iqiyi")) {
				// ���������������
				document.querySelectorAll('.cover').forEach((element) => {
				  element.parentNode.removeChild(element);
				});
				document.querySelectorAll('.iqyGuide-content').forEach((element) => {
				  element.style.display = 'none';
				});
				// �� iqiyi APP����������Ƶ
				document.querySelector('.ChannelHomeBanner_mbox_2Q4aQ').remove();
			}
			if (window.location.href.includes("qq")) {
				// ����ʹ�������
				document.querySelector('.at-app-banner__open-method.at-app-banner--button').click();
				// ��APP��������������
				document.querySelector('.at-app-banner__main-btn.at-app-banner--button').remove();
			}
			if (window.location.href.includes("youku")) {
				// ����ʹ�������
				document.querySelectorAll('.callEnd_box ').forEach((element) => {
				  element.style.display = 'none';
				});
			}
			if (window.location.href.includes("anfuns")) {
				// �Ƴ�����
				document.querySelectorAll('div.hl-poptips-wrap.hl-bg-site').forEach((element) => {
				  element.parentNode.removeChild(element);
				});
				// �Ƴ��ûұ���
				document.querySelectorAll('div.hl-pops-bg.hl-pops-bg-active').forEach((element) => {
				  element.parentNode.removeChild(element);
				});
			}
			if (window.location.href.includes("yemu")) {
				// ͷ�����
				document.querySelector('.t_close').click();
			}
		},
		
		//�򵥵������㷨
		findSomeAdPossible: function() {
			var sap = $('div iframe'),
				ad_img = $('div script').parent().find('img,embed'),
				float_img = $('div object').parent().find('img,embed');
			this.arrayDel(sap, 360, 200);
			this.arrayDel(ad_img, 350, 150);
			this.arrayDel(float_img, 350, 150);
		},
		arrayDel: function(arr, conWidth, conHeight) {
			var len = arr.length;
			for (var i = 0; i < len; i++) {
				var self = arr.eq(i);
				if (self.width() <= conWidth || self.height() <= conHeight) {
					self.remove();
				}
			}
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
			
			this.checkUrl();
		}
	}
	$(document).ready(function() {
		removeAd.init();
		//Ϊ��ajax�첽��ʱ���صĸ��4s�������
		setTimeout(function() {
			removeAd.init();
		}, 4000)
	});
})