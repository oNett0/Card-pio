document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');

    const items = [
        { category: 'Entradas', name: 'Costelinha', price: 'R$ 35.00', image: 'camarao.jpg' },
        { category: 'Pratos Principais', name: 'Prato 3', price: 'R$ 45.00', image: 'bobo.jpg' },
        { category: 'Bebidas', name: 'Bebida', price: 'R$ 15.00', image: 'caipirinha.jpg' }
        // Adicione mais itens conforme necessário
    ];

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `;
        menu.appendChild(menuItem);
    });
});
