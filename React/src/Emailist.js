import React, { useEffect, useState } from 'react'
import "./css/emaillist.css"
import Emailbody from './Emailbody'
import EmailListSetting from './EmailListSetting'
import Emailtype from './Emailtype'
import { db } from './firebase'
function Emailist() {

    const [emails, setEmails] = useState([]);

    useEffect(()=>{
            db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{
                setEmails(snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data()
                })))
            })
    },[])

    return (
        <div className="emaillist">
            <EmailListSetting/>
            <Emailtype/>

{
    emails.map(({id, data})=>{
        return <Emailbody key={id} name={data.fromName} email={data.from}  subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
    })
}
            
            
        </div>
    )
}

export default Emailist
