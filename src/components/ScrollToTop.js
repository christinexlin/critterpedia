import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ScrollToTop extends Component {
  constructor(props) {
      super(props);
      this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
      var scrollComponent = this;
      document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
      if (window.pageYOffset > 500) {
      this.setState({
        isVisible: true
      });
    } else {
      this.setState({
        isVisible: false
      });
    }
  }

  scrollToTop() {
      window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
      const { isVisible } = this.state;

      return (
      <div>
          {isVisible ? (
              <Button id="scroll-to-top" onClick={() => {this.scrollToTop();}}>
              <span className="emoji" id="wave" role="img" aria-label="top">
              {String.fromCodePoint('0x1F51D')}
              </span>
              </Button>
          ) : null}
      </div>
    );
  }
}

export default ScrollToTop;
