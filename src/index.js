import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class KookdChef extends React.Component{

getImageSrc(id){
    return "https://previews.123rf.com/images/krisdog/krisdog1108/krisdog110800040/10299785-portrait-of-a-rather-wicked-looking-cartoon-chef.jpg";
}

render(){
  
  return(
    <div id="divKookdChef" className="kookdChef">
      <img src={this.getImageSrc(this.props.id)}/>
      <span className="chefName"><p>{this.props.id}</p></span>
    </div>
    );
  }
}

class MealDetails extends React.Component{

  getImageHref(id){
    return "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/25/0/bw2b07_french_fries1.jpg.rend.hgtvcom.616.462.suffix/1383933925968.jpeg";
  }

  render(){
      return(
      <div id="divMealDetails" className="mealDetails">
          <img src={this.getImageHref(this.props.id)}/>
          <span className="mealName">{this.props.id}</span>
      </div>
    );

  }
}

class KookdEntry extends React.Component {

  render(){
    return (
      <div id="divKookdEntry" className="kookdEntry">
        <KookdChef id={this.props.chef}/>
        <MealDetails id={this.props.mealDetail}/>
      </div>
      );
    }

}

class Home extends React.Component {

  constructor(){
    super();
    this.KookdEntries = [{
      chef: "Gordon",
      mealDetail: "Shepherds Pie"
    },{
      chef: "Ful Maya",
      mealDetail: "Thukpa"
    },{
      chef: "Harke",
      mealDetail: "Choila"
    },{
      chef: "Balotelli",
      mealDetail: "Spaghetti"
    }];
  }

  render(){
    return(
    <div>
      <KookdEntry chef={this.KookdEntries[0].chef} mealDetail={this.KookdEntries[0].mealDetail}/>
      <KookdEntry chef={this.KookdEntries[1].chef} mealDetail={this.KookdEntries[1].mealDetail}/>
      <KookdEntry chef={this.KookdEntries[2].chef} mealDetail={this.KookdEntries[2].mealDetail}/>
      <KookdEntry chef={this.KookdEntries[3].chef} mealDetail={this.KookdEntries[3].mealDetail}/>
    </div>
    );
  }

}

// ========================================

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
