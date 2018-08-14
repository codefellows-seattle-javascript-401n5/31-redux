// import React from 'react';
// import CategoryItem from './category-item'
// import { connect } from 'react-redux';
// const CategoryList = (props) => {
//   return (
//     <ol>
//       {props.category.map(cat => (
//         <CategoryItem key={cat.id} cat={cat} />
//       ))}
//     </ol>
//   );
// };

// const mapStateToProps = state => ({
//   category: state,
// })


// export default connect(mapStateToProps)(CategoryList)

import React from 'react';
import CategoryItem from './category-item'

export default props => (
    <ol>
    {props.category.map(category => <CategoryItem key={category.id} category={category} {...props} onUpdate={props.onUpdate}/>)}
    </ol>
);
