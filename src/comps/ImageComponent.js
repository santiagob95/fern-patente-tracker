import React from "react";
export default class ImageComponent extends React.Component {
  state = { isOpen: false };
  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked "+ this.props.imageurl);
  };

  render() {
    return (
      <div>
        <img
          key={this.props.id}
          className="miniatura"
          src={this.props.imageurl}
          onClick={this.handleShowDialog}
          alt="miniatura"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              key={this.props.id}
              className="image"
              src={this.props.imageurl}
              {...console.log(this.props.imageurl)}
              onClick={this.handleShowDialog}
              alt="maximizada"
            />
          </dialog>
        )}
      </div>
    );
  }
}