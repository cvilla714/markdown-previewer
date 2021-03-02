import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import marked from "marked";

const initalState = `
this is a paragraph

**This is bolded text**

# Heading
## Heading 2

***this is a quote***
> Block Quotes!

***this is a list***

- list item 1
- list item 2
- list item 3

***this is a link***
[visit this website](https://github.com/cvilla714)

***this is an inline***  \`<div></div>\`

***this is a blog of code*** : 
\`\`\`
const magna = document.querySelector("youelement")
\`\`\`

***this is an image***
![Onepice](https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/nlntr3u26ce31.png)

`;

class App extends React.Component {
  state = {
    text: initalState,
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });
    return (
      <div>
        <h1 className="text-center mt-4">Convert your Markdown</h1>
        <div className="row">
          <div className="col-6">
            <h5 className="text-center">Enter your markdown:</h5>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange} />
          </div>
          <div className="col-6">
            <h5 className="text-center">See the result</h5>
            <div className="preview rounded p-2" dangerouslySetInnerHTML={{ __html: markdown }} id="preview"></div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#app"));
