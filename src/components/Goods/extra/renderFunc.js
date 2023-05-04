// отрисовка товаров
export const renderGoods = (goods,rule = false)=>{

	let arr = []
	goods.map((el,i) => {  // eslint-disable-line no-use-before-define
		if(rule && el.art === '3031800001') {
			return;  // eslint-disable-line no-use-before-define
		}
		arr.push(
			<div className="goodsBlock" key={i}>
				<img src={el.img} alt={el.name}/>
				<div className='goodsName'>{el.name}</div>
				<div className="goodsArt">
					<span>Артикул: </span>
					<span>{el.art}</span>
				</div>
				<div className="goodsPrice">
					<span>{el.price}</span>
					<span> ₽</span>
				</div>
			</div>
		)
	})
	return arr
}