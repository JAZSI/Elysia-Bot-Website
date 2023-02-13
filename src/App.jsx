import React, { useState, useEffect } from "react";
import './App.css'

const App = () => {
  const [featuresData, setFeaturesData] = useState([]);
  const [prefixCommandsData, setPrefixCommandsData] = useState({});
  const [slashCommandsData, setSlashCommandsData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const featuresResponse = await fetch('/data/features.json');
      const prefixCommandsResponse = await fetch('/data/prefixCommands.json');
      const slashCommandsResponse = await fetch('/data/slashCommands.json');

      const features = await featuresResponse.json();
      const prefixCommands = await prefixCommandsResponse.json();
      const slashCommands = await slashCommandsResponse.json();

      setFeaturesData(features);
      setPrefixCommandsData(prefixCommands);
      setSlashCommandsData(slashCommands);
    }

    fetchData();
  }, []);

  return(
    <div>
      <video autoPlay loop muted playsInline className="back-video">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="top">
        <nav>
          <img src="/images/logo.png" alt="logo" className="logo" />
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#commands">Commands</a></li>
          </ul>
        </nav>
        <div className="content">
          <img src="/images/avatar.png" className="avatar" />
          <h1>Elysia</h1>
          <a href="invite.html">Invite me</a>
        </div>
      </div>

      <section className="features" id="features">
        <h1 className="title1">Features</h1>

        <div className="features-content">
          {featuresData.map((feature, index) => (
            <div key={index} className="card">
              <div className="box">
                <div className="text">{feature.name}</div>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="commands" id="commands">
        <h1 className="title2">Commands</h1>

        <h2>Prefix Commands</h2>
        <table id="prefixTable">
          <thead>
            <tr>
              <th>Category</th>
              <th>Commands</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(prefixCommandsData).map(([category, commands], index) => (
              <tr key={index}>
                <td>{category}</td>
                <td>
                  <ul>
                    {commands.map((command, commandIndex) => (
                      <li key={commandIndex}>
                        {command.name} - {command.description}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Slash Commands</h2>
        <table id="slashTable">
          <thead>
            <tr>
              <th>Category</th>
              <th>Commands</th>
            </tr>
          </thead>
          <tbody>
          {Object.entries(slashCommandsData).map(([category, commands], index) => (
              <tr key={index}>
                <td>{category}</td>
                <td>
                  <ul>
                    {commands.map((command, commandIndex) => (
                      <li key={commandIndex}>
                        {command.name} - {command.description}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        </section>

        <footer>
          <p>Made with ❤️ by JAZSI</p>
        </footer>
    </div>
  )
}

export default App
