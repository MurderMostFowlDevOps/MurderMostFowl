import React from "react";
import { useState, useEffect } from "react";
import Gameplay from "./gameplay";
import { getBuildData } from "../helpers/getBuildData";

export default function Dashboard() {
  const [showGameplay, setShowGameplay] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [securityData, setSecurityData] = useState({
    vulnerabilities: 0,
    lastScan: "2025-04-18",
    securityScore: 96
  });
  const [deploymentData, setDeploymentData] = useState({
    github: {
      status: "Success",
      lastDeployed: "2025-04-19 14:30",
      buildTime: "45s",
      url: "https://github-pages-url.com"
    },
    vercel: {
      status: "Success",
      lastDeployed: "2025-04-19 14:25",
      buildTime: "38s",
      url: "https://vercel-deployment-url.com"
    }
  });
  const [performanceData, setPerformanceData] = useState({
    github: {
      responseTime: "220ms",
      uptime: "99.9%",
      loadTime: "1.8s"
    },
    vercel: {
      responseTime: "180ms",
      uptime: "99.95%",
      loadTime: "1.5s"
    }
  });
  const [githubBuilds, setGithubBuilds] = useState([]);

  useEffect(() => {
    const fetchBuildData = async () => {
      const builds = await getBuildData();
      setGithubBuilds(builds);
      
      // Update deployment data with the latest build
      if (builds.length > 0) {
        const latestBuild = builds[0];
        setDeploymentData(prev => ({
          ...prev,
          github: {
            ...prev.github,
            status: latestBuild.status,
            lastDeployed: latestBuild.date,
            buildTime: latestBuild.buildTime
          }
        }));
      }
    };

    fetchBuildData();
  }, []);

  const returnToGame = () => {
    setShowGameplay(true);
  };

  if (showGameplay) {
    return <Gameplay />;
  }

  return (
    <div className="my-10 w-full max-w-4xl flex flex-col items-center mx-auto p-6 bg-gray-50 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">DevOps Dashboard</h1>
      
      {/* Tab Navigation */}
      <div className="flex w-full border-b border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab("overview")}
          className={`py-2 px-4 border-b-2 ${activeTab === "overview" ? "border-blue-500 text-blue-600" : "border-transparent"}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab("security")}
          className={`py-2 px-4 border-b-2 ${activeTab === "security" ? "border-blue-500 text-blue-600" : "border-transparent"}`}
        >
          Security
        </button>
        <button 
          onClick={() => setActiveTab("performance")}
          className={`py-2 px-4 border-b-2 ${activeTab === "performance" ? "border-blue-500 text-blue-600" : "border-transparent"}`}
        >
          Performance
        </button>
        <button 
          onClick={() => setActiveTab("comparison")}
          className={`py-2 px-4 border-b-2 ${activeTab === "comparison" ? "border-blue-500 text-blue-600" : "border-transparent"}`}
        >
          Platform Comparison
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="w-full">
        {activeTab === "overview" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <h2 className="text-lg font-semibold mb-3">GitHub Deployment</h2>
                <div className="flex justify-between items-center mb-2">
                  <span>Status:</span>
                  <span className={`font-medium ${deploymentData.github.status === "Success" ? "text-green-600" : "text-red-600"}`}>
                    {deploymentData.github.status}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Last Deployed:</span>
                  <span>{deploymentData.github.lastDeployed}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Build Time:</span>
                  <span>{deploymentData.github.buildTime}</span>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-white shadow-sm">
                <h2 className="text-lg font-semibold mb-3">Vercel Deployment</h2>
                <div className="flex justify-between items-center mb-2">
                  <span>Status:</span>
                  <span className={`font-medium ${deploymentData.vercel.status === "Success" ? "text-green-600" : "text-red-600"}`}>
                    {deploymentData.vercel.status}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Last Deployed:</span>
                  <span>{deploymentData.vercel.lastDeployed}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Build Time:</span>
                  <span>{deploymentData.vercel.buildTime}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg bg-white shadow-sm mb-6">
              <h2 className="text-lg font-semibold mb-3">Security Overview</h2>
              <div className="flex justify-between items-center mb-2">
                <span>Vulnerabilities:</span>
                <span className={`font-medium ${securityData.vulnerabilities === 0 ? "text-green-600" : "text-yellow-600"}`}>
                  {securityData.vulnerabilities} detected
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Last Security Scan:</span>
                <span>{securityData.lastScan}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Security Score:</span>
                <span className={`font-medium ${securityData.securityScore > 90 ? "text-green-600" : "text-yellow-600"}`}>
                  {securityData.securityScore}/100
                </span>
              </div>
            </div>
            
            <div className="text-center my-6">
              <p className="mb-4 text-gray-700">Ready to play the game?</p>
              <button 
                onClick={returnToGame}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors"
              >
                Start Murder Investigation
              </button>
            </div>
          </div>
        )}
        
        {activeTab === "security" && (
          <div className="space-y-6">
            <div className="p-5 border rounded-lg bg-white shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Security Analysis</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Dependency Vulnerabilities</h3>
                  <div className="h-6 bg-gray-200 rounded-full">
                    <div 
                      className="h-6 bg-green-500 rounded-full flex items-center justify-end pr-3"
                      style={{ width: `${100 - (securityData.vulnerabilities * 5)}%` }}
                    >
                      <span className="text-xs font-medium text-white">
                        {100 - (securityData.vulnerabilities * 5)}%
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">SAST Results</h3>
                  <div className="h-6 bg-gray-200 rounded-full">
                    <div 
                      className="h-6 bg-green-500 rounded-full flex items-center justify-end pr-3"
                      style={{ width: '95%' }}
                    >
                      <span className="text-xs font-medium text-white">95%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Security Headers</h3>
                  <div className="h-6 bg-gray-200 rounded-full">
                    <div 
                      className="h-6 bg-green-500 rounded-full flex items-center justify-end pr-3"
                      style={{ width: '100%' }}
                    >
                      <span className="text-xs font-medium text-white">100%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium text-gray-700 mb-2">Recent Security Alerts</h3>
                <ul className="divide-y divide-gray-200">
                  <li className="py-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Minor vulnerability in react-router</span>
                      <span className="text-xs text-yellow-600 font-medium">Low severity</span>
                    </div>
                    <p className="text-xs text-gray-500">Detected on April 15, 2025</p>
                  </li>
                  <li className="py-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Outdated dependency: lodash</span>
                      <span className="text-xs text-green-600 font-medium">Resolved</span>
                    </div>
                    <p className="text-xs text-gray-500">Resolved on April 16, 2025</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-5 border rounded-lg bg-white shadow-sm">
              <h2 className="text-xl font-semibold mb-4">CodeQL Analysis</h2>
              <div className="overflow-hidden bg-gray-100 rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Files</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">JavaScript Analysis</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">37 files</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Passed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">React Best Practices</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">12 components</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Passed
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "performance" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border rounded-lg bg-white shadow-sm">
                <h2 className="text-xl font-semibold mb-4">GitHub Pages Performance</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Response Time</span>
                      <span className="text-sm text-gray-500">{performanceData.github.responseTime}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Load Time</span>
                      <span className="text-sm text-gray-500">{performanceData.github.loadTime}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Uptime</span>
                      <span className="text-sm text-gray-500">{performanceData.github.uptime}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 border rounded-lg bg-white shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Vercel Performance</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Response Time</span>
                      <span className="text-sm text-gray-500">{performanceData.vercel.responseTime}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Load Time</span>
                      <span className="text-sm text-gray-500">{performanceData.vercel.loadTime}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Uptime</span>
                      <span className="text-sm text-gray-500">{performanceData.vercel.uptime}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: '99.95%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 border rounded-lg bg-white shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Build History</h2>
              <div className="overflow-hidden bg-gray-100 rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Build Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {githubBuilds.map((build, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{build.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{build.platform}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {build.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{build.buildTime}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-04-19 14:25</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Vercel</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Success
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">38s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "comparison" && (
          <div className="p-5 border rounded-lg bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Platform Comparison</h2>
            
            <div className="overflow-hidden bg-gray-100 rounded-lg border mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GitHub Pages</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vercel</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Build Time</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deploymentData.github.buildTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deploymentData.vercel.buildTime}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Response Time</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{performanceData.github.responseTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{performanceData.vercel.responseTime}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Security Features</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CodeQL, Dependabot</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Edge Middleware, Headers</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">CI/CD Integration</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">GitHub Actions</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Built-in CI/CD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">CDN Performance</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Good</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Excellent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-medium text-blue-800 mb-2">Analysis</h3>
              <p className="text-sm text-blue-700">
                Based on our deployment metrics, Vercel shows better performance in load times and build speed.
                GitHub provides more robust security scanning with Dependabot integration and CodeQL analysis.
                For our "Murder Most Fowl" application, the difference in performance is minimal, but Vercel's
                simplified deployment process makes it slightly more convenient for rapid development cycles.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


// import React from "react";
// import { useState, useEffect } from "react";
// import Gameplay from "./gameplay";


// export default function Dashboard() {

//   const [showGameplay, setShowGameplay] = useState(false);

//   const returnToGame = () => {
//     setShowGameplay(true)
//   };

//   if (showGameplay) {
//     return <Gameplay/>;
//   }

//   return (
//     <div className="my-10 w-1/2 flex flex-col items-center mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
//       <p>Click below to go to the game.</p>
//       <button 
//         onClick={returnToGame}
//         className="p-3 border-1 border-blue-700 text-blue-700 rounded-md mt-5"
//       >
//         Go to game!
//       </button>
//     </div>
//   );
// }