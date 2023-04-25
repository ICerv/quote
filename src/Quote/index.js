import './style.css'

export const Quote = (props) => {
  const { text, author } = props;

  const quoteContent = document.createElement('div');
  quoteContent.classList.add('quote__content');
  quoteContent.innerHTML = `
      <div class="quote__text">
        <h1>${text}</h1>
        </div>  
        <div class="quote__author">
          <h3>${author}</h3>
        </div>
  `;

  return quoteContent;
}

