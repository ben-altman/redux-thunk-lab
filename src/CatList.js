// write your CatList component here
import React from 'react';

const CatList = (props) => {

    const listCats = props.catPics.map((pic) => <img key={pic.id} src={pic.url} alt="cat pic"/>)

    return (
        <div>
            {listCats}
        </div>);
};

export default CatList;

// ALTERNATE 1:
// const CatList = (props) => {
//     function listCats () {
//       return props.catPics.map(catPic => {
//         return (
//           <img src={catPic.url} role='presentation' />
//         )
//       })
//     }
//     return (
//       <div>
//         { listCats() }
//       </div>
//     )
//   }

// ALTERNATE 2:
// class CatList extends Component {
//     renderCatPics = () => {
//        return this.props.catPics.map(cat => {
//           return <img key={cat.id} src={cat.url} alt="Picture of a cat" />
//        });
//     }
   
//     render() {
//        return (
//           <div>{this.renderCatPics()}</div>
//        )
//     }
//  }