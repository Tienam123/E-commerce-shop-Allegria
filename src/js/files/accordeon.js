export const accordeon = () => {
  const button = document.querySelectorAll( '.products-list__wrapper' );
  const productList = document.querySelectorAll( '.products-list__item' );

  button.forEach(item => item.addEventListener('click', ()=>{
    const activeContent = document.querySelector('#'+ item.dataset.tab);

    if ( activeContent.classList.contains('active') ) {
      activeContent.classList.remove('active');
      item.classList.remove('active');
      activeContent.style.maxHeight = 0;
    } else {
      productList.forEach(element=> {
        element.classList.remove('active');
        element.style.maxHeight = 0;
      });

      button.forEach(element => element.classList.remove('active'));

      item.classList.add('active');
      activeContent.classList.add('active');
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
  }))
}