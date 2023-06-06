import React, { useState } from "react";
import dummyCaseData from "./dummyCaseData";
import "./Case.css"; // Assuming you have a separate CSS file named case.css

const Case = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const handleCaseClick = (index) => {
    setSelectedCase(dummyCaseData[index]);
  };

  const handleCloseDetails = () => {
    setSelectedCase(null);
  };

  const [caseNo, setCaseNo] = useState("");
  const [caseName, setCaseName] = useState("");
  const [partyName, setPartyName] = useState("");
  const [courtName, setCourtName] = useState("");
  const [partyContactNo, setPartyContactNo] = useState("");
  const [adversePartyName, setAdversePartyName] = useState("");
  const [adversePartyLawyerName, setAdversePartyLawyerName] = useState("");
  const [adversePartyLawyerNo, setAdversePartyLawyerNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!caseNo || !caseName || !partyName || !courtName) {
      alert("Please fill in all the required fields.");
      return;
    }

    const newCase = {
      caseNo,
      caseName,
      partyName,
      courtName,
      partyContactNo,
      adversePartyName,
      adversePartyLawyerName,
      adversePartyLawyerNo,
    };

    dummyCaseData.push(newCase); // Store new case data in dummyCaseData array

    // Reset form fields
    setCaseNo("");
    setCaseName("");
    setPartyName("");
    setCourtName("");
    setPartyContactNo("");
    setAdversePartyName("");
    setAdversePartyLawyerName("");
    setAdversePartyLawyerNo("");
  };

  return (
    <div className="case_container">
      <div className="case-container">
        <div className="case-heading">Case List</div>
        {dummyCaseData.map((caseItem, index) => (
          <div
            className="case_brief"
            key={index}
            onClick={() => handleCaseClick(index)}
          >
            <div>Case No: {caseItem.caseNo}</div>
            <div>Case Name: {caseItem.caseName}</div>
          </div>
        ))}
      </div>

      {selectedCase && (
        <div className="case-details-container">
          <div className="case-details">
            <h1>Case Details</h1>
            <div>Case No: {selectedCase.caseNo}</div>
            <div>Case Name: {selectedCase.caseName}</div>
            <div>Party Name: {selectedCase.partyName}</div>
            <div>Court Name: {selectedCase.courtName}</div>
            <div>Party Contact No: {selectedCase.partyContactNo}</div>
            <div>Adverse Party Name: {selectedCase.adversePartyName}</div>
            <div>
              Adverse Party Lawyer Name: {selectedCase.adversePartyLawyerName}
            </div>
            <div>
              Adverse Party Lawyer No: {selectedCase.adversePartyLawyerNo}
            </div>
          </div>
          <button className="close" onClick={handleCloseDetails}>Close</button>
        </div>
      )}

      <div className="create_new">
        <h1>Create New</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label             htmlFor="caseNo"
            >
              Case No:
            </label>
            <input
              type="text"
              id="caseNo"
              value={caseNo}
              onChange={(e) => setCaseNo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="caseName">Case Name:</label>
            <input
              type="text"
              id="caseName"
              value={caseName}
              onChange={(e) => setCaseName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="partyName">Party Name:</label>
            <input
              type="text"
              id="partyName"
              value={partyName}
              onChange={(e) => setPartyName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="courtName">Court Name:</label>
            <input
              type="text"
              id="courtName"
              value={courtName}
              onChange={(e) => setCourtName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="partyContactNo">Party Contact No:</label>
            <input
              type="text"
              id="partyContactNo"
              value={partyContactNo}
              onChange={(e) => setPartyContactNo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="adversePartyName">Adverse Party Name:</label>
            <input
              type="text"
              id="adversePartyName"
              value={adversePartyName}
              onChange={(e) => setAdversePartyName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="adversePartyLawyerName">
              Adverse Party Lawyer Name:
            </label>
            <input
              type="text"
              id="adversePartyLawyerName"
              value={adversePartyLawyerName}
              onChange={(e) => setAdversePartyLawyerName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="adversePartyLawyerNo">Adverse Party Lawyer No:</label>
            <input
              type="text"
              id="adversePartyLawyerNo"
              value={adversePartyLawyerNo}
              onChange={(e) => setAdversePartyLawyerNo(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
  };
  
  export default Case;
  
