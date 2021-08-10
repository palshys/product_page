document.getElementById('close').addEventListener('click', function(){
document.getElementById('subscription').classList.add('hidden');
})

document.getElementById('applyDiscount').addEventListener('click', function(){
document.getElementById('subscription').classList.add('hidden');
document.getElementById('discount').textContent = ('DISCOUNT ADDED✅');
document.getElementById('applyDiscount').classList.add('background');
document.getElementById('org-price').textContent = ('125.99✅')

})

document.getElementById('discount').addEventListener('click', function(){
document.getElementById('subscription').classList.remove('hidden');
})

