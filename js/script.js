window.onload = function(){
	let money = prompt('Ваш бюджет на месяц?');
	let name  = prompt('Название вашего магазина?');

	let mainList = {
		budget: money,
		storeName: name,
		shopGoods: [],
		employers: {},
		open: false
	};

	/*for (let i = 0; i < 5; i++){
			let a = prompt('Какой тип  товара будем продавать?');
			mainList.shopGoods[i] = a;
				if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
					console.log('Все верно');
					mainList.shopGoods[i] = a;
				}else{
					console.log('else block error');
					i--;
				}	
	}*/
	for (let i = 0; i < 5; i++){
            let a = prompt('Какой тип  товара будем продавать?');
            mainList.shopGoods[i] = a;
                if ((typeof(a))!== 'string' || (typeof(a)) === null || a === '' || a.length > 49) {
                    console.log('if block error');
                    i--;
                }else{
                    console.log('else block Все верно');
                    mainList.shopGoods[i] = a;
                }
    }
	/*let i = 0;
	while (i < 5){
		let a = prompt('Какой тип  товара будем продавать?');
			mainList.shopGoods[i] = a;
				if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
					console.log('Все верно');
					mainList.shopGoods[i] = a;
				}else{
					console.log('else block');
					i--;
				}
				i++;	
	}*/


}
