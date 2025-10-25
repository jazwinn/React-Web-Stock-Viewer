import './App.css'
import WatchList from './components/WatchList'
import NewsSegment from './components/NewsSegment'
import AISummarry from './components/AISummary';
import { useState } from 'react';

export default function App() {
  const [SelectedCompany, setSelectedCompany] = useState("AAPL");
  const [SelectedURL, setArticleURL] = useState(null);

  return (
    <>
      <div className="flex flex-row justify-center w-screen h-screen ">
        <WatchList onSend={setSelectedCompany}/> 
        <div className='flex flex-col w-[40%]'>
            <NewsSegment company={SelectedCompany} setArticleURL={setArticleURL}/>
            <AISummarry URL={SelectedURL}/>
        </div>
      </div>
    </>

  )
}