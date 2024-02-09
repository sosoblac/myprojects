import React, { useEffect, useState } from 'react'
import './volleyballcounter.css'

const VolleyballCounter = () => {
    useEffect(() => {
        checkEndOfSet()
    });

    const values = ['st','nd','rd','th','th']
    // team name
    const [teamAname, setTeamAname] = useState('Team Emma');
    const [teamBname, setTeamBname] = useState('Team Soso');
    const [colors, setColor]= useState('')

    //team major score
    const [teamAMajor, setTeamAmajor] = useState(0);
    const [teamBmajor, setTeamBmajor] = useState(0);

    // teams minor score
    const [teamAminor, setTeamAminor] = useState(0);
    const [teamBminor, setTeamBminor] = useState(0);

    const [result, setResult] = useState([]);

    // endset button
    const [endSet, setEndSet] = useState(false);

    const [switchTeam, setSwitchTeam] = useState(true)

    //add and subtract from team a
    const addScoreTeamA = ()=>{
      setTeamAminor(teamAminor=>{
        if(teamAminor >=25 && teamAminor - teamBminor >=2){
          return teamAminor
        }else{
          return teamAminor + 1
        }
      })
        // setTeamAminor(teamAminor + 1)
    }
    const subScoreTeamA = ()=>{
        setTeamAminor(teamAminor=>{
            if (teamAminor === 0){
                return teamAminor;
            } else {
                return teamAminor - 1
            }
        })
    }
    //add and subtract from team b
    const addScoreTeamB = ()=>{
      setTeamBminor(teamBminor=>{
        if(teamBminor >=25 && teamBminor - teamAminor >=2){
          return teamBminor
          
        }else{
          return teamBminor + 1
        }
      })
    }
    const subScoreTeamB = ()=>{
        setTeamBminor(teamBminor=>{
            if (teamBminor ===0){
                return teamBminor;
            }else {
                return teamBminor - 1
            }
        })
    }

    //check end of set
    const checkEndOfSet = ()=>{
        if(teamAminor >=25 && teamAminor - teamBminor >=2){
            console.log('Team A wins set')
            setColor('orange')
            // setTeamAmajor(teamAMajor + 1)
            setEndSet(true)
        } else if (
            teamBminor >=25 && teamBminor - teamAminor >=2
        ){
            console.log('Team B wins set')
            setColor('orange')
            // setTeamBmajor(teamBmajor + 1)
            setEndSet(true)
        }
        else{
          // setColor('white')
          setEndSet(false)
        }
        
    }

    const saveSetScore = ()=>{
        setResult(result=>[...result,{'teamA':teamAminor, 'teamB':teamBminor}])
        if (teamAminor < teamBminor){
          setTeamBmajor(teamBmajor +1)
        } else if (teamAminor > teamBminor){
          setTeamAmajor(teamAMajor +1)
        }

        setTeamAminor(0)
        setTeamBminor(0)
        
    }

    //switch teams
    const switchTeams = ()=>{
      setSwitchTeam(!switchTeam)
    }


  return (
    <div className="VolleyballCounterContainer">
      <div className="VolleycounterContainer">
        <div className="teamScoreTeam">
          <div className="teamNameDiv">
            <h3 className="teamName">{switchTeam ? teamAname : teamBname}</h3>
          </div>

          <div className="teamMajorScore">
            <span>{switchTeam ? teamAMajor : teamBmajor}</span>
            <span>-</span>
            <span>{switchTeam ? teamBmajor : teamAMajor}</span>
          </div>
          <div className="teamNameDiv">
            <h3 className="teamName">{switchTeam ? teamBname : teamAname}</h3>
          </div>
        </div>

        <div className="score">
          <div className="leftTeamButton">
            <div onClick={switchTeam ? addScoreTeamA : addScoreTeamB} className="add left">
              <h3>+</h3>
            </div>
            <div onClick={switchTeam ? subScoreTeamA : subScoreTeamB} className="subtract">
              <h3>-</h3>
            </div>
          </div>
          <div className="rightTeamButton">
            <div onClick={switchTeam ? addScoreTeamB : addScoreTeamA} className="add ">
              <h3>+</h3>
            </div>
            <div onClick={switchTeam ? subScoreTeamB : subScoreTeamA} className="subtract">
              <h3>-</h3>
            </div>
          </div>
          <img className="settings" src="/images/settings.png" alt="" />
          <img className="question" src="/images/question.png" alt="" />

          {/* Score */}
          <h1 style={{color:
            switchTeam ? (teamAminor >=25 && teamAminor - teamBminor >=2 ?`${colors}` : 'white') :(teamBminor >=25 && teamBminor - teamAminor >=2 ? `${colors}` :'white')
            }} className="teamScore">{switchTeam ? teamAminor : teamBminor}</h1>

          <div className="scoreseperator">
            {/* <div className="switchTeam"> */}
            <img onClick={switchTeams} src="/images/switch.png" alt="" />
            {/* </div> */}
            <div className="circle"></div>
            <div className="circle"></div>
            {endSet ? (
              <button onClick={saveSetScore} className="endSet">
                End set
              </button>
            ) : (
              <img src="/images/deleteicon.png" alt=""/>
            )}
          </div>

          <h1 style={{color:
            switchTeam ?(teamBminor >=25 && teamBminor - teamAminor >=2 ? `${colors}` :'white') : (teamAminor >=25 && teamAminor - teamBminor >=2 ?`${colors}` : 'white')
            }} className="teamScore">{switchTeam ? teamBminor : teamAminor}</h1>
        </div>

        <div className="resultContainer">
          {result.length === 0 ? (
            <div className="results">
              <h2 className="set">
                1st
              </h2>
              <div className="setscore">
                <h3 className="leftScore">0</h3>
                <div className="seperatorSmall">
                  <div className="topSeperator"></div>
                  <div className="topSeperator"></div>
                </div>
                <h3 className="rightScore">0</h3>
              </div>
            </div>
          ) : (
          result.map((result, index) => (
            <div className="results" key={index}>
              <h2 className="set">
                {index + 1}
                {values[index]}
              </h2>
              <div className="setscore">
                <h3 style={{color:
                  switchTeam ? (result.teamA>result.teamB ? 'orange' :'white' ) : (result.teamB>result.teamA ? 'orange' :'white')
                  }} className="leftScore">{switchTeam ? result.teamA : result.teamB}</h3>
                <div className="seperatorSmall">
                  <div className="topSeperator"></div>
                  <div className="topSeperator"></div>
                </div>
                <h3 style={{color:
                  switchTeam ? (result.teamB>result.teamA ? 'orange' :'white' ) : (result.teamA>result.teamB ? 'orange' :'white')
                  }} className="rightScore">{switchTeam ? result.teamB : result.teamA}</h3>
              </div>
            </div>
          )))
          }
          
        </div>
      </div>
    </div>
  );
}

export default VolleyballCounter
