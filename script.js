const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
]
const renderGoodsItem = (title = someItem, price = 000) => { // можно убрать скобки и return
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
}

const renderGoodsList = (list = []) => { // можно убрать круглые скобки, так как аргумент только один
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);
