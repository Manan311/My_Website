import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import NotFound from "./notfound";

import { Button } from 'react-bootstrap';

//creating components
// npx crcf --notest components/Home
function App() {
  return (
    <div>
      <BrowserView>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/My_Website" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/My_Website/about" render={() => <About />} />
          <Route exact path="/skills" render={() => <Skills />} />
          <Route exact path="/My_Website/skills" render={() => <Skills />} />
          <Route exact path="/projects" render={() => <Projects />} />
          <Route exact path="/My_Website/projects" render={() => <Projects />} />
          <Route exact path="/resume" render={() => <Resume />} />
          <Route exact path="/My_Website/resume" render={() => <Resume />} />
          {/* <Route exact path='/github/:id' render={(props) => (<Github id={props.match.params.id} />)}/> */}
          {/* To get input from url like, 'api/:id'
    <Route path='/cars/detail/:id' render={(props) => (<GetOne id={props.match.params.id} />)}/>
    <Route path='/cars/edit/:id' render={(props) => (<Edit id={props.match.params.id} />)}/>
    <Route path='/cars/delete/:id' render={(props) => (<Delete id={props.match.params.id} />)}/> */}
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </BrowserView>
      <MobileView>
        <Route
          exact
          path="*"
          render={() => (
            <div>
              <h2> </h2>
              <h2 class="ui red center aligned header appRedGlow">
                Application is not configured for mobile view. Please open it on
                a desktop.
              </h2>
              <h2 class="ui red center aligned header appRedGlow">
                Sorry for the inconvenience.
              </h2>
            </div>
          //   <div className="home-body">
          //   <div className="home-center">
          //     <h1 as="h1" className="inverted huge">
          //       Hello, I am Manan
          //     </h1>
          //     <h4 className="inverted">
          //       Forth Year Software Developer Student
          //     </h4>
          //     <br />
          //     <div className="home-icons-in-line">
          //     <Button
          //         icon="linkedin square"
          //         color="blue"
          //         size="mini"
          //         circular
          //         // onClick={this.linkedInClick}
          //       ></Button>
          //       Linkedin
          //     </div>
          //     <div className="home-icons-in-line">
          //     <Button
          //         icon="github"
          //         size="mini"
          //         circular
          //         // onClick={this.githubClick}
          //       ></Button>
          //       Github
          //     </div>
          //     <div className="home-icons-in-line">
          //       <Button
          //         icon="mail outline"
          //         size="mini"
          //         circular
          //         color="blue"
          //         // onClick={this.handleCopyClick}
          //       ></Button>
          //       {/* {emailButtonText} */}
          //       Email
          //     </div>
          //   </div>
          // </div>
          )}
        />
      </MobileView>
    </div>
  );
}

export default App;

// Application is not configured for mobile yet, please view it on a desktop.
