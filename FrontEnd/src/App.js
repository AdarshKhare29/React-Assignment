import './App.css';
import Card from './sharedComponent/Card';
import { useState } from 'react';
import Header from './sharedComponent/Header';
import SideBar from './sharedComponent/SideBar';
import LineChart from './sharedComponent/LineChart';
import BarChart from './sharedComponent/BarChart';
import Footer from './sharedComponent/Footer';
import TableData from './sharedComponent/TableData';


function App() {
  const [showSideBAr,setShowSideBar]=useState(true)
  return (
    <div className={`sb-nav-fixed ${showSideBAr?'':'sb-sidenav-toggled'}`}>
      <Header value={showSideBAr} setValue={setShowSideBar}/>
      <div id="layoutSidenav">
        <SideBar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
              <div className="row">
                <Card title="Primary Card" bgColor="bg-primary" showSideBAr={showSideBAr} setShowSideBar={setShowSideBar}/>
                <Card title="Warning Card" bgColor="bg-warning" showSideBAr={showSideBAr} setShowSideBar={setShowSideBar}/>
                <Card title="Success Card" bgColor="bg-success" showSideBAr={showSideBAr} setShowSideBar={setShowSideBar}/>
                <Card title="Danger Card" bgColor="bg-danger" showSideBAr={showSideBAr} setShowSideBar={setShowSideBar}/>
              </div>

              <div className="row">
                <LineChart />
                <BarChart />
              </div>
              <TableData/>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
