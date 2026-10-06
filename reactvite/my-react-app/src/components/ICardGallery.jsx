import React from 'react'
import ICard from './ICard'

function ICardGallery(){
    const student=[{
        college:"ABES Engineering College",
        roll:"29347",
        name:"Ram",
        branch:"CSE"
    },
    {
        college:"ABES Engineering College",
        roll:"46378",
        name:"Shyam",
        branch:"CSE"
    },
    {
        college:"ABES Engineering College",
        roll:"84238",
        name:"Ramesh",
        branch:"CSE"
    }];
    return(
        <div>
            <ICard data={student[0]}/>
            <ICard data={student[1]}/>
            <ICard data={student[2]}/>
            <ICard college="ABES Engineering College" roll="38289" name="Ansh" branch="CSE" />
        </div>
    )
}
export default ICardGallery