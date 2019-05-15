// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    this.content = domElement.querySelector('.article-content');
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Expand";
  
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
   
    // this.domElement.classList.toggle('article-open');
    this.content.classList.toggle('content-open');
    this.expandButton.textContent = this.expandButton.textContent === "Expand" ? "Collapse" : "Expand";
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(article => {
  new Article(article);
 
})


// TWEEN MAX Animations

TweenMax.from('.article-one', 0.3, {x:300, opacity:0, scale:0.5, ease: Back.easeInOut.config(1.7)});
TweenMax.from('.article-two', 0.3, {x:300, opacity:0, scale:0.5, ease: Back.easeInOut.config(1.7), delay: 0.2});
TweenMax.from('.article-three', 0.3, {x:300, opacity:0, scale:0.5, ease: Back.easeInOut.config(1.7), delay: 0.4});
TweenMax.from('.article-four', 0.3, {x:300, opacity:0, scale:0.5, ease: Back.easeInOut.config(1.7), delay: 0.6});
TweenMax.from('.article-five', 0.3, {x:300, opacity:0, scale:0.5, ease: Back.easeInOut.config(1.7), delay: 0.8});
TweenMax.from('.article-six', 0.3, {x:300, opacity:0, scale:0.5, ease: Back.easeInOut.config(1.7), delay: 1});