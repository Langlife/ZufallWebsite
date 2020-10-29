import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
//import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Zufall Health" scroll>
            <Navigation>
                <a href="/Schedule">Schedule</a>
                <a href="/Activity">Activity</a>
                <a href="/Account_Settings">Account Settings</a>
                <a href="/Logout">Logout</a>
            </Navigation>
        </Header>

    

 <Drawer title="Zufall Health">
          <div class="sidenav">
            <button class="dropdown-btn">Resources
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-container">
              <div>  <a href="/">Transportational Emergency Shelter</a> </div>
              <div>  <a href="/">Hotline</a> </div>
              <div>  <a href="/">Minors/Mandatory Reporting</a> </div>
              <div>  <a href="/">Language Line</a> </div>
              <div>  <a href="/">Directory of Resources</a> </div>
              <div>  <a href="/">Child Abuse</a> </div>
              <div>  <a href="/">Suicide</a> </div>
              <div>  <a href="/">State Resources for Sexual Assault</a> </div>
              <div>  <a href="/">Legal</a> </div>
            </div>
            <button class="dropdown_btn">Forms
              <i class="fa_fa-caret-down"></i>
            </button>
            <div class="dropdown_container">
              <div>  <a href="/">Contact Record Form</a> </div>
              <div>  <a href="/">DOW Sexual Assault Incident Report</a> </div>
              <div>  <a href="/">Accompaniment Record Form</a> </div>
              <div>  <a href="/">Sexual Assault Response Team Victim Script</a> </div>
              <div>  <a href="/">SART Activation Member Survey</a> </div>
              <div>  <a href="/">CSVA Self-Assessment</a> </div>
            </div>
          </div>
          
    </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", myFunction);

    function myFunction() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  };
}

var dropdown2 = document.getElementsByClassName("dropdown_btn");
var j;

for (j = 0; j < dropdown2.length; j++) {
  dropdown2[j].addEventListener("click", myFunction2); 

  function myFunction2() {
    this.classList.toggle("active");
    var dropdownContent2 = this.nextElementSibling;
    if (dropdownContent2.style.display === "block") {
      dropdownContent2.style.display = "none";
    } else {
      dropdownContent2.style.display = "block";
    }
  };
}


export default App;
