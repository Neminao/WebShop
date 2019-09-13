import React from "react";
import { Swipeable } from "react-swipeable";

export default class Carousel extends React.Component<
  { images: any[]; loading: any; isLoaded: boolean },
  { position: number; doMove: boolean; direction: string; interval: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      position: 0,
      doMove: false,
      direction: "",
      interval: null
    };
  }
  componentDidMount() {
        
    let interval = setInterval(()=> {
        this.swipeLeft()
      }, 5000);
      this.setState({interval})
  }
  componentWillUnmount(){
      clearInterval(this.state.interval)
  }
  onClick = (event: any) => {
    const { id } = event.target;
    let position = this.state.position;
    const images = this.props.images;
    let doMove = this.state.doMove;
    if (!doMove) {
      this.setState({ doMove: true, direction: id });
      setTimeout(() => {
        if (id == "left") {
          if (position > 0) position -= 1;
          else position = images.length - 1;
        } else if (id == "right") {
          if (position < images.length - 1) position += 1;
          else position = 0;
        }
        this.setState({ position, doMove: false });
      }, 1000);
    }
  };
  swipeRight = () => {
    let position = this.state.position;
    const images = this.props.images;
    let doMove = this.state.doMove;
    if (!doMove) {
      this.setState({ doMove: true, direction: "left" });
      setTimeout(() => {
        if (position > 0) position -= 1;
        else position = images.length - 1;

        this.setState({ position, doMove: false });
      }, 1000);
    }
  };

  swipeLeft = () => {
    console.log("swipe");
    let position = this.state.position;
    const images = this.props.images;
    let doMove = this.state.doMove;
    if (!doMove) {
      this.setState({ doMove: true, direction: "right" });
      setTimeout(() => {
        if (position < images.length - 1) position += 1;
        else position = 0;

        this.setState({ position, doMove: false });
      }, 1000);
    }
  };
  loading = () => {
    if(!this.props.isLoaded)
    this.props.loading(false);
  }

  render() {
    const images = this.props.images;
    const { position, doMove, direction } = this.state;
    const display = [];
    const config = {
      onSwipedLeft: () => this.swipeLeft(),
      onSwipedRight: () => this.swipeRight(),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    };
    for (let i = 0; i < images.length; i++) {
      display.push(
        
          <img
            onLoad={this.loading}
            className="carouselImg"
            style={{ order: i - position > 0 ? i - position : images.length }}
            src={images[i]}
          ></img>
      );
    }
    return (
      <div className="carouselWrapper">
        <button className="carouselBtn" onClick={this.onClick} id="left">
          {" "}
        </button>
        <Swipeable {...config}>
        <div
          className={"carouselImgContainer ".concat(
            doMove
              ? direction == "right"
                ? "carouselMoveRight"
                : "carouselMoveLeft"
              : ""
          )}
        >
          {display}
        </div>
        </Swipeable>
        <button className="carouselBtn" onClick={this.onClick} id="right">
          {" "}
        </button>
      </div>
    );
  }
}
