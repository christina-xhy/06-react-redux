import React, { PureComponent } from 'react'
import axios from "axios"
import {changeBannersAction,changeRecommendAction} from "../store/actioncreator"
import {connect} from "react-redux"

export class Category extends PureComponent {

  componentDidMount(){
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const banners = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      console.log(banners,recommend)
      this.props.changeBanners(banners)
      this.props.changeRecommend(recommend)
    })
  }
  render() {
    return (
      <div>Category Page</div>
    )
  }
  }

  const mapDispatchToProps = (dispatch) =>({
    changeBanners(banners){
     dispatch(changeBannersAction(banners))
    }, 
    changeRecommend(recommend){
     dispatch(changeRecommendAction(recommend))
    }
  })


export default connect(null,mapDispatchToProps)(Category)