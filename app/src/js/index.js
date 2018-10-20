var cordova_ready = false;

var isOnline = function () {

}, isOffline = function () {
	
};

window.ons.disableAutoStatusBarFill();

if (window.addEventListener) {
	/*
		Works well in Firefox and Opera with the 
		Work Offline option in the File menu.
		Pulling the ethernet cable doesn't seem to trigger it.
		Later Google Chrome and Safari seem to trigger it well
	*/
	window.addEventListener("online", isOnline, false);
	window.addEventListener("offline", isOffline, false);
}
else {
	/*
		Works in IE with the Work Offline option in the 
		File menu and pulling the ethernet cable
	*/
	document.body.ononline = isOnline;
	document.body.onoffline = isOffline;
}

document.addEventListener("resume", function () {
	if (navigator.onLine === false) {
		
	}
}, false)

document.addEventListener('init', function (event) {
	var page = event.target;

	if (page.classList.contains('app-page')) {
		var control = page.querySelector(fn.navigator.pages.length > 1
			? 'ons-back-button'
			: '.page-toolbar-back-button')
		if (control) control.classList.remove('hidden');
		initPage(page);
	}
});

document.addEventListener("deviceready", function () {
	cordova_ready = true;
	if (cordova.platformId === 'browser') {
		document.body.appendChild(document.createElement('script')).src = './js/browser.js';
	} else {
		document.body.appendChild(document.createElement('script')).src = './js/admob.js';
	}
	if (navigator.onLine === false) {
	}
}, false);

window.fn = {};

window.fn.navigator = document.getElementById('navigator');

window.fn.open = function () {
	var menu = document.getElementById('menu');
	menu.open();
};

window.fn.load = function (page) {
	var content = document.getElementById('content');
	var menu = document.getElementById('menu');
	content.load(page)
		.then(menu.close.bind(menu));
};

function initPage(page) {
	page.querySelectorAll('.btn-list').forEach(function (list) {
		list.classList.add('list');
		list.style.marginLeft = '-10px';
		list.style.marginRight = '-10px';
		list.querySelectorAll('li').forEach(function (li) {
			li.classList.add('list-item');
			var center = document.createElement('div');
			center.classList.add('list-item__center');
			li.appendChild(center);

			var right = document.createElement('div');
			right.classList.add('list-item__right');
			var btn = li.querySelector('ons-button');
			btn.classList.add('button--outline');
			li.removeChild(btn);
			right.appendChild(btn);
			li.appendChild(right);
			var text = btn.innerText.toLowerCase();
			text = text[0].toUpperCase() + text.slice(1);
			center.appendChild(document.createTextNode(text));
			btn.innerText = 'Begin';
		});
	});

	page.querySelectorAll('.btn-checkbox-list').forEach(function (list) {
		list.classList.add('list');
		list.style.marginLeft = '-10px';
		list.style.marginRight = '-10px';
		list.querySelectorAll('li').forEach(function (li) {
			li.classList.add('list-item');
			var center = document.createElement('div');
			center.classList.add('list-item__center');
			li.appendChild(center);

			var checked = !!localStorage.getItem('checkboxes-' + li.getAttribute('data-checkbox'));
			var left = document.createElement('div');
			left.classList.add('list-item__left');
			var checkbox = document.createElement('ons-checkbox');
			checkbox.checked = checked;
			checkbox.oninput = function(e) {
				localStorage.setItem('checkboxes-' + li.getAttribute('data-checkbox'), e.target.checked ? 'set' : '');
			}
			left.appendChild(checkbox);
			li.appendChild(left);

			var right = document.createElement('div');
			right.classList.add('list-item__right');
			var btn = li.querySelector('ons-button');
			btn.classList.add('button--outline');
			li.removeChild(btn);
			right.appendChild(btn);
			li.appendChild(right);
			var text = btn.innerText.toLowerCase();
			text = text[0].toUpperCase() + text.slice(1);
			center.appendChild(document.createTextNode(text));
			btn.innerText = 'Begin';
		});
	});

	page.querySelectorAll('.link-list').forEach(function (list) {
		list.classList.add('list');
		list.style.marginLeft = '-10px';
		list.style.marginRight = '-10px';
		list.querySelectorAll('li').forEach(function (li) {
			li.classList.add('list-item');
			var icon = document.createElement('ons-icon');
			icon.setAttribute('icon', 'ion-link');
			icon.style.marginRight = '10px';
			li.insertBefore(icon, li.firstChild);
		});

	});

	page.querySelectorAll('.vergelijkers-overzicht .row').forEach(function (row) {
		row.classList.add('list');
		row.style.marginLeft = '-10px';
		row.style.marginRight = '-10px';
		row.querySelectorAll('.vergelijker').forEach(function (vergelijker) {
			vergelijker.classList.add('list-item');
			vergelijker.querySelector('.panel').classList.add('list-item__center');
			var btn = vergelijker.querySelector('.button');
			btn.parentElement.removeChild(btn);

			var left = document.createElement('div');
			left.classList.add('list-item__left');
			var img = vergelijker.querySelector('img');
			img.parentElement.removeChild(img);
			img.classList.add('list-item__thumbnail');
			left.appendChild(img);

			var right = document.createElement('div');
			right.classList.add('list-item__right');
			right.appendChild(btn);

			vergelijker.appendChild(left);
			vergelijker.appendChild(right);
		});
	});
}



