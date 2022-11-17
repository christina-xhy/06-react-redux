import React, { PureComponent } from 'react'
import {connect} from "react-redux"

import { addNumberAction, subNumberAction } from '../store/actioncreator'



export class About extends PureComponent {

 
  calcNumber(num,isAdd){
    if (isAdd){
      console.log("+",num)
      this.props.addNumber(num)
    }else{
      console.log("-",num)
      this.props.subNumber(num)
    }
  }

  render() {
    const {counter,banners,recommend} = this.props


    return (

      <div>
        <h2> About Counter: {counter}</h2>
        <div>
          <button onClick = { e => this.calcNumber(6,true)}>+6</button>
          <button onClick = { e => this.calcNumber(88,true)}>+88</button>
          <button onClick = { e => this.calcNumber(6,false)}>-6</button>
          <button onClick = { e => this.calcNumber(88,false)}>-88</button>
        </div>
        <div>
          <h2>轮播图数据：</h2>
          <ul>
          {
            banners.map((item,index)=>{
              return(
                <li>{item.title}</li>
              )
            })
          }
          </ul>
        </div>
        <div>
          <h2>推荐数据：</h2>
          <ul>
            {recommend.map((item,index)=>{
              return(
                <li>{item.title}</li>
              )
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}
// function mapStateToProps(state){
//   return{
//     counter:state.counter
//   }
// }可以直接简化成下面的代码
const mapStateToProps = (state) => ({
  counter:state.counter,
  banners:state.banners,
  recommend:state.recommend,
})

// function mapDispatchToProps(){
//   return{
//     addNumber(num){
//       dispatch(addNumberAction(num))
//     },
//     subNumber(num){
//       dispatch(subNumberAction(num))
//     }
//   }
// } 简化版
const mapDispatchToProps = (dispatch) =>({
  addNumber : (num) => dispatch(addNumberAction(num)),
  subNumber: (num) => dispatch(subNumberAction(num))
})


export default connect(mapStateToProps,mapDispatchToProps)(About)//这样才是真正的高阶组件的调用。注意两个（）
//第一个（）参数主要是选择需要映射的数据内容 ———— 形式必须是两个函数。