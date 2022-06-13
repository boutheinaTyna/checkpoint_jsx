import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src= {"https://www.auto-moto.com/wp-content/uploads/sites/9/2020/11/audi-sq2-750x410.jpg"} alt= "pic" /> 
          <br />
          <img src= {"https://www.masculin.com/wp-content/uploads/sites/2/2021/02/Essai-Volvo-XC40-Hyrbide-Rechargeable_56-2048x1365.jpg.webp"} alt= "pic3" /> 
        </div>
        
        <iframe width="320" height="240" src="https://www.youtube.com/embed/Cjc5xjpeVag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
      </div>
      </header>
    </div>
  );
}

export default App;
