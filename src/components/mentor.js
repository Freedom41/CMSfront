import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import requests from '../requests'

const Mentor = ({ search, update, del }) => {
    if(search) {
         return (
            <div className="userProfile">
                <img className="img" src={search.img} alt="img" />
                 <table>
                    <thead>
                        <tr>
                         <th>
                           Name
                         </th>
                         <th>
                            {search.name}
                         </th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                             <th>
                                 Sector
                         </th>
                             <th>
                                 {search.sector}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 College
                         </th>
                             <th>
                                 {search.college}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 Company
                         </th>
                             <th>
                                 {search.company}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 Field
                         </th>
                             <th>
                                 {search.field}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 Posting
                            </th>
                             <th>
                                 {search.posting}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 CGPA
                            </th>
                             <th>
                                 {search.cgpa}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 Xth Percentile
                            </th>
                             <th>
                                 {search.XthPercen}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 XIIth Percentile
                            </th>
                             <th>
                                 {search.XIIPercent}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 Intern
                            </th>
                             <th>
                                 {search.intern}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                Other Achievements
                            </th>
                             <th>
                                 {search.otherachievements}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 Other Shortlist
                            </th>
                             <th>
                                 {search.otherShortlist}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 Academy
                            </th>
                             <th>
                                 {search.academy}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 Extra Cirrculuar
                            </th>
                             <th>
                                 {search.xtracir}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 InternShip
                            </th>
                             <th>
                                 {search.internship}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 Responsibility
                            </th>
                             <th>
                                 {search.responsibility}
                             </th>
                         </tr>
                         <tr>
                             <th>
                                 Pdf Link
                            </th>
                             <th>
                                 {search.resume}
                             </th>
                         </tr>
                    </tbody>
                 </table>
                <div className="info">
                     <button onClick={update}> Update </button>
                     <button onClick={del}> Delete </button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Mentor;
