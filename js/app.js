(function(){
	const listElements = document.querySelectorAll('.menu__item--show');
	const list = document.querySelector('.menu__links');
	const menu = document.querySelector('.menu__hamburger');
	const icon = document.querySelector('.menu__img');
	const closeIcon = document.querySelector('.menu__img--close');

	const addClick = ()=> {
		listElements.forEach(element => {
			element.addEventListener('click', ()=>{

				let subMenu = element.children[1];
				let height = 0;
				element.classList.toggle('menu__item--active');

				if(subMenu.clientHeight === 0){
					height = subMenu.scrollHeight;
				}

				subMenu.style.height= `${height}px`;
			});
		});
	}

	const deleteStyleHeight = ()=> {
		listElements.forEach(element =>{

			if(element.children[1].getAttribute('style')){
				element.children[1].removeAttribute('style');
				element.classList.remove('menu__item--active');
			};
		});
	}

	window.addEventListener('resize', ()=>{
		if(window.innerWidth > 1366){
			deleteStyleHeight()
			if(list.classList.contains('menu__links--show'))
				list.classList.remove('menu__links--show');
		}else{
			addClick();
		}
	});

	if(window.innerWidth <= 1366){
		addClick();
	};



	menu.addEventListener('click', ()=> {
		list.classList.toggle('menu__links--show');
		icon.classList.toggle('menu__img--hide');
		if(icon.classList.contains('menu__img--hide')){
			closeIcon.classList.add('menu__img--closeI')
		}else{
			closeIcon.classList.remove('menu__img--closeI')
		}
			
	});
	
})();