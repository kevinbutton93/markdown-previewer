import React from 'react'

import "./App.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from 'react-bootstrap/Jumbotron'
import FormControl from 'react-bootstrap/FormControl'
let marked = require("marked")
marked.setOptions({
  gmf: true,
  breaks: true
})

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input:
`# Welcome to my React Markdown Previewer! 
## This is a sub-heading...
www.google.com

\`code\` 
      
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
> Dorothy followed her through many of the beautiful rooms in her castle.
![Philadelphia's Magic Gardens. This place was so cool!](/assets/images/philly-magic-gardens.jpg "Philadelphia's Magic Gardens")
**bold**`
    ,
      output: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({input: event.target.value})
  }

  componentDidMount() {
    this.setState((prevState) => {
      return {
        output: marked(prevState.input)
      }
    })
  }

  render() {
    

    return (
      <div id="app">
        <Container fluid>
            <Jumbotron className="text-center"><h1>Markdown Previewer</h1></Jumbotron>
          <Row>
            <Col>
              <Jumbotron>
                <h2>Editor</h2>
                <FormControl as="textarea" 
                             id="editor" 
                             onChange={this.handleInputChange}
                             value={this.state.input}
                             >
                </FormControl>
              </Jumbotron>
              
            </Col>
            <Col >
              <Jumbotron>
                <h2>Previewer</h2>
                <p id="preview"
                  dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}
                ></p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



export default App;


