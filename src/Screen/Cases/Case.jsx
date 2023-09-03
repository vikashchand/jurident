import React, { useContext, useState } from "react";
import dummyCaseData from "./dummyCaseData";
import "./Case.css"; // Assuming you have a separate CSS file named case.css
import { AiOutlineSearch } from "react-icons/ai";
import{MdDeleteForever} from "react-icons/md"
import { createDocWithUserIDRef, fetchDocWithUserIDRef } from "../../utils/firebase.utils";
import { UserContext } from "../../context/user.context";
const Case = () => {
  
  const { currentUser } = useContext(UserContext);
  const [selectedCase, setSelectedCase] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [caseData, setCaseData] = useState([]);
  const [filteredCases, setFilteredCases] = useState([]);
  const [caseNo, setCaseNo] = useState("");
  const [description,setDescription]=useState("");
  const [caseName, setCaseName] = useState("");
  const [partyName, setPartyName] = useState("");
  const [courtName, setCourtName] = useState("");
  const [partyContactNo, setPartyContactNo] = useState("");
  const [adversePartyName, setAdversePartyName] = useState("");
  const [adversePartyLawyerName, setAdversePartyLawyerName] = useState("");
  const [adversePartyLawyerNo, setAdversePartyLawyerNo] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");

  const handleCaseClick = (index) => {
    setSelectedCase(caseData[index]);
    setSelectedFeature("case-details-container");
  };

  const handleCloseDetails = () => {
    setSelectedCase(null);
    setSelectedFeature("");
  };

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
      description,
    };

    dummyCaseData.push(newCase); // Store new case data in dummyCaseData array

    createDocWithUserIDRef(currentUser, newCase);

    // Reset form fields
    setCaseNo("");
    setCaseName("");
    setPartyName("");
    setCourtName("");
    setPartyContactNo("");
    setAdversePartyName("");
    setAdversePartyLawyerName("");
    setAdversePartyLawyerNo("");
    setDescription("");
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = caseData.filter(
      (caseItem) =>
        caseItem.caseNo.toLowerCase().includes(query.toLowerCase()) ||
        caseItem.caseName.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCases(filtered);
  };

  const handleFeatureSelection = (feature) => {
    setSelectedFeature(feature);
  };


  const handleCaseContainer = () => {
    handleFeatureSelection("case-container");
    const latest =async()=>
    {
      const casesFetch = await fetchDocWithUserIDRef(currentUser);
      setCaseData(casesFetch);
      setFilteredCases(casesFetch);
    }
    latest();
  }
  return (
    <div className="case_container">
      <div className="case-features">
        <button onClick={handleCaseContainer}>
        Case Lists
        </button>
        
        <button onClick={() => handleFeatureSelection("create_new")}>
         Create New
        </button>
      </div>

      {selectedFeature === "case-container" && (
        <div className="case-container">
          <div className="case-heading">Case List</div>
          <div className="search">
            <input
              type="text"
              placeholder={"Search"}
              value={searchQuery}
              onChange={handleSearch}
            />
            <AiOutlineSearch />
            <MdDeleteForever/>
          </div>
          {filteredCases.map((caseItem, index)=> (
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
      )}

      {selectedFeature === "case-details-container" && selectedCase && (
        <div className="case-details-container">
          <div className="case-details">
            <h1>Case Details</h1>
            Case No: {selectedCase.caseNo}
            <br />
            Case Name: {selectedCase.caseName}
            <br />
            Party Name: {selectedCase.partyName}
            <br />
            Court Name: {selectedCase.courtName}
            <br />
            Party Contact No: {selectedCase.partyContactNo}
            <br />
            Adverse Party Name: {selectedCase.adversePartyName}
            <br />
            Adverse Party Lawyer Name: {selectedCase.adversePartyLawyerName}
            <br />
            Adverse Party Lawyer No: {selectedCase.adversePartyLawyerNo}
            <br />

            Description: {selectedCase.description}
          </div>
          <button className="close" onClick={handleCloseDetails}>
            Close
          </button>
        </div>
      )}

      {selectedFeature === "create_new" && (
        <div className="create_new">
          <h1>Add a new case</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="caseNo">
              Case No:
              <input
                type="text"
                id="caseNo"
                value={caseNo}
                onChange={(e) => setCaseNo(e.target.value)}
              />
            </label>

            <label htmlFor="caseName">
              Case Name:
              <input
                type="text"
                id="caseName"
                value={caseName}
                onChange={(e) => setCaseName(e.target.value)}
              />
            </label>

            <label htmlFor="partyName">
              Party Name:
              <input
                type="text"
                id="partyName"
                value={partyName}
                onChange={(e) => setPartyName(e.target.value)}
              />
            </label>

            <label htmlFor="courtName">
              Court Name:
              <input
                type="text"
                id="courtName"
                value={courtName}
                onChange={(e) => setCourtName(e.target.value)}
              />
            </label>

            <label htmlFor="partyContactNo">
              Party Contact No:
              <input
                type="text"
                id="partyContactNo"
                value={partyContactNo}
                onChange={(e) => setPartyContactNo(e.target.value)}
              />
            </label>

            <label htmlFor="adversePartyName">
              Adverse Party Name:
              <input
                type="text"
                id="adversePartyName"
                value={adversePartyName}
                onChange={(e) => setAdversePartyName(e.target.value)}
              />
            </label>

            <label htmlFor="adversePartyLawyerName">
              Adverse Party Lawyer Name:
              <input
                type="text"
                id="adversePartyLawyerName"
                value={adversePartyLawyerName}
                onChange={(e) => setAdversePartyLawyerName(e.target.value)}
              />
            </label>

            <label htmlFor="adversePartyLawyerNo">
              Adverse Party Lawyer No:
              <input
                type="text"
                id="adversePartyLawyerNo"
                value={adversePartyLawyerNo}
               onChange={(e) => setAdversePartyLawyerNo(e.target.value)}
              />
            </label>
            <label htmlFor="description">
            Description
            <textarea
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

            <div>
            <button className="crt" type="submit">
              Submit
            </button>
            
            <button className="crt"  type="submit"  onClick={handleCloseDetails}>
            Close
          </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Case;
