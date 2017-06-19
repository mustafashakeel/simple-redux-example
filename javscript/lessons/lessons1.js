class Books {
  constructor(title, author,publishdate ){
    
      this.title = title;
      this.author = author;
      this.publishdate = publishdate;
    
  }
  
  getBook(){
    return "Book Title" + this.title+" and the Author is "+this.author+" and it was published on "+this.publishdate;
    
  }
}

class BookDetails extends Books{
  constructor(title,author,publishdate, category){
    super.constructor(title, author,publishdate);
      this.category = category;
  }
}
  
    getbookDetails(){
      return "Book Category " +this.category +"  "+ super.getBook(); 
    }
  
}

// var gost = new Books("God of small things","Arundati Roy","Dec 2010" ," Novel");
// var aa =gost.getBook();
// console.log(aa)
// var gost = new BookDetails("God of small things","Arundati Roy","Dec 2010" ," Novel");
// var aa =gost.getbookDetails();
// console.log(aa)
