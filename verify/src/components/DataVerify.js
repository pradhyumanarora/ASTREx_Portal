import { React, useState, useEffect, Image } from "react";
import axios from "axios";
import { Avatar,Paper, makeStyles, Typography, Container, TextField, Button} from "@material-ui/core";
import useWindowDimensions from "../hooks/useWindowsDimensions.jsx";

const useStyles = makeStyles((theme) => ({
  search: {
    color: "black",
    backgroundColor: "white"
  }
}));

const DataVerify = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  const [reg, setReg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [dept, setDept] = useState("");
  const [hosteller, setHosteller] = useState("");
  const [gender, setGender] = useState("");
  const [img, setImg] = useState("");

  const [freg, setFReg] = useState("");
  const [fname, setFName] = useState("");
  const [femail, setFEmail] = useState("");
  const [fcontact, setFContact] = useState("");
  const [fdept, setFDept] = useState("");
  const [fhosteller, setFHosteller] = useState("");
  const [fgender, setFGender] = useState("");
  const [fimg, setFImg] = useState("");


  const [search, setSearch] = useState("");

  const handleFReg = (e) => {
    setFReg(e);
  }
  const handleFName = (e) => {
    setFName(e);
  }
  const handleFEmail = (e) => {
    setFEmail(e);
  }
  const handleFContact = (e) => {
    setFContact(e);
  }
  const handleFDept = (e) => {
    setFDept(e);
  }
  const handleFGender = (e) => {
    setFGender(e);
  }
  const handleFHosteller = (e) => {
    setFHosteller(e);
  }
  const handleFImg = (e) => {
    setFImg(e);
  }
  const handleSearchVal = (e) => {
    setSearch(e);
  }
  const handleSearch = () => {
    window.localStorage.setItem('username',search);
    axios
      .post("http://localhost:8083/api/profile/find", { username: window.localStorage.getItem('username')})
      .then((res) => {
        setReg(res.data.registration_no);
        setName(res.data.name);
        setEmail(res.data.email);
        setContact(res.data.contact);
        setGender(res.data.gender);
        setHosteller(res.data.hosteller.toString());
        setDept(res.data.department);
        setImg(res.data.imgurl);
        setFReg(res.data.registration_no);
        setFName(res.data.name);
        setFEmail(res.data.email);
        setFContact(res.data.contact);
        setFGender(res.data.gender);
        setFHosteller(res.data.hosteller.toString());
        setFDept(res.data.department);
        setFImg(res.data.imgurl);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  const handleUpdate = () => {
    const payload = {
      "username":freg,
      "registration_no":freg,
      "name":fname,
      "email":femail,
      "contact":fcontact,
      "gender":fgender,
      "hosteller": (fhosteller === "true"),
      "department": fdept,
      "imgurl": fimg,
    };
    axios.post("http://localhost:8083/api/profile/update",payload)
  .then(res=>{
    window.location.reload();
    alert(res.data.message);
  })};

  useEffect(() => {
    axios
      .post("http://localhost:8083/api/profile/find", { username: window.localStorage.getItem('username')})
      .then((res) => {
        setReg(res.data.registration_no);
        setName(res.data.name);
        setEmail(res.data.email);
        setContact(res.data.contact);
        setGender(res.data.gender);
        setHosteller(res.data.hosteller.toString());
        setDept(res.data.department);
        setImg(res.data.imgurl);
        setFReg(res.data.registration_no);
        setFName(res.data.name);
        setFEmail(res.data.email);
        setFContact(res.data.contact);
        setFGender(res.data.gender);
        setFHosteller(res.data.hosteller.toString());
        setFDept(res.data.department);
        setFImg(res.data.imgurl);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#001E6C",
        width: 0.969 * width,
        height: height,
        flexDirection: "column",
        padding: "1%",
        margin: "0%",
      }}
    >
    <div style={{width: 0.4*width,height:0.1*height,display:"flex",justifyContent: 'space-around', alignItems:"center"}}>
    <TextField InputProps={{
    className: classes.search
  }} id="fullWidth"  placeholder="Enter Registration No." autoComplete="off" variant="outlined" size="small" value={search} onChange={(e)=>handleSearchVal(e.target.value)} style={{width:"60%",color:"white"}}/>
  <Button variant="contained" style={{display: "flex",width: "20%",backgroundColor: "#1363DF",color:"white"}} 
       onClick = {handleSearch}  >Search</Button>
    </div>
    <div style={{display:"flex",flexDirection: "row",width:0.969*width,height:0.8*height
  , justifyContent: "space-around"}}>
    <Paper
        elevation={5}
        style={{
          display: "flex",
          height: 0.7 * height,
          width: 0.4 * width,
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor:"#DFF6FF"
        }}
      >
        <Container
          style={{
            width: "40%",
            height: "18%",
            display: "flex",
            justifyContent: "space-around",

          }}
        >
          {
            img === "" ? <img style={{borderRadius: "100%",height:"100%"}} src={require("./149071.png")} /> : <img style={{borderRadius: "100%", aspectRatio: 1}} src={img} />
          }
          
        </Container>
        
        <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "-2%"
          }}
        >
          <Container
            style={{
              width: "30%",
              height: "95%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Typography style={{ fontWeight: "bold" }}>
              Registation No.
            </Typography>
            <Typography style={{ fontWeight: "bold", display: "flex" }}>
              :
            </Typography>
          </Container>
          <Container
            style={{
              width: "45%",
              height: "95%",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            {reg}
          </Container>
        </Container>
        <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "-2%"
          }}
        >
          <Container
            style={{
              width: "30%",
              height: "95%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Typography style={{ fontWeight: "bold" }}>
              Name
            </Typography>
            <Typography style={{ fontWeight: "bold", display: "flex" }}>
              :
            </Typography>
          </Container>
          <Container
            style={{
              width: "45%",
              height: "95%",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            {name}
          </Container>
        </Container>
        <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "-2%"
          }}
        >
          <Container
            style={{
              width: "30%",
              height: "95%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Typography style={{ fontWeight: "bold" }}>
              Email
            </Typography>
            <Typography style={{ fontWeight: "bold", display: "flex" }}>
              :
            </Typography>
          </Container>
          <Container
            style={{
              width: "45%",
              height: "95%",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            {email}
          </Container>
        </Container>
        <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "-2%"
          }}
        >
          <Container
            style={{
              width: "30%",
              height: "95%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Typography style={{ fontWeight: "bold" }}>
              Contact
            </Typography>
            <Typography style={{ fontWeight: "bold", display: "flex" }}>
              :
            </Typography>
          </Container>
          <Container
            style={{
              width: "45%",
              height: "95%",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            {contact}
          </Container>
        </Container>
        <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "-2%"
          }}
        >
          <Container
            style={{
              width: "30%",
              height: "95%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Typography style={{ fontWeight: "bold" }}>
              Department
            </Typography>
            <Typography style={{ fontWeight: "bold", display: "flex" }}>
              :
            </Typography>
          </Container>
          <Container
            style={{
              width: "45%",
              height: "95%",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            {dept}
          </Container>
        </Container>
        <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "-2%"
          }}
        >
          <Container
            style={{
              width: "30%",
              height: "95%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Typography style={{ fontWeight: "bold" }}>
              Gender
            </Typography>
            <Typography style={{ fontWeight: "bold", display: "flex" }}>
              :
            </Typography>
          </Container>
          <Container
            style={{
              width: "45%",
              height: "95%",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            {gender}
          </Container>
        </Container>
        <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "-2%"
          }}
        >
          <Container
            style={{
              width: "30%",
              height: "95%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Typography style={{ fontWeight: "bold" }}>
              Hosteller
            </Typography>
            <Typography style={{ fontWeight: "bold", display: "flex" }}>
              :
            </Typography>
          </Container>
          <Container
            style={{
              width: "45%",
              height: "95%",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            {hosteller}
          </Container>
        </Container>
        
      </Paper>
      <Paper
        style={{
          display: "flex",
          height: 0.7 * height,
          width: 0.4 * width,
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor:"#DFF6FF"
        }}
      >
        <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            alignItems: "center",
          }}
        >
 
            <TextField id="fullWidth" label="Registration No." variant="outlined" size="small" value={freg} onChange={(e)=>{handleFReg(e.target.value)}} style={{width:"100%"}}/>
          </Container>
          <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            alignItems: "center",
          }}
        >
 
            <TextField id="fullWidth" label="Name" variant="outlined" size="small" value={fname} onChange={(e)=>{handleFName(e.target.value)}}style={{width:"100%"}}/>
          </Container>
          <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            alignItems: "center",
          }}
        >
 
            <TextField id="fullWidth" label="Email" variant="outlined" size="small" value={femail} onChange={(e)=>{handleFEmail(e.target.value)}} style={{width:"100%"}}/>
          </Container>
          <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            alignItems: "center",
          }}
        >
 
            <TextField id="fullWidth" label="Contact" variant="outlined" size="small" value={fcontact} onChange={(e)=>{handleFContact(e.target.value)}} style={{width:"100%"}}/>
          </Container>
          <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            alignItems: "center",
          }}
        >
 
            <TextField id="fullWidth" label="Department" variant="outlined" size="small" value={fdept} onChange={(e)=>{handleFDept(e.target.value)}} style={{width:"100%"}}/>
          </Container>
          <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            alignItems: "center",
          }}
        >
 
            <TextField id="fullWidth" label="Gender" variant="outlined" size="small" value={fgender} onChange={(e)=>{handleFGender(e.target.value)}} style={{width:"100%"}}/>
          </Container>
          <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            alignItems: "center",
          }}
        >
 
            <TextField id="fullWidth" label="Hosteller" variant="outlined" size="small" value={fhosteller} onChange={(e)=>{handleFHosteller(e.target.value)}} style={{width:"100%"}}/>
          </Container>
          <Container
          style={{
            width: "90%",
            height: "10%",
            display: "flex",
            alignItems: "center",
          }}
        >
 
        <TextField id="fullWidth" label="Image URL" variant="outlined" size="small" value={fimg} onChange={(e)=>{handleFImg(e.target.value)}} style={{width:"100%"}}/>
          </Container>
          
          <Button variant="contained" style={{display: "flex",width: "20%", alignSelf:"center",marginTop:"2%",backgroundColor: "#1363DF",color:"white"}} 
          onClick={handleUpdate}>Update</Button>
      </Paper>
    </div>
      
    </div>
  );
};

export default DataVerify;
